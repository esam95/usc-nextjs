import { CardContent } from '@/components/shadcn/card';
import Image from 'next/image';
import clubLogo from '../../../public/club_logo.webp';
import TimelineComponent from '@/components/TimelineComponent';
import aboutUsImg from '../../../public/img/aboutUs.webp';

const AboutUs: React.FC = () => {
  return (
    <main className='min-h-screen w-full flex flex-col items-center'>
      {/* Hero Section */}
      <div className='relative w-full min-h-screen'>
        <Image
          src={aboutUsImg}
          alt='About Us Background'
          layout='fill'
          objectFit='cover'
          className='w-full h-full object-cover opacity-60'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center p-4'>
          <h1 className='text-secondary-foreground text-4xl font-bold text-center md:text-6xl'>
            Om Upprustningen Sports Club
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id='content' className='mt-12 mb-24 w-full text-secondary-foreground p-4 md:p-6'>
        <section className='flex flex-col items-center text-center p-4'>
          <Image
            src={clubLogo}
            width={100}
            height={100}
            alt='Club Logo'
            className='rounded-full shadow-lg mb-4'
          />
          <p className='text-base'>
            Grundades år 2023, vårt uppdrag är att stärka individer genom högkvalitativ träning, och främja
            både fysisk och mental utveckling.
          </p>
        </section>

        <CardContent className='flex flex-col p-4 mb-10 md:flex-row md:mb-16 md:p-6 lg:mb-20'>
          <div className='flex-1 md:mr-6'>
            <h3 className='font-semibold mb-4'>Vår filosofi</h3>
            <p className='text-base leading-relaxed mb-4'>
              Välkommen till Upprustningen Sports Club! Vi är stolta över att presentera vår nyöppnade klubb i Järva –
              en plats där passionerade idrottare och kampsportsentusiaster kan komma samman för att utmana
              sig själva, växa som individer och uppnå sina träningsmål.
            </p>

            <p className='text-base leading-relaxed mb-4'>
              På vår klubb erbjuder vi en dynamisk och stödjande miljö som främjar teknisk utveckling, fysisk
              styrka och mental skärpa. Oavsett om du är nybörjare eller erfaren inom kampsport, är du
              hjärtligt välkommen till oss. Vår klubb är öppen för alla, oavsett ålder och tidigare
              erfarenhet.
            </p>

            <p className='text-base leading-relaxed mb-4'>
              Genom noggrant strukturerade träningsprogram och individuell vägledning fokuserar vi på att
              förbättra teknik, kondition och självförtroende hos våra medlemmar. Vi brinner för brottning och
              grappling, då vi anser att de utgör den bästa basen för all kampsport.
            </p>

            <p className='text-base leading-relaxed mb-4'>
              Upprustningen Sports Club har som mål att uppmuntra en hälsosam livsstil och få unga att engagera sig i
              regelbunden motion istället för mindre gynnsamma aktiviteter. Genom att erbjuda träning och
              utbildning inom kampsport, strävar klubben efter att locka ungdomar till att bli fysiskt aktiva,
              bygga styrka och kondition samt utveckla värdefulla livsfärdigheter som disciplin, respekt och
              kamratskap.
            </p>

            <p className='text-base leading-relaxed mb-4'>
              Vi ser fram emot att välkomna dig till vårt brottnings- och MMA-team och hjälpa dig att nå dina
              träningsmål. Tillsammans skapar vi en starkare och mer passionerad kampsportsfamilj!
            </p>

          </div>
        </CardContent>

        <TimelineComponent />
      </div>
    </main>
  );
};

export default AboutUs;
