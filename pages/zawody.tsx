import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ZawodyPage() {
  const contests = [
    {
      name: 'Mistrzostwa Polski CW',
      date: '25-26 stycznia 2025',
      bands: '80m-10m',
      mode: 'CW',
      status: 'upcoming'
    },
    {
      name: 'SP DX Contest',
      date: '5-6 kwietnia 2025',
      bands: '160m-10m',
      mode: 'CW/SSB',
      status: 'upcoming'
    },
    {
      name: 'Fieldday PZK',
      date: '7-8 czerwca 2025',
      bands: 'VHF/UHF',
      mode: 'All',
      status: 'upcoming'
    },
    {
      name: 'WSPAMNIENIOWY',
      date: '15 sierpnia 2025',
      bands: '40m, 80m',
      mode: 'SSB',
      status: 'upcoming'
    }
  ];

  const diplomas = [
    { name: 'SPA', description: 'SP Award - kontakty ze stacjami SP' },
    { name: 'SPPA', description: 'SP Province Award - wszystkie województwa' },
    { name: 'SPDX', description: 'SP DX Award - za kontakty DX' },
    { name: 'SPFF', description: 'SP Flora Fauna - rezerwaty przyrody' }
  ];

  return (
    <>
      <Head>
        <title>Zawody i Dyplomy - PZK</title>
        <meta name="description" content="Kalendarz zawodów krótkofalarskich i programy dyplomowe PZK" />
      </Head>

      <Navigation />

      <header className="page-header">
        <span className="section-badge">// Zawody i Dyplomy</span>
        <h1 className="page-title">Rywalizacja i osiągnięcia</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)', 
          maxWidth: '600px', 
          margin: '1rem auto 0',
          fontSize: '1.1rem'
        }}>
          Sprawdź kalendarz zawodów i zdobywaj dyplomy
        </p>
      </header>

      <main>
        {/* Kalendarz zawodów */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Kalendarz zawodów 2025</h2>
            </div>
            
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {contests.map((contest, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'var(--color-bg-card)',
                    borderRadius: '12px',
                    marginBottom: '1rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      marginBottom: '0.5rem',
                      color: 'var(--color-accent-green)'
                    }}>
                      {contest.name}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '1.5rem',
                      flexWrap: 'wrap',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <span>📅 {contest.date}</span>
                      <span>📻 {contest.bands}</span>
                      <span>📡 {contest.mode}</span>
                    </div>
                  </div>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(0, 255, 136, 0.1)',
                    color: 'var(--color-accent-green)',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase'
                  }}>
                    Nadchodzące
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                Pełny kalendarz zawodów dostępny jest dla członków PZK
              </p>
              <Link href="/czlonkostwo" className="btn btn-secondary">
                Dołącz do PZK
              </Link>
            </div>
          </div>
        </section>

        {/* Dyplomy */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Programy dyplomowe</h2>
              <p className="section-subtitle">Zdobywaj dyplomy za aktywność na pasmach</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {diplomas.map((diploma, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '2rem',
                    background: 'var(--color-bg-card)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 1rem',
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 212, 255, 0.2))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: 'var(--color-accent-green)'
                  }}>
                    {diploma.name}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                  }}>
                    {diploma.name}
                  </h3>
                  <p style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                  }}>
                    {diploma.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '1rem'
            }}>
              Chcesz wziąć udział w zawodach?
            </h2>
            <p style={{
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }}>
              Sprawdź regulaminy i przygotuj swoją stację do rywalizacji!
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Zapytaj o szczegóły
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
