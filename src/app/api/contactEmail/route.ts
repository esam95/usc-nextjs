import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactEmail from '@/app/emails/sendContactEmail';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fullName, emailAddress, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // This is just a testing email, remove later
      to: emailAddress,
      subject: 'Test email',
      react: ContactEmail({ fullName, emailAddress, message }),
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