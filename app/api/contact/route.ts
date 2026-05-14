import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, phone } = await request.json();

  if (!name || !email || !phone) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "DepthTour <onboarding@resend.dev>",
      to: "harshshah1012004@gmail.com",
      subject: `New Scan Request — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px;">
          <h2 style="margin-bottom: 16px;">New Scan Booking Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}
