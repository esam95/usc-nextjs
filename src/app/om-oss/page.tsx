import React from "react";
import { 
  Container, 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
} from "@mui/material";

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Om oss
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Välkommen till <span style={{ fontWeight: "bold" }}>
                    Upprustningen Sports Club!
                  </span>
                </Typography>
                <Typography variant="body1" paragraph>
                  Grundades år 2023, vårt uppdrag är att stärka individer 
                  genom högkvalitativ träning, och främja både fysisk och 
                  mental utveckling.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Vår filosofi
                </Typography>
                <Typography variant="body1" paragraph>
                  På Upprustningen Sports Club tror vi på en helhetssyn på 
                  kampsport. Våra träningsprogram är utformade för att 
                  förbättra färdigheter, bygga karaktär och skapa en stödjande 
                  gemenskap.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Erbjudna program
                </Typography>
                <Typography variant="body1" paragraph>
                  - <b>Boxing:</b> Från nybörjare till avancerade nivåer.
                  <br />
                  - <b>MMA:</b> Omfattande träning för alla färdighetsnivåer.
                  <br />
                  - <b>Submission wrestling:</b> En mix av stående och liggande 
                  brottning.<br />
                  - <b>Fristils brottning:</b> Lärorika träningspass med 
                  erfarna tränare.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Våra Tränare
                </Typography>
                <Typography variant="body1" paragraph>
                  Vårt erfarna tränarteam inkluderar erfarna proffs med 
                  imponerande bakgrunder inom olika kampsportsdiscipliner. 
                  De är dedikerade till att hjälpa dig att nå din personliga 
                  bästa nivå.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/Logga cirkulär.png"
                alt="Club Image"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
