import nodemailer from 'nodemailer';

// ---------------------------------------------------------------------------
// CORS Wrapper — required for Vite + Vercel interaction
// ---------------------------------------------------------------------------
const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// ---------------------------------------------------------------------------
// Rate Limiting — in-memory store (resets on cold start, acceptable for
// serverless where each instance handles bursts independently)
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const rateLimitMap = new Map();

/**
 * Returns true if the given IP should be rate-limited.
 */
function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  if (now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

/**
 * Sanitize a string to prevent HTML/script injection.
 */
function sanitize(input) {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Extract the client IP address from request headers.
 */
function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return typeof forwarded === 'string'
      ? forwarded.split(',')[0].trim()
      : forwarded[0];
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

// ---------------------------------------------------------------------------
// Main Handler
// ---------------------------------------------------------------------------
async function handler(req, res) {
  console.log(`[API] /contact called with method: ${req.method}`);

  // 1. Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // 2. Rate limiting
  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
    });
  }

  // 3. Validate SMTP environment variables (never log credentials)
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactReceiver = process.env.CONTACT_RECEIVER;

  if (!smtpHost || !smtpUser || !smtpPass || !contactReceiver) {
    console.error('Missing one or more required SMTP env vars.');
    return res.status(500).json({ error: 'Server misconfiguration.' });
  }

  try {
    // 4. Parse and validate input
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, website, message, inquiryType, phone, socials, productName, requirements } = body || {};

    // Name and email are always required
    if (!name || !email) {
      return res.status(400).json({ error: 'Missing required fields (name, email).' });
    }

    // Message is required unless it's a product inquiry
    if (!message && inquiryType !== 'product_inquiry') {
      return res.status(400).json({ error: 'Missing required fields (name, email, message).' });
    }

    // 5. Sanitize all inputs
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeSocials = sanitize(socials);
    const safeWebsite = sanitize(website);
    const safeProductName = sanitize(productName);
    const safeMessage = sanitize(requirements || message || '');

    // 6. Determine subject prefix based on inquiry type
    let subjectPrefix = '[FOUNDER INQUIRY]';
    if (inquiryType === 'marketer') subjectPrefix = '[HUNTER APPLICATION]';
    if (inquiryType === 'product_inquiry') subjectPrefix = `[PRODUCT INQUIRY] ${safeProductName || 'General'}`;

    const inquiryLabel =
      inquiryType === 'marketer'
        ? 'Hunter Application'
        : inquiryType === 'product_inquiry'
          ? 'Product Inquiry'
          : 'Founder Inquiry';

    // 7. Create Nodemailer transporter (inside handler for serverless safety)
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 8. Send the email — both plain text and HTML
    await transporter.sendMail({
      from: `"${safeName} via Alphasight" <${smtpUser}>`,
      to: contactReceiver,
      replyTo: email, // unsanitized so mail clients can reply properly
      subject: `${subjectPrefix} from ${safeName}`,
      // Plain text version
      text: [
        `${subjectPrefix}`,
        ``,
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        `Phone: ${safePhone || 'Not provided'}`,
        `Socials: ${safeSocials || 'Not provided'}`,
        `Website: ${safeWebsite || 'Not provided'}`,
        `Type: ${inquiryLabel}`,
        `Product: ${safeProductName || 'N/A'}`,
        ``,
        `Message / Requirements:`,
        safeMessage || 'No message provided',
      ].join('\n'),
      // HTML version
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f4f4f4;">
          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e0e0e0;">
            <h2 style="margin-top: 0; color: #111;">${subjectPrefix}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #374151; width: 90px; vertical-align: top;">Name</td>
                <td style="padding: 8px 12px; color: #111;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Email</td>
                <td style="padding: 8px 12px; color: #111;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Phone</td>
                <td style="padding: 8px 12px; color: #111;">${safePhone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Socials</td>
                <td style="padding: 8px 12px; color: #111;">${safeSocials || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Website</td>
                <td style="padding: 8px 12px; color: #111;">${safeWebsite || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Type</td>
                <td style="padding: 8px 12px; color: #111;">${inquiryLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Product</td>
                <td style="padding: 8px 12px; color: #111;">${safeProductName || 'N/A'}</td>
              </tr>
            </table>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="color: #374151; margin-bottom: 8px;">Message / Requirements:</h3>
            <div style="color: #333; white-space: pre-wrap; line-height: 1.6; background: #f9fafb; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb;">
              ${safeMessage || 'No message provided'}
            </div>
          </div>
          <p style="margin: 16px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
            Sent via the Alphasight contact form &bull; Delivered by Nodemailer
          </p>
        </div>
      `,
    });

    console.log('[API] Email sent successfully via Nodemailer SMTP');

    return res.status(200).json({ success: true, message: 'Email sent!' });

  } catch (error) {
    // Log error message only — never log credentials
    console.error('[API] Contact form error:', error.message);
    return res.status(500).json({
      error: 'Failed to send email. Please try again later.',
    });
  }
}

// Export the handler wrapped in CORS logic
export default allowCors(handler);