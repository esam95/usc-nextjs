import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/accordion';
import HeroSection from '@/components/HeroSectionComponent';
import { questionsAndAnswers } from './questionAndAnswers';

const FAQ = () => {
  return (
    <>
      <span id='shift-navbar-color'>{/* Triggering change of navbar */}</span>
      <main className='px-4 flex flex-col items-start min-h-[500px] sm:px-6 lg:mx-24 lg:px-8 xl:items-center'>
        <HeroSection />
        <div className='w-full max-w-3xl md:mt-16'>
          <h2 className='mb-8 text-secondary-foreground'>Vanliga frågor och svar</h2>
          <Accordion type='single' collapsible className='w-full mb-36'>
            {questionsAndAnswers.map((row, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className='text-secondary-foreground text-lg font-semibold text-left'>
                  {row.question}
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground md:text-base'>
                  {row.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </>
  );
};

export default FAQ;
