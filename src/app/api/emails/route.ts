import { Resend } from 'resend';
import EmailTemplate from '@/app/emails/EmailTemplate';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { UPPRUSTNINGEN_EMAIL_TEST } = process.env;
  const formData = await request.json();

  // Extract specific fields you need for sending the email
  const {
    name,
    emailAddress,
    address,
    postalCode,
    personnumber,
    telephone,
    gender,
    sports,
    diseases,
    trainingFrequency,
    discount,
    comments,
    guardianName,
    guardianTelephone,
    friendReferal,
    friendsName,
  } = formData;

  try {
    await resend.emails.send({
      from: `Upprustningen Sports Club <${UPPRUSTNINGEN_EMAIL_TEST}>`,
      to: [UPPRUSTNINGEN_EMAIL_TEST, emailAddress],
      subject: 'Ny medlem',
      react: EmailTemplate({
        name,
        address,
        guardianName,
        guardianTelephone,
        friendReferal,
        friendsName,
        diseases,
        trainingFrequency,
        discount,
        comments,
        telephone,
        gender,
        postalCode,
        personnumber,
        emailAddress,
        sports,
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
