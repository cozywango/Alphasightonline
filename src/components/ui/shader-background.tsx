"use client"

import React, { useEffect, useRef } from "react"

export interface ShaderBackgroundProps {
  className?: string
}

const vertexSrc = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Slightly brighter/more contrast shader tuned toward Orange/Amber palette
const fragmentSrc = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

vec3 palette(float t) {
  vec3 a = vec3(1.0, 0.48, 0.18);   // blaze orange
  vec3 b = vec3(1.0, 0.78, 0.12);   // industrial gold
  return mix(a, b, smoothstep(0.0, 1.0, t));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv - 0.5;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.25;

  float n = 0.0;
  float freq = 1.0;
  float amp = 1.0;
  for (int i = 0; i < 4; i++) {
    n += (sin((p.x + p.y * 0.45 + t * 0.9) * freq) * 0.5 + 0.5) * amp;
    freq *= 2.0;
    amp *= 0.5;
  }

  float r = length(p) * 1.25;
  float cloud = smoothstep(0.55, -0.15, n - r);

  vec3 col = palette(0.5 + 0.5 * sin(n * 2.0 + t));
  col *= cloud * 1.25; // boost brightness
  float core = smoothstep(0.0, 0.6, 1.0 - r + 0.25 * sin(t + n));
  col += 0.9 * core * palette(1.0);

  // subtle vignette
  col *= smoothstep(0.95, 0.2, 1.0 - r * 0.8);

  // final clamp
  col = clamp(col, 0.0, 1.0);
  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(s)
    gl.deleteShader(s)
    throw new Error("Shader compile error: " + info)
  }
  return s
}

export default function ShaderBackground({ className = "" }: ShaderBackgroundProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const progRef = useRef<WebGLProgram | null>(null)
  const bufRef = useRef<WebGLBuffer | null>(null)
  const roRef = useRef<ResizeObserver | null>(null)
  const startRef = useRef<number | null>(null)
  const frameCounter = useRef(0)
  const lowQualityRef = useRef(false)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const canvas = canvasRef.current
    if (!wrapper || !canvas) return

    const gl = canvas.getContext("webgl", { antialias: true })
    if (!gl) return

    // Ensure opaque pure black clear color
    gl.clearColor(0, 0, 0, 1)

    // compile program
    let vert: WebGLShader | null = null
    let frag: WebGLShader | null = null
    let program: WebGLProgram | null = null
    try {
      vert = compile(gl, gl.VERTEX_SHADER, vertexSrc)
      frag = compile(gl, gl.FRAGMENT_SHADER, fragmentSrc)
      program = gl.createProgram()!
      gl.attachShader(program, vert)
      gl.attachShader(program, frag)
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const info = gl.getProgramInfoLog(program)
        gl.deleteProgram(program)
        throw new Error("Program link error: " + info)
      }
      progRef.current = program
    } catch (err) {
      console.error(err)
      if (vert) gl.deleteShader(vert)
      if (frag) gl.deleteShader(frag)
      return
    }

    // full-screen triangle pair
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ])
    const buf = gl.createBuffer()!
    bufRef.current = buf
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    gl.useProgram(program)
    const posLoc = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, "u_resolution")
    const uTime = gl.getUniformLocation(program, "u_time")

    function detectLowQuality(rectW: number) {
      // Consider low quality on narrow containers or coarse pointers
      const isCoarse = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(pointer: coarse)').matches
      if (isCoarse || rectW < 600) {
        lowQualityRef.current = true
      } else {
        lowQualityRef.current = false
      }
    }

    function resize() {
      const rect = wrapper.getBoundingClientRect()
      const cssW = Math.max(1, Math.floor(rect.width))
      const cssH = Math.max(1, Math.floor(rect.height))

      detectLowQuality(cssW)

      const devicePixelRatio = lowQualityRef.current ? 1 : Math.max(1, Math.min(window.devicePixelRatio || 1, 2))

      canvas.style.width = cssW + "px"
      canvas.style.height = cssH + "px"
      canvas.width = Math.max(1, Math.floor(cssW * devicePixelRatio))
      canvas.height = Math.max(1, Math.floor(cssH * devicePixelRatio))
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height)
    }

    roRef.current = new ResizeObserver(resize)
    roRef.current.observe(wrapper)
    resize()

    startRef.current = performance.now()
    function render(now: number) {
      frameCounter.current++
      const skip = lowQualityRef.current ? 3 : 1
      if (frameCounter.current % skip === 0) {
        const t = ((now - (startRef.current || now)) / 1000) % 10000
        gl.clear(gl.COLOR_BUFFER_BIT)
        if (uTime) gl.uniform1f(uTime, t)
        if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (roRef.current) {
        try { roRef.current.disconnect() } catch (e) {}
      }
      try {
        if (bufRef.current) { gl.deleteBuffer(bufRef.current); bufRef.current = null }
        if (progRef.current) {
          const attached = gl.getAttachedShaders(progRef.current) || []
          for (const s of attached) gl.deleteShader(s)
          gl.deleteProgram(progRef.current)
          progRef.current = null
        }
      } catch (e) {
        // ignore cleanup errors
      }
    }
  }, [className])

  return (
    <div ref={wrapperRef} className={className} aria-hidden>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
