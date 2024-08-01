import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/accordion';
import HeroSection from '@/components/HeroSectionComponent';

export const questionsAndAnswers = [
  {
    question: 'Får jag provträna?',
    answer: 'Absolut, ifall det finns plats får du alltid testa två gånger - helt gratis!',
  },
  {
    question: 'Vad ska jag ha med mig till träningen?',
    answer: (
      <>
        - Vattenflaska (på fylld innan träningen)
        <br />
        - Lämpliga träningskläder och utrustning
        <br />- Egen sport tejp och plåster
      </>
    ),
  },
  {
    question: 'Behöver jag vara i form för att börja träna kampsport?',
    answer: 'Nej, du behöver bara börja träna!',
  },
  {
    question: 'Måste jag tävla om jag tränar hos er?',
    answer: 'Nej, du gör dina egna val.',
  },
  {
    question: 'Jag har fysiska förhinder, kan jag ändå träna?',
    answer:
      'Absolut, du känner till dina fysiska förhinder och vet vad du kan och inte kan utföra. Instruktörerna kan anpassa träningen och låta dig utföra alternativa tekniker som passar dig bättre.',
  },
];

const FAQ = () => {
  return (
    <>
      <HeroSection />
      <main className='px-4 flex flex-col items-start sm:px-6 lg:mx-24 lg:px-8 min-h-[500px]'>
        <div className='w-full max-w-3xl'>
          <h2 className='mb-8 text-secondary-foreground'>Vanliga frågor och svar</h2>
          <Accordion type='single' className='w-full'>
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
