import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import SessionTrialTemplate from '@/app/emails/SessionTrialTemplate';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { UPPRUSTNINGEN_REGISTRATION_EMAIL } = process.env;
  const formData = await request.json();

  // Extract specific fields you need for sending the email
  const {
    name,
    personnumber,
    gender,
    sport,
    diseases,
    comments,
    guardianName,
    guardianTelephone,
    date
  } = formData;

  try {
    await resend.emails.send({
      from: `Upprustningen Sports Club <${UPPRUSTNINGEN_REGISTRATION_EMAIL}>`,
      to: [`esam_95@hotmail.se`],
      subject: 'Ny provträning',
      react: SessionTrialTemplate({
        name,
        guardianName,
        guardianTelephone,
        diseases,
        comments,
        gender,
        personnumber,
        sport,
        date
      }),
    });
    console.log("RESEND_API_KEY", process.env.RESEND_API_KEY);
    console.log("EMAIL", process.env.UPPRUSTNINGEN_REGISTRATION_EMAIL);
    
    console.log('data', formData);
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      errors: null,
      statusCode: 201,
    });
  } catch (error) {
    console.log("RESEND_API_KEY", process.env.RESEND_API_KEY);
console.log("EMAIL", process.env.UPPRUSTNINGEN_REGISTRATION_EMAIL);

    return NextResponse.json({
      success: false,
      message: 'Failed to send email',
      errors: error,
      statusCode: 500,
    });
  }
}
