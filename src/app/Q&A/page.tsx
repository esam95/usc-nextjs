import React from "react";
import { 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Box, 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Frågor och svar
        </Typography>
        {questionsAndAnswers.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" component="div">
                <strong>{item.question}</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" component="div">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
