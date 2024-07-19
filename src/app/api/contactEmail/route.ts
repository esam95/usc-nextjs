import { Resend } from 'resend';
import SendEmail from '@/app/emails/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // This is just a testing email, remove later
      to: email,
      subject: 'Test email',
      react: SendEmail({ name, message }),
    });

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      errors: null,
      statusCode: 201,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to send email',
      errors: error,
      statusCode: 500,
    });
  }
}
