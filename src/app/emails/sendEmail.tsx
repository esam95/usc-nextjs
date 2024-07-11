import { Button, Heading, Html } from '@react-email/components';
import * as React from 'react';

type EmailProps = {
  name: string;
  address: string;
};

// Template for how the mail layout should look
// Run _npm run email_ to see the template

export default function Email({ name, address }: EmailProps) {
  return (
    <Html>
      <Heading>Welcome {name} </Heading>
      <Button
        href="https://example.com"
        style={{ background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '8px' }}
      >
        Click me
      </Button>
      <h3>{address}</h3>
    </Html>
  );
}
