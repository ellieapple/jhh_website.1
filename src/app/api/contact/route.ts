import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Rate-limit: max 5 submissions per IP per 15 minutes (in-memory, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { phone, fullname, email, message } = body as Record<string, unknown>;

  // Input validation
  const cleanPhone = sanitize(phone);
  const cleanName = sanitize(fullname);
  const cleanEmail = sanitize(email);
  const cleanMessage = sanitize(message);

  if (!cleanPhone) {
    return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  }
  if (!cleanName) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  // Check env vars
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM ?? "noreply@jhhcontractingconsultants.com";
  const toAddress = process.env.RESEND_TO ?? "info@jhhcontractingconsultants.com";

  if (!apiKey) {
    // In development without API key, just log and return success
    console.log("[Contact form] No RESEND_API_KEY set. Submission:", {
      cleanPhone,
      cleanName,
      cleanEmail,
      cleanMessage,
    });
    return NextResponse.json({ success: true });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: cleanEmail,
      subject: `New contact request from ${cleanName}`,
      html: `
        <h2 style="font-family:sans-serif;color:#0f1923;">New callback request — JHH Contracting Consultants</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;">
          <tr>
            <td style="padding:8px 12px;background:#f5f2ed;font-weight:600;width:120px;border:1px solid #d4cbbf;">Name</td>
            <td style="padding:8px 12px;border:1px solid #d4cbbf;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f5f2ed;font-weight:600;border:1px solid #d4cbbf;">Phone</td>
            <td style="padding:8px 12px;border:1px solid #d4cbbf;">${cleanPhone}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f5f2ed;font-weight:600;border:1px solid #d4cbbf;">Email</td>
            <td style="padding:8px 12px;border:1px solid #d4cbbf;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f5f2ed;font-weight:600;border:1px solid #d4cbbf;vertical-align:top;">Message</td>
            <td style="padding:8px 12px;border:1px solid #d4cbbf;white-space:pre-wrap;">${cleanMessage || "(none)"}</td>
          </tr>
        </table>
        <p style="font-family:sans-serif;font-size:12px;color:#8a8a8a;margin-top:24px;">Submitted via jhhcontractingconsultants.com</p>
      `,
      text: `New callback request\n\nName: ${cleanName}\nPhone: ${cleanPhone}\nEmail: ${cleanEmail}\nMessage: ${cleanMessage || "(none)"}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact form] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please call us directly." },
      { status: 500 }
    );
  }
}
