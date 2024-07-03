import { Button, Heading, Html } from '@react-email/components';
import * as React from 'react';

type EmailProps = {
  firstName: string;
};

// Template for how the mail layout should look
// Run _npm run email_ to see the template

export default function Email({ firstName }: EmailProps) {
  return (
    <Html>
      <Heading>Welcome {firstName} </Heading>
      <Button
        href="https://example.com"
        style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px' }}
      >
        Click me
      </Button>
    </Html>
  );
}
