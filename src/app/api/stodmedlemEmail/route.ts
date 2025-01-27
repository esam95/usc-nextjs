import { Resend } from 'resend';
import StodmedlemEmailTemplate from '@/app/emails/StodmedlemEmailTemplate';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { UPPRUSTNINGEN_REGISTRATION_EMAIL } = process.env;
  const formData = await request.json();

  // Extract specific fields you need for sending the email
  const { name, personnumber, emailAddress } = formData;

  try {
    await resend.emails.send({
      from: `Upprustningen Sports Club <${UPPRUSTNINGEN_REGISTRATION_EMAIL}>`,
      to: [`${UPPRUSTNINGEN_REGISTRATION_EMAIL}`, `${emailAddress}`],
      subject: 'Ny stödmedlem',
      react: StodmedlemEmailTemplate({
        name,
        personnumber,
        emailAddress,
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
