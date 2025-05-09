import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactEmail from '@/app/emails/sendContactEmail';

export async function POST(request: Request) {
  const { UPPRUSTNINGEN_CONTACT_EMAIL } = process.env;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.json();

  // Extract specific fields you need for sending the email
  const { name, emailAddress, message } = formData;

  try {
    await resend.emails.send({
      from: `Upprustningen Sports Club <${UPPRUSTNINGEN_CONTACT_EMAIL}>`,
      to: [`${UPPRUSTNINGEN_CONTACT_EMAIL}`],
      subject: 'Kontakta oss',
      react: ContactEmail({ name, emailAddress, message }),
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
