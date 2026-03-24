import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    console.log('KEY:', process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@threadtara.com>',
      to: 'tarathread@gmail.com',  // 👈 your real email that you used to sign up on resend.com
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111827;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9fafb; padding: 12px; border-radius: 8px; color: #374151;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);  // 👈 shows exact error in terminal
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Email sent:', data);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Caught error:', err);      // 👈 shows crash reason in terminal
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}