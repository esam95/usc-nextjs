import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/shadcn/card';
import Image from 'next/image'

const AboutUs = () => {
  return (
    <>
      <h1>Om oss</h1>
      <Card>
        <CardHeader>
          <CardTitle>Välkommen till <span className="font-bold">Upprustningen Sports Club!</span></CardTitle>
          <CardDescription>Grundades år 2023, vårt uppdrag är att stärka individer 
              genom högkvalitativ träning, och främja både fysisk och 
              mental utveckling.</CardDescription>
        </CardHeader>
        <CardContent className="flex">
          <section className="flex-1">
          <h4>Vår filosofi</h4>
          <p >
            På Upprustningen Sports Club tror vi på en helhetssyn på kampsport. Våra träningsprogram är utformade för att förbättra färdigheter, bygga karaktär och skapa en stödjande gemenskap.
          </p><br/>
          
          <h4 >Erbjudna program</h4>
          <p>
            - <b>Boxing:</b> Från nybörjare till avancerade nivåer.<br />
            - <b>MMA:</b> Omfattande träning för alla färdighetsnivåer.<br />
            - <b>Submission wrestling:</b> En mix av stående och liggande brottning.<br />
            - <b>Fristils brottning:</b> Lärorika träningspass med erfarna tränare.
          </p><br/>
          
          <h4>Våra Tränare</h4>
          <p >
            Vårt erfarna tränarteam inkluderar erfarna proffs med imponerande bakgrunder inom olika kampsportsdiscipliner. De är dedikerade till att hjälpa dig att nå din personliga bästa nivå.
          </p>
          </section>
          <section className="flex-1 flex justify-center">
            <Image
              src="/logo_circular.webp"
              width={500}
              height={500}
              alt="Club Image"
            />
          </section>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutUs;
