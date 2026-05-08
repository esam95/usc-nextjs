// This component is from
// https://daisyui.com/components/timeline/

import Image from 'next/image';
import React from 'react';

function TimelineComponent() {
  return (
    <>
      <div className='container mx-auto p-4'>
        <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
          <li id='first-timeline' className='md:h-[27.5rem] lg:h-[37.5rem]'>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary mb-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='mb-16 md:self-start md:h-full timeline-end'>
              <time className='font-mono italic'>Mars 2023</time>
              <div className='text-lg font-black'>Klubbens första träning</div>
              <p>
                Ett gäng ungdomar från Järva bestämmer sig för att hyra idrottshall i Husby och träna
                fristilsbrottning. Grunderna i fristilsbrottning lärs ut sakta men säkert fyra gånger i
                veckan.
              </p>
              <div className='md:hidden'>
                <Image
                  src='/img/wrestling_practice.webp'
                  width={500}
                  height={500}
                  alt='Träning i fristilsbrottning'
                  className='mt-4'
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
            <div className='md:block md:timeline-start md:my-10'>
              <Image
                src='/img/wrestling_practice.webp'
                width={500}
                height={500}
                alt='Träning i fristilsbrottning'
                className='mt-4'
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <hr className='bg-muted-foreground md:mx-8' />
          </li>
          <li id='second-timeline' className='md:h-[27.5rem] lg:h-[37.5rem]'>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary mb-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div style={{ marginBottom: '4rem' }} className='md:self-start md:h-full timeline-start'>
              <time className='font-mono italic'>Mars 2024</time>
              <div className='text-lg font-black'>Hopslagning med Upprustningen</div>
              <p>
                Den lokala föreniningen Upprustningen når ut till klubben och diskuterar samarbete. Båda har
                inser att de har gemensamma mål och klubben bestämmer sig för att gå under förenignen
                Upprustningen och byter namn till Upprustningen Sports Club.
              </p>
              <div className='md:hidden'>
                <Image
                  src='/img/upprustningen_logo.webp'
                  width={500}
                  height={500}
                  alt='Upprustningen'
                  className='my-6'
                />
              </div>
            </div>
            <div className='md:block md:timeline-end md:my-10'>
              <Image
                src='/img/upprustningen_logo.webp'
                width={500}
                height={500}
                alt='Upprustningen'
                className='mt-4'
              />
            </div>
            <hr className='bg-muted-foreground md:mx-8' />
          </li>
          <li id='third-timeline' className='md:h-[27.5rem] lg:h-[37.5rem]'>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary mb-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div style={{ marginBottom: '4rem' }} className='md:self-start md:h-full timeline-start'>
              <time className='font-mono italic'>Juli 2024</time>
              <div className='text-lg font-black'>Första boxningsträningen</div>
              <p>
                Upprustningen Sports Club expanderar till olika kampsporter genom att anordna sin första
                boxningsträning. Träningarna sker tre gånger i veckan med erfarna tränare. Intresset visar sig
                vara starkt från ungdomar i området.
              </p>
              <div className='md:hidden'>
                <Image
                  src='/img/boxing_practice.webp'
                  width={500}
                  height={500}
                  alt='Träning i boxning'
                  className='my-6'
                />
              </div>
            </div>
            <div className='md:block md:timeline-end md:my-10'>
              <Image
                  src='/img/boxing_practice.webp'
                  width={500}
                  height={500}
                  alt='Träning i boxning'
                  className='mt-4'
              />
            </div>
            <hr className='bg-muted-foreground md:mx-8' />
          </li>
          <li id='fourth-timeline' className='md:h-[27.5rem] lg:h-[37.5rem]'>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary mb-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div style={{ marginBottom: '4rem' }} className='md:self-start md:h-full timeline-end'>
              <time className='font-mono italic'>Oktober 2024</time>
              <div className='text-lg font-black'>Grekisk-romersk brottning</div>
              <p>
                I oktober 2025 startade vi träningar i grekisk-romersk brottning för både ungdomar och vuxna. 
                Med en erfaren tränare på plats blev satsningen snabbt en stor framgång. Vi etablerade fyra träningar i veckan – ett 
                upplägg som fortfarande består och fungerar mycket väl.
              </p>
              <div className='md:hidden'>
                <Image
                  src="/img/brottningskast.webp"
                  width={500}
                  height={500}
                  alt="Brottning"
                  className="h-64 object-cover object-[center_43%] my-4"
                />
              </div>
            </div>
            <div className='md:block md:timeline-start md:my-10'>
              <Image
                  src='/img/brottningskast.webp'
                  width={500}
                  height={500}
                  alt='Brottning'
                  className='h-64 object-cover object-[center_43%] mt-4'
              />
            </div>
            <hr className='bg-muted-foreground md:mx-8' />
          </li>
          <li id='fifth-timeline' className='md:h-[27.5rem] lg:h-[37.5rem]'>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary mb-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div style={{ marginBottom: '4rem' }} className='md:self-start md:h-full timeline-start'>
              <time className='font-mono italic'>Januari 2025</time>
              <div className='text-lg font-black'>Braziliansk jiu-jitsu</div>
              <p>
                Med en tydlig efterfrågan från medlemmar och boende i Järvaområdet startade vi brasiliansk jiu-jitsu 
                i januari 2026. Verksamheten växte snabbt och har blivit en central del av klubben, med starkt 
                deltagande från både ungdomar och vuxna.
              </p>
              <div className='md:hidden'>
                <Image
                  src='/img/bjj_training.webp'
                  width={500}
                  height={500}
                  alt='BJJ training'
                  className='h-64 object-cover object-[center_43%] my-6'
                />
              </div>
            </div>
            <div className='md:block md:timeline-end md:my-10'>
              <Image
                  src='/img/bjj_training.webp'
                  width={500}
                  height={500}
                  alt='BJJ training'
                  className='h-64 object-cover object-[center_43%] mt-4'
              />
            </div>
            <hr className='bg-muted-foreground md:mx-8' />
          </li>
          <li id='sixth-timeline' className='md:h-[27.5rem] lg:h-[37.5rem]'>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary mb-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div style={{ marginBottom: '4rem' }} className='md:self-start md:h-full timeline-end'>
              <time className='font-mono italic'>Januari 2025</time>
              <div className='text-lg font-black'>Barnbrottning</div>
              <p>
                Efter framgångarna med ungdoms- och vuxenträningar växte efterfrågan på barnverksamhet. 
                I januari 2025 startade vi barnbrottning med en grupp på 15 deltagare. På kort tid blev träningarna 
                mycket populära och bidrog till barnens fysiska och mentala utveckling. Idag är barnverksamheten en självklar 
                och viktig del av klubben.
              </p>
              <div className='md:hidden'>
                <Image
                  src='/img/brottningstraning.webp'
                  width={500}
                  height={500}
                  alt='Upprustningen'
                  className='h-64 object-cover object-[center_30%] my-6'
                />
              </div>
            </div>
            <div className='md:block md:timeline-start md:my-10'>
              <Image
                  src='/img/brottningstraning.webp'
                  width={500}
                  height={500}
                  alt='Träning i boxning'
                  className='h-64 object-cover object-[center_30%] mt-4'
              />
            </div>
            <hr className='bg-muted-foreground md:mx-8' />
          </li>
          <li id='seventh-timeline' className='md:h-[27.5rem] lg:h-[37.5rem]'>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary mb-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='self-start h-full timeline-start'>
              <time className='font-mono italic'>Maj 2026</time>
              <div className='text-lg font-black'>Namnändring till Zenith Kampsport</div>
              <p>
              I maj 2026 bytte vi namn från Upprustningen Sports Club till Zenith
              Kampsport. Namnbytet markerar ett nytt steg i vår utveckling och vår
              ambition att skapa en tydligare identitet inom kampsporten.
              <br />
              <br />
              Namnet <i>Zenith</i> symboliserar den högsta punkten – den absoluta
              toppen – och speglar vår vision att varje individ ska sträva efter att
              bli den bästa versionen av sig själv, både fysiskt och mentalt.
            </p>
              <div className='md:hidden'>
                <Image
                  src='/img/zenith_logo_white.webp'
                  width={500}
                  height={500}
                  alt='Zenith logo'
                  className='mt-4'
                />
              </div>
            </div>
            <div className='md:block md:timeline-end md:my-10'>
              <Image
                src='/img/zenith_logo_white.webp'
                width={500}
                height={500}
                alt='Zenith logo'
                className='mt-4'
              />
            </div>
            <hr className='bg-muted-foreground md:mx-8' />
          </li>
        </ul>
      </div>
    </>
  );
}

export default TimelineComponent;
