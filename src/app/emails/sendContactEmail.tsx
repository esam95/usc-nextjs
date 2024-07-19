import { Button, Heading, Html } from '@react-email/components';
import * as React from 'react';

type EmailProps = {
  fullName: string;
  emailAddress: string;
  message: string;
};

// Template for how the mail layout should look
// Run _npm run email_ to see the template

export default function ContactEmail({ fullName, emailAddress, message }: EmailProps) {
  return (
    <Html>
      <Heading>Message from {fullName} with email {emailAddress} </Heading>
      
      <h3>{message}</h3>
    </Html>
  );
}
