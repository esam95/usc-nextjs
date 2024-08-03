import { Resend } from 'resend';
import StodmedlemEmailTemplate from '@/app/emails/StodmedlemEmailTemplate';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const UPPRUSTNINGEN_EMAIL = process.env.UPPRUSTNINGEN_EMAIL;
  const formData = await request.json();

  // Extract specific fields you need for sending the email
  const {
    name,
    emailAddress,
    amount,
  } = formData;

  try {
    await resend.emails.send({
      // from: `Upprustningen Sports Club <${UPPRUSTNINGEN_EMAIL}>`,
      from: `Testing email <onboarding@resend.dev>`,
      to: emailAddress,
      subject: 'Ny medlem',
      react: StodmedlemEmailTemplate({
        name,
        emailAddress,
        amount,
      }),
    });

    console.log('data', formData);
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
