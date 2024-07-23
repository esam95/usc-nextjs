import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import Image from 'next/image';
import boxingImg from '../../../public/img/boxing_img.webp';
import mmaImg from '../../../public/img/mma_img.webp';
import submissionWrestling from '../../../public/img/nogi.webp';
import freeStyleWrestling from '../../../public/img/freestyle_wrestling.webp';
import logoIcon from '../../../public/logo_circular.webp';

const AboutUs: React.FC = () => {
  return (
    <main className='min-h-screen min-w-80 w-full bg-secondary flex flex-col items-center'>
      <div className='w-full rounded-none bg-white overflow-hidden'>
        <div className='bg-primary text-primary-foreground p-6'>
          <span className='text-3xl font-bold mb-2'>
            <h2 className='text-primary-foreground font-extrabold'> Om Upprustningen Sports Club</h2>
          </span>
          <p className='text-base text-primary-foreground'>
            Grundades år 2023, vårt uppdrag är att stärka individer genom högkvalitativ träning, och främja
            både fysisk och mental utveckling.
          </p>
          <section className='flex-1 flex justify-center items-center bg-primary p-4'>
            <Image
              src={logoIcon}
              width={100}
              height={100}
              alt='Club Image'
              className='rounded-full shadow-lg max-w-36'
            />
          </section>
        </div>

        <CardContent className='flex flex-col md:flex-row p-6'>
          <div className='flex-1 md:mr-6'>
            <h3 className='font-semibold mb-4'>Vår filosofi</h3>
            <p className='text-base leading-relaxed mb-6'>
              På Upprustningen Sports Club tror vi på en helhetssyn på kampsport. Våra träningsprogram är
              utformade för att förbättra färdigheter, bygga karaktär och skapa en stödjande gemenskap.
            </p>

            <section className='w-full max-w-5xl my-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <h3 className='font-semibold mb-4 col-span-1 md:col-span-2'>Program vi erbjuder</h3>

              <Card className='relative h-64'>
                <Image
                  src={boxingImg}
                  alt={'Boxer punching bag, by Michael Starkie'}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                  placeholder='blur'
                />
                <div className='absolute inset-0 bg-slate-950 opacity-40 rounded-lg'></div>
                <CardContent className='relative z-10 text-white p-6'>
                  <h3 className='font-semibold text-xl mb-2'>Boxning</h3>
                  <p>Från nybörjare till avancerade nivåer.</p>
                </CardContent>
              </Card>

              <Card className='relative h-64'>
                <Image
                  src={mmaImg}
                  alt='MMA Training, by Redd F'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  placeholder='blur'
                />
                <div className='absolute inset-0 bg-slate-950 opacity-40 rounded-lg'></div>
                <CardContent className='relative z-10 text-white p-6'>
                  <h3 className='font-semibold text-xl mb-2'>MMA</h3>
                  <p>Omfattande träning för alla färdighetsnivåer.</p>
                </CardContent>
              </Card>

              <Card className='relative h-64'>
                <Image
                  src={submissionWrestling}
                  alt='Submission Wrestling, by Nathan Dumlao'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  placeholder='blur'
                />
                <div className='absolute inset-0 bg-slate-950 opacity-40 rounded-lg'></div>
                <CardContent className='relative z-10 text-white p-6'>
                  <h3 className='font-semibold text-xl mb-2'>Submission Wrestling</h3>
                  <p>En mix av stående och liggande brottning.</p>
                </CardContent>
              </Card>

              <Card className='relative h-64'>
                <Image
                  src={freeStyleWrestling}
                  alt='Freestyle Wrestling, from freepik.com'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  placeholder='blur'
                />
                <div className='absolute inset-0 bg-slate-950 opacity-40 rounded-lg'></div>
                <CardContent className='relative z-10 text-white p-6'>
                  <h3 className='font-semibold text-xl mb-2'>Fristils Brottning</h3>
                  <p>Lärorika träningspass med erfarna tränare.</p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h3 className='font-semibold mb-4'>Våra Tränare</h3>
              <p className='text-base leading-relaxed'>
                Vårt erfarna tränarteam inkluderar erfarna proffs med imponerande bakgrunder inom olika
                kampsportsdiscipliner. De är dedikerade till att hjälpa dig att nå din personliga bästa nivå.
              </p>
            </section>
          </div>
        </CardContent>
      </div>
    </main>
  );
};

export default AboutUs;

// Om oss
// Välkommen till Total sports Club!

// Vi är stolta över att presentera nyöppnad klubb i Järva som är en plats där passionerade idrottare och kampsports entusiaster kan komma samman för att utmana sig själva, växa som individer och uppnå sina träningsmål. På vår klubb erbjuder vi en dynamisk och stödjande miljö som främjar teknisk utveckling, fysisk styrka och mental skärpa.

// Oavsett om du är nybörjare eller erfaren inom kampsport, är du hjärtligt välkommen till oss. Vår klubb är öppen för alla, oavsett ålder och tidigare erfarenhet. Vi tror på att skapa en inkluderande gemenskap där varje medlem kan trivas och utvecklas.

// Vårt erfarna tränarteam består av dedikerade och kunniga instruktörer som brinner för att dela med sig av sina kunskap och hjälpa dig att nå nya höjder. Genom noggrant strukturerade träningsprogram och individuell vägledning fokuserar vi på att förbättra teknik, kondition och självförtroende hos våra medlemmar.

// Vi brinner väldigt mycket för brottning och grappling då det bästa basen för all kampsport. Dessa två sport är unika speciellt fristilsbrottning som kombinerar teknisk skicklighet, snabbhet, explosivitet, kreativitet och improvisation. Dess globala popularitet och förmåga att engagera människor runt om i världen gör det till en av de bästa sporterna som finns.

// Total Sports Club har målet är att uppmuntra hälsosam livsstil och få unga att engagera sig i regelbunden motion istället för att ägna sig åt mindre gynnsamma aktiviteter. Genom att erbjuda träning och utbildning inom kampsport, strävar klubben efter att locka ungdomar till att bli fysiskt aktiva, bygga styrka och kondition samt utveckla värdefulla livs färdigheter som disciplin, respekt och kamratskap. Målet är att erbjuda en meningsfull och positiv fritidsaktivitet som kan gynna unga fysiska och mentala hälsa på lång sikt. Vi satsar även på att stödja vuxna… (skriv på lite till)

// Vi ser fram emot att välkomna dig till vårt brottnings/MMA-team och hjälpa dig att nå dina träningsmål. Tillsammans skapar vi en starkare och mer passionerad kampsportsfamilj!
