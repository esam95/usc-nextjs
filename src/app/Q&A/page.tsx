import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/accordion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';

const questionsAndAnswers = [
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
    <main className="flex justify-center py-6 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen mt-0">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Vanliga frågor och svar</CardTitle>
          <CardDescription className="text-muted-foreground">
            Här hittar du svar på de vanligaste frågorna vi får. Om du inte hittar svaret på din fråga är du
            välkommen att kontakta oss.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" className="w-full">
            {questionsAndAnswers.map((row, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className="text-gray-800 text-lg font-semibold text-left">
                  {row.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 md:text-base">{row.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </main>
  );
};

export default FAQ;
