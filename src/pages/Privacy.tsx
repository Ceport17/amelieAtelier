import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-16 bg-creme min-h-screen">
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-2xl md:text-3xl mb-12 text-mauve uppercase tracking-[0.2em] font-light">
            Datenschutzerklärung
          </h1>

          <div className="space-y-12 text-gray-500 font-light leading-relaxed text-sm md:text-lg">
            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">1. Allgemeine Hinweise</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Der Schutz Deiner persönlichen Daten ist mir wichtig. Personenbezogene Daten werden auf dieser Website
                  nur im notwendigen Umfang verarbeitet.
                </p>
                <p className="text-lg">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-lg">
                  Amelie Wrage<br />
                  Sandberg 4-6<br />
                  25335 Elmshorn<br />
                  E-Mail: <a href="mailto:amelie.artstudio@web.de" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">amelie.artstudio@web.de</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">2. Hosting</h2>
              <div className="space-y-6">
                <p className="text-lg">Diese Website wird bei folgendem Anbieter gehostet:</p>
                <p className="text-lg">
                  netcup GmbH<br />
                  Emmy-Noether-Straße 10<br />
                  76131 Karlsruhe
                </p>
                <p className="text-lg">
                  Zum Zweck des sicheren Betriebs der Website verarbeitet der Hosting-Anbieter technische Daten wie
                  IP-Adressen oder Server-Logfiles.
                </p>
                <p className="text-lg">
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">3. Kontaktformular</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Wenn Du mich über das Kontaktformular kontaktierst, werden Deine Angaben zur Bearbeitung Deiner Anfrage
                  verarbeitet.
                </p>
                <p className="text-lg">
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">4. Formspree</h2>
              <div className="space-y-6">
                <p className="text-lg">Für das Kontaktformular nutze ich den Dienst Formspree.</p>
                <p className="text-lg">
                  Anbieter:<br />
                  Formspree Inc.<br />
                  2261 Market Street #5039<br />
                  San Francisco, CA 94114<br />
                  USA
                </p>
                <p className="text-lg">
                  Die von Dir eingegebenen Daten werden zur Bearbeitung Deiner Anfrage an Formspree übertragen und dort
                  verarbeitet.
                </p>
                <p className="text-lg">
                  Weitere Informationen:{" "}
                  <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">
                    https://formspree.io/legal/privacy-policy/
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">5. Cloudflare Turnstile</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Zum Schutz vor Spam verwende ich Cloudflare Turnstile.
                </p>
                <p className="text-lg">
                  Anbieter:<br />
                  Cloudflare Inc.<br />
                  101 Townsend St., San Francisco, CA 94107, USA
                </p>
                <p className="text-lg">
                  Turnstile dient dazu zu prüfen, ob Eingaben durch einen Menschen erfolgen. Dabei können technische Daten
                  wie die IP-Adresse verarbeitet werden.
                </p>
                <p className="text-lg">Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
                <p className="text-lg">
                  Weitere Informationen:{" "}
                  <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">
                    https://www.cloudflare.com/privacypolicy/
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">6. Lokale Schriftarten</h2>
              <p className="text-lg">
                Diese Website verwendet lokal eingebundene Schriftarten. Dabei findet keine Verbindung zu externen
                Schriftanbieter-Diensten wie Google Fonts statt.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">7. Deine Rechte</h2>
              <div className="space-y-6">
                <p className="text-lg">Du hast jederzeit das Recht auf:</p>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Auskunft über Deine gespeicherten Daten</li>
                  <li>Berichtigung oder Löschung</li>
                  <li>Einschränkung der Verarbeitung</li>
                  <li>Widerruf erteilter Einwilligungen</li>
                  <li>Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
                </ul>
                <p className="text-lg">Bei Fragen zum Datenschutz kannst Du Dich jederzeit an mich wenden.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
