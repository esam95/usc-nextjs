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
  address: string;
  postalCode: string;
  personnumber: string;
  telephone: string;
  gender: string;
  sports: string[];
  diseases: string;
  trainingFrequency: string;
  discount: boolean;
  comments: string;
  guardianName: string;
  guardianTelephone: string;
  friendReferal: boolean;
  friendsName: string;
};

export default function EmailTemplate({
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
}: EmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Medlems registrering</Preview>
        <Body style={bodyStyle}>
          <Container style={containerStyle}>
            <Section style={mainSectionStyle}>
              <Img
                src='https://upprustningensportsclub.wordpress.com/wp-content/uploads/2024/03/upprustningen-sc-logga.jpg'
                alt='Logo'
                width='150'
                height='150'
                style={logoStyle}
              />
            </Section>

            <Section style={sectionsBordersStyle}>
              <Row>
                <Column style={sectionBorderStyle} />
                <Column style={sectionCenterStyle} />
                <Column style={sectionBorderStyle} />
              </Row>
            </Section>
            <Section style={sectionStyle}>
              <Text style={textTitleStyle}>Grattis!</Text>
              <Text style={textBaseStyle}>
                Du har registrerat dig som ny medlem. Nedan följer detaljerna:
              </Text>
              <Section style={infoSectionStyle}>
                <Text style={infoLabelStyle}>Namn:</Text>
                <Text style={infoValueStyle}>{name}</Text>
                <Text style={infoLabelStyle}>Mejl adress:</Text>
                <Text style={infoValueStyle}>{emailAddress}</Text>
                <Text style={infoLabelStyle}>Adress:</Text>
                <Text style={infoValueStyle}>{address}</Text>
                <Text style={infoLabelStyle}>Postkod:</Text>
                <Text style={infoValueStyle}>{postalCode}</Text>
                <Text style={infoLabelStyle}>Personnummer:</Text>
                <Text style={infoValueStyle}>{personnumber}</Text>
                <Text style={infoLabelStyle}>Telefon:</Text>
                <Text style={infoValueStyle}>{telephone}</Text>
                <Text style={infoLabelStyle}>Kön:</Text>
                <Text style={infoValueStyle}>{gender}</Text>
                <Text style={infoLabelStyle}>Sporter:</Text>
                <Text style={infoValueStyle}>{sports?.join(', ')}</Text>
                <Text style={infoLabelStyle}>Sjukdomar:</Text>
                <Text style={infoValueStyle}>{diseases || 'N/A'}</Text>
                <Text style={infoLabelStyle}>Träning per vecka:</Text>
                <Text style={infoValueStyle}>{trainingFrequency}</Text>
                <Text style={infoLabelStyle}>Rabatterat pris:</Text>
                <Text style={infoValueStyle}>{discount ? 'Ja' : 'Nej'}</Text>
                <Text style={infoLabelStyle}>Kommentarer:</Text>
                <Text style={infoValueStyle}>{comments || 'N/A'}</Text>
                <Text style={infoLabelStyle}>Vårdnadshavares namn:</Text>
                <Text style={infoValueStyle}>{guardianName || 'N/A'}</Text>
                <Text style={infoLabelStyle}>Vårdnadshavares Telefonnummer:</Text>
                <Text style={infoValueStyle}>{guardianTelephone || 'N/A'}</Text>
                <Text style={infoLabelStyle}>Värva en vän:</Text>
                <Text style={infoValueStyle}>{friendReferal ? 'Ja' : 'Nej'}</Text>
                <Text style={infoLabelStyle}>Vännens namn:</Text>
                <Text style={infoValueStyle}>{friendsName || 'N/A'}</Text>
              </Section>

              <Text style={footerTextStyle}>
                Tack,
                <br />
                Upprustningen Sports Klubb
              </Text>
            </Section>
          </Container>

          <Section style={footerSectionStyle}>
            <Row>
              <Column align='right' style={columnStyle}>
                <Link href='https://www.instagram.com/totalsthlm/'>
                  <Img
                    alt='instagram icon'
                    src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-1024.png'
                    style={iconStyle}
                  />
                </Link>
              </Column>
              <Column align='left' style={columnStyle}>
                <Link href=''>
                  <Img
                    alt='totalsports club icon'
                    src='https://upprustningensportsclub.wordpress.com/wp-content/uploads/2024/03/upprustningen-sc-logga.jpg'
                    style={iconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Text style={{ textAlign: 'center' }}>
                © 2024 Upprustningen Sports Klubb, All Rights Reserved <br />
                Stockholm - Sweden
              </Text>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Inline CSS styles (used from the first file)
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

const sectionsBordersStyle = {
  display: 'flex',
  width: '100%',
};

const sectionBorderStyle = {
  borderBottom: '2px solid #a2b1c0',
  width: '249px',
};

const sectionCenterStyle = {
  borderBottom: '2px solid #a2b1c0',
  width: '102px',
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
  backgroundColor: '#f8f9fa',
};

const iconStyle = {
  width: '40px',
};
