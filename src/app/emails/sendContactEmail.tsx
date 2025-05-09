import * as React from 'react';
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

type EmailProps = {
  name: string;
  emailAddress: string;
  message: string;
};

export default function ContactEmail({ name, emailAddress, message }: EmailProps) {
  const d = new Date();


  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Nytt meddelande</Preview>
        <Body style={bodyStyle}>
          <Container style={containerStyle}>
            <Section style={mainSectionStyle}>
              <Img
                src='/img/club_logo.webp'
                alt='Logo'
                width='150'
                height='150'
                style={logoStyle}
              />
            </Section>

            <Section style={sectionStyle}>
              <Text style={textTitleStyle}>Nytt meddelande</Text>
              <Text style={textBaseStyle}>
                En nytt meddelande har skickats via kontaktformuläret. Nedan följer detaljerna:
              </Text>
              <Section style={infoSectionStyle}>
                <Text style={infoLabelStyle}>Namn:</Text>
                <Text style={infoValueStyle}>{name}</Text>
                <Text style={infoLabelStyle}>Mejl adress:</Text>
                <Text style={infoValueStyle}>{emailAddress}</Text>
                <Text style={infoLabelStyle}>Meddelande:</Text>
                <Text style={infoValueStyle}>{message}</Text>
              </Section>

              <Text style={footerTextStyle}>
                Tack,
                <br />
                Upprustningen Sports Club
              </Text>
            </Section>
          </Container>

          <Section style={footerSectionStyle}>
            <Row>
              <Column align='right' style={columnStyle}>
                <Link href='https://www.instagram.com/upprustningensc'>
                  <Img
                    alt='instagram icon'
                    src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-1024.png'
                    style={iconStyle}
                  />
                </Link>
              </Column>
              <Column align='left' style={columnStyle}>
                <Link href='https://www.upprustningensc.nu'>
                  <Img
                    alt='Upprustningen SC club icon'
                    src='/img/club_logo.webp'
                    style={iconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Text style={{ textAlign: 'center' }}>
                © {d.getFullYear()} Upprustningen Sports Club, All Rights Reserved <br />
                Stockholm - Sweden
              </Text>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Inline CSS styles
const bodyStyle = {
  backgroundColor: '#f8f9fa',
  fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
};

const containerStyle = {
  maxWidth: '580px',
  margin: 'auto',
  marginTop: '32px',
  marginBottom: '32px',
  backgroundColor: '#ffffff',
  color: '#000000',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const mainSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px',
  borderBottom: '1px solid #e0e0e0',
  backgroundColor: '#67acf1',
};

const logoStyle = {
  borderRadius: '50%',
};

const sectionStyle = {
  padding: '20px 32px',
};

const textTitleStyle = {
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '16px',
  color: '#4593e6',
};

const textBaseStyle = {
  fontSize: '16px',
  marginBottom: '16px',
};

const infoSectionStyle = {
  backgroundColor: '#f1f1f1',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const infoLabelStyle = {
  fontSize: '16px',
  fontWeight: '700',
};

const infoValueStyle = {
  fontSize: '16px',
  marginBottom: '8px',
};

const footerTextStyle = {
  fontSize: '16px',
  marginTop: '16px',
};

const footerSectionStyle = {
  maxWidth: '580px',
  margin: 'auto',
};

const columnStyle = {
  width: '50%',
  padding: '0 8px',
  background: '#f8f9fa',
};

const iconStyle = {
  width: '40px',
};
