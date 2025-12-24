import Head from 'next/head';
import Link from 'next/link';
import { useTina } from 'tinacms/dist/react';
import { client } from '../tina/__generated__/client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import QuickLinks from '../components/QuickLinks';

// Ikony SVG
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

interface HomePageProps {
  data: any;
  query: string;
  variables: any;
  posts: any[];
}

export default function HomePage({ data, query, variables, posts }: HomePageProps) {
  const { data: tinaData } = useTina({ query, variables, data });
  
  const homepage = tinaData?.homepage || {
    heroTitle: 'Polski Związek Krótkofalowców',
    heroSubtitle: 'Łączymy pasjonatów radiokomunikacji w Polsce od 1930 roku. Dołącz do społeczności krótkofalowców i odkryj świat łączności radiowej.',
    callsign: 'SP PZK',
    quickLinks: [
      { title: 'Zostań krótkofalowcem', url: '/czlonkostwo', icon: '📡' },
      { title: 'Zawody i dyplomy', url: '/zawody', icon: '🏆' },
      { title: 'Kursy i egzaminy', url: '/szkolenia', icon: '📚' },
      { title: 'Kluby regionalne', url: '/kluby', icon: '🗺️' },
    ],
    stats: {
      members: '15 000+',
      clubs: '500+',
      qsos: '1M+',
    },
  };

  // Animacja znaku wywoławczego
  const callsignChars = (homepage.callsign || 'SP PZK').split('').map((char: string, i: number) => (
    <span 
      key={i} 
      className="char" 
      style={{ animationDelay: `${0.5 + i * 0.1}s` }}
    >
      {char}
    </span>
  ));

  return (
    <>
      <Head>
        <title>PZK - Polski Związek Krótkofalowców</title>
        <meta name="description" content="Polski Związek Krótkofalowców - organizacja zrzeszająca radioamatorów w Polsce. Kursy, zawody, dyplomy, łączności." />
        <meta property="og:title" content="PZK - Polski Związek Krótkofalowców" />
        <meta property="og:description" content="Łączymy pasjonatów radiokomunikacji w Polsce od 1930 roku." />
        <meta property="og:type" content="website" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            Aktywni na pasmach od 1930 roku
          </span>
          
          <h1 className="hero-title">
            <span className="hero-title-line">Polski Związek</span>
            <span className="hero-title-line hero-title-accent">Krótkofalowców</span>
          </h1>
          
          <div className="hero-callsign" aria-label={homepage.callsign}>
            {callsignChars}
          </div>
          
          <p className="hero-subtitle">
            {homepage.heroSubtitle}
          </p>
          
          <div className="hero-actions">
            <Link href="/czlonkostwo" className="btn btn-primary">
              Dołącz do PZK
              <ArrowRight />
            </Link>
            <Link href="/o-nas" className="btn btn-secondary">
              Poznaj nas
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">{homepage.stats?.members || '15 000+'}</span>
              <span className="hero-stat-label">Członków</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">{homepage.stats?.clubs || '500+'}</span>
              <span className="hero-stat-label">Klubów</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">{homepage.stats?.qsos || '1M+'}</span>
              <span className="hero-stat-label">QSO rocznie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section section-alt">
        <div className="container">
          <QuickLinks links={homepage.quickLinks} />
        </div>
      </section>

      {/* Aktualności */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">// Aktualności</span>
            <h2 className="section-title">Najnowsze wiadomości</h2>
            <p className="section-subtitle">
              Bądź na bieżąco z wydarzeniami w świecie krótkofalarstwa
            </p>
          </div>
          
          <div className="news-grid">
            {posts && posts.length > 0 ? (
              posts.map((post: any, index: number) => (
                <NewsCard 
                  key={post._sys.filename}
                  post={post}
                  featured={index === 0}
                />
              ))
            ) : (
              <>
                {/* Przykładowe karty gdy brak postów */}
                <NewsCard 
                  post={{
                    title: 'Mistrzostwa Polski w CW 2024',
                    date: new Date().toISOString(),
                    category: 'Zawody',
                    excerpt: 'Zapraszamy wszystkich operatorów CW na coroczne Mistrzostwa Polski. Start już w najbliższą sobotę!',
                    _sys: { filename: 'example-1' }
                  }}
                  featured={true}
                />
                <NewsCard 
                  post={{
                    title: 'Nowe kursy licencyjne',
                    date: new Date().toISOString(),
                    category: 'Szkolenia',
                    excerpt: 'Ruszają zapisy na wiosenne kursy przygotowujące do egzaminu na świadectwo operatora.',
                    _sys: { filename: 'example-2' }
                  }}
                />
                <NewsCard 
                  post={{
                    title: 'Aktywacja SPFF-0123',
                    date: new Date().toISOString(),
                    category: 'Łączności',
                    excerpt: 'W weekend planowana jest aktywacja rezerwatu przyrody w ramach programu Flora Fauna.',
                    _sys: { filename: 'example-3' }
                  }}
                />
              </>
            )}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/aktualnosci" className="btn btn-secondary">
              Wszystkie aktualności
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* O nas - krótko */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">// O PZK</span>
            <h2 className="section-title">Razem od ponad 90 lat</h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ 
              padding: '2rem',
              background: 'var(--color-bg-card)',
              borderRadius: '16px',
              borderLeft: '4px solid var(--color-accent-green)'
            }}>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--color-accent-green)'
              }}>
                🎯 Nasza misja
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                Rozwijamy krótkofalarstwo w Polsce, wspieramy operatorów amatorskich i promujemy 
                radiokomunikację jako pasję łączącą pokolenia.
              </p>
            </div>
            
            <div style={{ 
              padding: '2rem',
              background: 'var(--color-bg-card)',
              borderRadius: '16px',
              borderLeft: '4px solid var(--color-accent-blue)'
            }}>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--color-accent-blue)'
              }}>
                🌍 Działamy globalnie
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                Jesteśmy członkiem IARU Region 1. Reprezentujemy polskich krótkofalowców 
                na arenie międzynarodowej i uczestniczymy w zawodach światowych.
              </p>
            </div>
            
            <div style={{ 
              padding: '2rem',
              background: 'var(--color-bg-card)',
              borderRadius: '16px',
              borderLeft: '4px solid var(--color-accent-amber)'
            }}>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--color-accent-amber)'
              }}>
                📚 Edukujemy
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                Organizujemy kursy, szkolenia i egzaminy. Pomagamy nowym adeptom 
                krótkofalarstwa zdobyć licencję i rozwijać umiejętności.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem'
          }}>
            Gotowy na pierwsze <span style={{ color: 'var(--color-accent-green)' }}>QSO</span>?
          </h2>
          <p style={{ 
            color: 'var(--color-text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Dołącz do społeczności krótkofalowców. Zdobądź licencję, 
            naucz się CW i nawiązuj łączności z całym światem.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Skontaktuj się z nami
            <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let homepageData = null;
  let posts: any[] = [];

  try {
    // Próba pobrania danych z TinaCMS
    const homepageResult = await client.queries.homepage({ relativePath: 'homepage.json' });
    homepageData = homepageResult;
  } catch (e) {
    // Brak pliku homepage.json - użyj domyślnych wartości
    console.log('No homepage.json found, using defaults');
  }

  try {
    // Pobierz posty
    const postsResult = await client.queries.postConnection();
    posts = postsResult.data.postConnection.edges?.map((edge: any) => edge.node) || [];
    // Sortuj po dacie i weź 3 najnowsze
    posts = posts
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  } catch (e) {
    console.log('No posts found');
  }

  return {
    props: {
      data: homepageData?.data || {},
      query: homepageData?.query || '',
      variables: homepageData?.variables || {},
      posts,
    },
  };
}
