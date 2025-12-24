import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function CzlonkostwoPage() {
  const benefits = [
    {
      icon: '📬',
      title: 'QSL Bureau',
      description: 'Bezpłatna wymiana kart QSL przez biuro PZK'
    },
    {
      icon: '🏆',
      title: 'Zawody i dyplomy',
      description: 'Udział w zawodach krajowych i dostęp do programów dyplomowych'
    },
    {
      icon: '📰',
      title: 'Magazyn "Krótkofalowiec Polski"',
      description: 'Bezpłatna prenumerata czasopisma w wersji elektronicznej'
    },
    {
      icon: '📚',
      title: 'Szkolenia',
      description: 'Zniżki na kursy i materiały szkoleniowe'
    },
    {
      icon: '🤝',
      title: 'Społeczność',
      description: 'Dostęp do klubów, spotkań i wydarzeń regionalnych'
    },
    {
      icon: '🌍',
      title: 'Reprezentacja',
      description: 'Reprezentacja na forum IARU i w kontaktach z administracją'
    }
  ];

  return (
    <>
      <Head>
        <title>Członkostwo - PZK</title>
        <meta name="description" content="Dołącz do Polskiego Związku Krótkofalowców - korzyści, składki, jak się zapisać" />
      </Head>

      <Navigation />

      <header className="page-header">
        <span className="section-badge">// Członkostwo</span>
        <h1 className="page-title">Dołącz do PZK</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)', 
          maxWidth: '600px', 
          margin: '1rem auto 0',
          fontSize: '1.1rem'
        }}>
          Zostań częścią największej społeczności krótkofalowców w Polsce
        </p>
      </header>

      <main>
        {/* Korzyści */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Korzyści z członkostwa</h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '1.5rem',
                    background: 'var(--color-bg-card)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{benefit.icon}</span>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      marginBottom: '0.5rem'
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Składki */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Składki członkowskie</h2>
              <p className="section-subtitle">Aktualne stawki na rok 2025</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {/* Składka normalna */}
              <div style={{
                padding: '2rem',
                background: 'var(--color-bg-card)',
                borderRadius: '16px',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--color-accent-green)',
                  color: 'var(--color-bg-primary)',
                  padding: '0.25rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>
                  POPULARNE
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  marginBottom: '1rem'
                }}>
                  Składka normalna
                </h3>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'var(--color-accent-green)',
                  marginBottom: '0.5rem'
                }}>
                  150 <span style={{ fontSize: '1rem' }}>PLN</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  rocznie
                </p>
                <ul style={{
                  textAlign: 'left',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {['Pełne członkostwo', 'QSL Bureau', 'Magazyn KP', 'Wszystkie korzyści'].map((item) => (
                    <li key={item} style={{
                      padding: '0.5rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      color: 'var(--color-text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ color: 'var(--color-accent-green)' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Składka ulgowa */}
              <div style={{
                padding: '2rem',
                background: 'var(--color-bg-card)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  marginBottom: '1rem'
                }}>
                  Składka ulgowa
                </h3>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'var(--color-accent-blue)',
                  marginBottom: '0.5rem'
                }}>
                  75 <span style={{ fontSize: '1rem' }}>PLN</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  rocznie
                </p>
                <ul style={{
                  textAlign: 'left',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {['Uczniowie i studenci', 'Emeryci i renciści', 'Osoby do 26 lat', 'Wszystkie korzyści'].map((item) => (
                    <li key={item} style={{
                      padding: '0.5rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      color: 'var(--color-text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ color: 'var(--color-accent-blue)' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Jak się zapisać */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Jak się zapisać?</h2>
            </div>
            
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                { step: 1, title: 'Wypełnij deklarację', desc: 'Pobierz i wypełnij formularz członkowski dostępny na stronie.' },
                { step: 2, title: 'Wybierz klub', desc: 'Wskaż klub regionalny, do którego chcesz należeć.' },
                { step: 3, title: 'Opłać składkę', desc: 'Dokonaj przelewu na konto PZK z podaniem imienia, nazwiska i znaku.' },
                { step: 4, title: 'Gotowe!', desc: 'Po weryfikacji otrzymasz potwierdzenie członkostwa.' }
              ].map((item) => (
                <div 
                  key={item.step}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-accent-green), var(--color-accent-blue))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: 'var(--color-bg-primary)',
                    flexShrink: 0
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      marginBottom: '0.5rem'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/kontakt" className="btn btn-primary">
                Skontaktuj się z nami
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
