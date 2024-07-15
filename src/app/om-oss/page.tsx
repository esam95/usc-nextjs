import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import Image from 'next/image';
import boxingImg from '../../../public/img/boxing_img.webp';
import mmaImg from '../../../public/img/mma_img.webp';
import submissionWrestling from '../../../public/img/nogi.webp';

const AboutUs: React.FC = () => {
  return (
    <main className="min-h-screen min-w-80 w-full bg-secondary flex flex-col items-center md:px-6">
      <Card className="w-full  bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground p-6">
          <CardTitle className="text-3xl font-bold mb-2">
            <span className="font-extrabold"> Om Upprustningen Sports Club</span>
          </CardTitle>
          <CardDescription className="text-base text-primary-foreground">
            Grundades år 2023, vårt uppdrag är att stärka individer genom högkvalitativ träning, och främja
            både fysisk och mental utveckling.
          </CardDescription>
          <section className="flex-1 flex justify-center items-center bg-primary p-4">
            <Image
              src="/Logga cirkulär.png"
              width={150}
              height={150}
              alt="Club Image"
              className="rounded-full shadow-lg"
            />
          </section>
        </CardHeader>

        <CardContent className="flex flex-col md:flex-row p-6">
          <div className="flex-1 md:mr-6">
            <h3 className="font-semibold mb-4">Vår filosofi</h3>
            <p className="text-base leading-relaxed mb-6">
              På Upprustningen Sports Club tror vi på en helhetssyn på kampsport. Våra träningsprogram är
              utformade för att förbättra färdigheter, bygga karaktär och skapa en stödjande gemenskap.
            </p>

            <section className="w-full max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <h3 className="font-semibold mb-4 col-span-1 md:col-span-2">Program vi erbjuder</h3>

              <Card className="relative h-64">
                <Image
                  src={boxingImg}
                  alt={'Boxer punching bag, by Michael Starkie'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-slate-950 opacity-40 rounded-lg"></div>
                <CardContent className="relative z-10 text-white p-6">
                  <h3 className="font-semibold text-xl mb-2">Boxning</h3>
                  <p>Från nybörjare till avancerade nivåer.</p>
                </CardContent>
              </Card>

              <Card className="relative h-64">
                <Image
                  src={mmaImg}
                  alt="MMA Training, by Redd F"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-slate-950 opacity-40 rounded-lg"></div>
                <CardContent className="relative z-10 text-white p-6">
                  <h3 className="font-semibold text-xl mb-2">MMA</h3>
                  <p>Omfattande träning för alla färdighetsnivåer.</p>
                </CardContent>
              </Card>

              <Card className="relative h-64">
                <Image
                  src={submissionWrestling}
                  alt="Submission Wrestling, by Nathan Dumlao"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-slate-950 opacity-40 rounded-lg"></div>
                <CardContent className="relative z-10 text-white p-6">
                  <h3 className="font-semibold text-xl mb-2">Submission Wrestling</h3>
                  <p>En mix av stående och liggande brottning.</p>
                </CardContent>
              </Card>

              <Card className="relative h-64">
                <Image
                  src="/images/wrestling.jpg"
                  alt="Freestyle Wrestling"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-slate-950 opacity-40 rounded-lg"></div>
                <CardContent className="relative z-10 text-white p-6">
                  <h3 className="font-semibold text-xl mb-2">Fristils Brottning</h3>
                  <p>Lärorika träningspass med erfarna tränare.</p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h3 className="font-semibold mb-4">Våra Tränare</h3>
              <p className="text-base leading-relaxed">
                Vårt erfarna tränarteam inkluderar erfarna proffs med imponerande bakgrunder inom olika
                kampsportsdiscipliner. De är dedikerade till att hjälpa dig att nå din personliga bästa nivå.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default AboutUs;
