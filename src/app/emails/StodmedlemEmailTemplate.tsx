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
  amount: number;
};

export default function StodmedlemEmailTemplate({
  name,
  emailAddress,
  amount,
}: EmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Ny stödmedlemsregistrering</Preview>
        <Body className="bg-background text-foreground font-sans">
          <Container className="max-w-[580px] mx-auto my-8 bg-card text-card-foreground shadow-lg rounded-lg">
            <Section
              className="flex justify-center items-center p-8 border-b border-border"
              style={backgroundColor}
            >
              <Img
                src="https://upprustningensportsclub.wordpress.com/wp-content/uploads/2024/03/upprustningen-sc-logga.jpg"
                alt="Logo"
                width="150"
                height="150"
                className="rounded-full"
              />
            </Section>

            <Section style={sectionsBorders}>
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section className="p-5 px-8">
              <Text className="leading-6 text-xl font-semibold mb-4 text-primary">Grattis!</Text>
              <Text className="leading-6 text-base mb-4">
                En ny stödmedlem har registrerat sig. Nedan följer detaljerna:
              </Text>
              <Section className="bg-gray-100 p-4 rounded-lg shadow-xl">
                <Text className="leading-6 text-base font-bold">Namn:</Text>
                <Text className="leading-6 text-base mb-2">{name}</Text>
                <Text className="leading-6 text-base font-bold">Mejl adress:</Text>
                <Text className="leading-6 text-base mb-2">{emailAddress}</Text>
                <Text className="leading-6 text-base font-bold">Mängd:</Text>
                <Text className="leading-6 text-base mb-2">{amount}</Text>
              </Section>

              <Text className="leading-6 text-base mt-4">
                Tack,
                <br />
                Upprustningen Sports Klubb
              </Text>
            </Section>
          </Container>

          <Section className="max-w-[580px] mx-auto">
            <Row>
              <Column align="right" className="w-1/2 pr-2">
                <Link href="https://www.instagram.com/totalsthlm/">
                  <Img
                    className="w-10"
                    alt="instagram icon"
                    src={`https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-1024.png`}
                  />
                </Link>
              </Column>
              <Column align="left" className="w-1/2 pl-2">
                <Link href="">
                  <Img
                    className="w-10"
                    alt="totalsports club icon"
                    src={`https://upprustningensportsclub.wordpress.com/wp-content/uploads/2024/03/upprustningen-sc-logga.jpg`}
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Text className="text-center text-muted-foreground">
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

const sectionsBorders = {
  width: '100%',
  display: 'flex',
};

const sectionBorder = {
  borderBottom: '2px solid #a2b1c0',
  width: '249px',
};

const sectionCenter = {
  borderBottom: '2px solid #a2b1c0',
  width: '102px',
};

const logo = {
  padding: '30px 20px',
};

const backgroundColor = {
  background: 'linear-gradient(90deg, rgba(201,230,255,1) 0%, rgba(24,171,200,1) 100%)',
};
