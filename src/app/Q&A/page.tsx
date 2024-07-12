import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion"


const questionsAndAnswers = [
  {
    question: "Får jag provträna?",
    answer: (
      <span>
        <strong>Absolut</strong>, ifall det finns plats får du alltid testa 
        två gånger - <strong>helt gratis!</strong>
      </span>
    ),
  },
  {
    question: "Vad ska jag ha med mig till träningen?",
    answer: (
      <span>
        <strong>Vattenflaska</strong> (På fylld innan träningen)
        <br /><br />
        <strong>Lämpliga</strong> träningskläder och utrustning.
        <br />
        <strong>Eget Sport tejp och Plåster</strong>
      </span>
    ),
  },
  {
    question: "Behöver jag vara i form för att börja träna kampsport?",
    answer: (
      <span>
        <strong>Nej</strong>, du behöver bara börja träna!
      </span>
    ),
  },
  {
    question: "Måste jag tävla hos er?",
    answer: (
      <span>
        <strong>Nej</strong>, du gör dina egna val.
      </span>
    ),
  },
  {
    question: "Jag har några fysiska förhinder, kan jag ändå träna?",
    answer: (
      <span>
        <strong>Absolut</strong>, du känner till dina fysiska förhinder och 
        vet vad du kan och inte kan utföra. Instruktörerna kan anpassa 
        träningen och låta dig utföra alternativa tekniker som passar dig 
        bättre.
      </span>
    ),
  },
];

const FAQ = () => {
  return (
    <>
    <h1>Frågor och svar</h1>
    <Accordion type="single" collapsible>
      {questionsAndAnswers.map((row, index) =>
      <AccordionItem key={index.toString()} value={index.toString()}>
        <AccordionTrigger>{row.question}</AccordionTrigger>
        <AccordionContent>{row.answer}</AccordionContent>
      </AccordionItem>
      )}
    </Accordion>
    </>

  );
};

export default FAQ;
