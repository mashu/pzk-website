import Head from 'next/head';
import { client } from '../../tina/__generated__/client';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import NewsCard from '../../components/NewsCard';

interface AktualnosciPageProps {
  posts: any[];
}

export default function AktualnosciPage({ posts }: AktualnosciPageProps) {
  return (
    <>
      <Head>
        <title>Aktualności - PZK</title>
        <meta name="description" content="Najnowsze wiadomości ze świata krótkofalarstwa w Polsce" />
      </Head>

      <Navigation />

      <header className="page-header">
        <span className="section-badge">// Aktualności</span>
        <h1 className="page-title">Najnowsze wiadomości</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)', 
          maxWidth: '600px', 
          margin: '1rem auto 0',
          fontSize: '1.1rem'
        }}>
          Bądź na bieżąco z wydarzeniami w świecie krótkofalarstwa
        </p>
      </header>

      <main className="section">
        <div className="container">
          {posts && posts.length > 0 ? (
            <div className="news-grid">
              {posts.map((post: any, index: number) => (
                <NewsCard 
                  key={post._sys.filename}
                  post={post}
                  featured={index === 0}
                />
              ))}
            </div>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '4rem 2rem',
              color: 'var(--color-text-secondary)'
            }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>📻</p>
              <h2 style={{ 
                fontFamily: 'var(--font-display)', 
                marginBottom: '1rem' 
              }}>
                Brak aktualności
              </h2>
              <p>
                Wkrótce pojawią się tutaj nowe wiadomości. 
                Zaglądaj regularnie!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let posts: any[] = [];

  try {
    const postsResult = await client.queries.postConnection();
    posts = postsResult.data.postConnection.edges?.map((edge: any) => edge.node) || [];
    // Sortuj po dacie (najnowsze pierwsze)
    posts = posts.sort((a: any, b: any) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (e) {
    console.log('No posts found');
  }

  return {
    props: {
      posts,
    },
  };
}
