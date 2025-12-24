import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function KontaktPage() {
  return (
    <>
      <Head>
        <title>Kontakt - PZK</title>
        <meta name="description" content="Skontaktuj się z Polskim Związkiem Krótkofalowców" />
      </Head>

      <Navigation />

      <header className="page-header">
        <span className="section-badge">// Kontakt</span>
        <h1 className="page-title">Skontaktuj się z nami</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)', 
          maxWidth: '600px', 
          margin: '1rem auto 0',
          fontSize: '1.1rem'
        }}>
          Masz pytania? Chętnie pomożemy!
        </p>
      </header>

      <main className="section">
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Dane kontaktowe */}
            <div style={{ 
              padding: '2rem',
              background: 'var(--color-bg-card)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <h2 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-accent-green)'
              }}>
                📍 Biuro PZK
              </h2>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem'
                }}>
                  Adres
                </h3>
                <p style={{ color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
                  Polski Związek Krótkofalowców<br />
                  ul. Jasna 14/16A<br />
                  00-041 Warszawa
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem'
                }}>
                  Email
                </h3>
                <a 
                  href="mailto:sekretariat@pzk.org.pl"
                  style={{ 
                    color: 'var(--color-accent-blue)',
                    textDecoration: 'none'
                  }}
                >
                  sekretariat@pzk.org.pl
                </a>
              </div>

              <div>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem'
                }}>
                  Telefon
                </h3>
                <a 
                  href="tel:+48222345678"
                  style={{ 
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none'
                  }}
                >
                  +48 22 234 56 78
                </a>
              </div>
            </div>

            {/* Formularz kontaktowy */}
            <div style={{ 
              padding: '2rem',
              background: 'var(--color-bg-card)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <h2 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-accent-green)'
              }}>
                ✉️ Napisz do nas
              </h2>
              
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div>
                  <label 
                    htmlFor="callsign"
                    style={{ 
                      display: 'block',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Znak wywoławczy (opcjonalnie)
                  </label>
                  <input 
                    type="text"
                    id="callsign"
                    name="callsign"
                    placeholder="SP1ABC"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    style={{ 
                      display: 'block',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Email *
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="twoj@email.pl"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'var(--color-text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="subject"
                    style={{ 
                      display: 'block',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Temat *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'var(--color-text-primary)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Wybierz temat...</option>
                    <option value="czlonkostwo">Członkostwo w PZK</option>
                    <option value="egzaminy">Egzaminy i kursy</option>
                    <option value="zawody">Zawody i dyplomy</option>
                    <option value="kluby">Kluby regionalne</option>
                    <option value="inne">Inne pytanie</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    style={{ 
                      display: 'block',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Twoja wiadomość..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'var(--color-text-primary)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>

          {/* QSL info */}
          <div style={{ 
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(0, 255, 136, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '3rem auto 0'
          }}>
            <h3 style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-accent-green)',
              marginBottom: '1rem'
            }}>
              📬 QSL Bureau
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Karty QSL dla stacji SP można wysyłać przez biuro PZK.
              Szczegóły na temat procedury znajdziesz w dziale dla członków.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
