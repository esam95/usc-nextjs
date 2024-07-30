import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import Image from 'next/image';
import boxingImg from '../../../public/img/boxing_img.webp';
import mmaImg from '../../../public/img/mma_img.webp';
import submissionWrestling from '../../../public/img/nogi.webp';
import freeStyleWrestling from '../../../public/img/freestyle_wrestling.webp';
import logoIcon from '../../../public/logo_circular.webp';
import TimelineComponent from '@/components/TimelineComponent';

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
        <TimelineComponent />
      </div>
    </main>
  );
};

export default AboutUs;
