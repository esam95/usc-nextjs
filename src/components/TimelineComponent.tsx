// This component is from
// https://daisyui.com/components/timeline/

import Image from 'next/image';
import React from 'react';

function TimelineComponent() {
  return (
    <>
      <div className='container mx-auto p-4'>
        <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
          <li>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:text-end'>
              <time className='font-mono italic'>2023 Mars</time>
              <div className='text-lg font-black'>Klubbens första träning</div>
              <p>
                Ett gäng ungdomar från Järva bestämmer sig för att hyra idrottshall i Husby och träna 
                fristilsbrottning. Grunderna i fristilsbrottning lärs ut sakta men säkert fyra gånger i veckan. 
              </p>
            </div>
            <div className='timeline-end mb-10 '>
              <Image
                src="/img/wrestling_practice.webp"
                width={500}
                height={500}
                alt="Träning i fristilsbrottning"
              />            
            </div>
            <hr className='bg-muted-foreground' />
          </li>
          <li>
            <hr className='bg-muted-foreground' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:timeline-end'>
              <time className='font-mono italic'>Juni 2024</time>
              <div className='text-lg font-black'>Utomhus träning</div>
              <p>
                Många av klubbmedlemmarna har sommarlov och vädret passar på för att träna och få upp fysiken utomhus.
                Fysträning sker utomhus med löpning, armhävningar och diversere andra övningar. Klubbmedlemmarna tar 
                tillfället i akt och ger järnet för att uppnå fördelarna som kommer hjälpa de i kampsporterna som drar igång
                inom snar framtid.
              </p>
            </div>
            <div className='timeline-end mb-10 md:timeline-start'>
              <Image
                src="/img/club_logo.webp"
                width={500}
                height={500}
                alt="Picture of the author"
              />            
            </div>
            <hr className='bg-muted-foreground' />
          </li>
          <li>
            <hr className='bg-muted-foreground' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:text-end'>
              <time className='font-mono italic'>Juli 2024</time>
              <div className='text-lg font-black'>Första boxningsträningen</div>
              <p>
                Upprustningen Sports Club implemterar planen på att expandera till olika kampsporter genom att
                anordna sin första boxningsträning. Träningarna sker tre gånger i veckan med erfarna tränare som har
                uppnått prestigefulla utmärkelser i sporten. Intresset visar sig vara starkt för ungdomar i området
                och klubbmedlemmarna gör betyndande framsteg i striking-sporten.
              </p>
            </div>
            <div className='timeline-end mb-10'>
              <Image
                src="/img/boxing_img.webp"
                width={500}
                height={500}
                alt="Picture of the author"
              />            
            </div>
            <hr className='bg-muted-foreground' />
          </li>
         
         
        </ul>
      </div>
    </>
  );
}

export default TimelineComponent;
