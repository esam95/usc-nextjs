"use client";

export default function VillkorPage() {
  return (
    <>
      <span id="shift-navbar-color">{/* Triggering change of navbar */}</span>
      <main className="px-4 flex flex-col items-start min-h-[500px] sm:px-6 lg:mx-24 lg:px-8 xl:items-center mt-24">
        <div
          id="rabatter-section"
          className="rounded-sm relative overflow-hidden bg-gradient-to-br from-[#192334] to-[#1d2942] text-secondary-foreground p-8 md:p-12 mb-12 w-full shadow-xl max-sm:break-words"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary-foreground">
              Villkor för Upprustningen Sports Club
            </h3>

            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-semibold text-secondary-foreground uppercase">1. Medlemskap</h2>
                <p>
                  - Medlemskap är öppet för alla som följer våra regler. <br />
                  - Medlemsavgift ska betalas i tid. <br />
                  - Klubben kan neka eller avsluta medlemskap vid regelbrott.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-secondary-foreground uppercase">2. Träningsregler</h2>
                <p>
                  - Visa respekt för tränare, medlemmar och anläggningen. <br />
                  - Skyddsutrustning är obligatorisk vid kontaktträning. <br />
                  - Träning sker på egen risk.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-secondary-foreground uppercase">3. Betalning & Återbetalning</h2>
                <p>
                  - Avgifter ska betalas enligt våra betalningsvillkor. <br />
                  - Ingen återbetalning ges efter påbörjad träningsperiod, utom vid särskilda omständigheter.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-secondary-foreground uppercase">4. Tävlingar & Evenemang</h2>
                <p>
                  - Tävlingsdeltagare måste följa tävlingsregler och tränarens instruktioner. <br />
                  - Klubben kan i vissa fall stödja tävlingsavgifter.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-secondary-foreground uppercase">5. Säkerhet & Ansvar</h2>
                <p>
                  - Klubben ansvarar inte för förlorade eller stulna föremål. <br />
                  - Varje medlem ska ha en egen olycksfallsförsäkring.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-secondary-foreground uppercase">6. Ändringar av Villkor</h2>
                <p>
                  - Klubben kan uppdatera villkoren vid behov. <br />
                  - Uppdateringar meddelas via hemsidan och e-post.
                </p>
              </section>

              {/* Integritetspolicy */}
              <section>
                <h2 className="text-lg font-semibold text-secondary-foreground uppercase">7. Integritetspolicy</h2>
                <p>
                  - Vi samlar endast in nödvändig information för att hantera medlemskap och kommunikation. <br />
                  - Personuppgifter lagras säkert och delas inte med tredje part utan samtycke. <br />
                  - Vi använder cookies för att förbättra användarupplevelsen på vår webbplats. <br />
                  - Medlemmar har rätt att begära utdrag, ändringar eller radering av sina uppgifter. <br />
                  - Vid frågor om integritet och personuppgifter, kontakta oss på <a href="mailto:info@upprustningen.se" className="underline">info@upprustningen.se</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
