import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // FIX: Extract from payload.data, not just payload
    // We also add default values in case fields are missing
    const {
      from = 'Unknown Sender',
      to,
      subject = '(No Subject)',
      html = '',
      text = ''
    } = payload.data || {};

    // Guard clause: If there is no data, stop.
    if (!payload.data) {
      return NextResponse.json({ status: 'ignored', reason: 'no data' });
    }

    // Forward to Outlook
    await resend.emails.send({
      from: 'forwarder@alphasight.online',
      to: 'joelwango@outlook.com',
      subject: `[New Inquiry] ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f4f4f4;">
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="margin-top:0; color: #333;">New Message Received</h2>
            <p><strong>From:</strong> ${from}</p>
            <p><strong>To:</strong> ${to ? to.join(', ') : 'hello@alphasight.online'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <div style="color: #333; line-height: 1.6;">
              ${html || text || '(No content)'}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Inbound Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
