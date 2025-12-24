import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { client } from '../../tina/__generated__/client';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Komponenty dla TinaMarkdown
const components = {
  Callout: (props: any) => {
    const typeStyles: Record<string, string> = {
      info: 'callout callout-info',
      warning: 'callout callout-warning',
      success: 'callout callout-success',
    };
    return (
      <div className={typeStyles[props.type] || 'callout callout-info'}>
        {props.text}
      </div>
    );
  },
  QSOTable: (props: any) => {
    let data = [];
    try {
      data = JSON.parse(props.data || '[]');
    } catch (e) {
      console.error('Invalid QSO data');
    }
    return (
      <div style={{ overflowX: 'auto', margin: '2rem 0' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem'
        }}>
          <thead>
            <tr style={{ 
              background: 'var(--color-bg-card)',
              borderBottom: '2px solid var(--color-accent-green)'
            }}>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Callsign</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Band</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Mode</th>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>RST</th>
            </tr>
          </thead>
          <tbody>
            {data.map((qso: any, i: number) => (
              <tr key={i} style={{ 
                borderBottom: '1px solid rgba(255,255,255,0.05)' 
              }}>
                <td style={{ padding: '0.75rem', color: 'var(--color-accent-green)' }}>
                  {qso.callsign}
                </td>
                <td style={{ padding: '0.75rem' }}>{qso.band}</td>
                <td style={{ padding: '0.75rem' }}>{qso.mode}</td>
                <td style={{ padding: '0.75rem' }}>{qso.rst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

interface PostPageProps {
  data: any;
  query: string;
  variables: any;
}

export default function PostPage({ data, query, variables }: PostPageProps) {
  const { data: tinaData } = useTina({ query, variables, data });
  const post = tinaData.post;

  const formattedDate = post.date
    ? format(new Date(post.date), 'd MMMM yyyy', { locale: pl })
    : '';

  return (
    <>
      <Head>
        <title>{post.title} - PZK</title>
        <meta name="description" content={post.excerpt || `${post.title} - aktualności PZK`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        {post.heroImage && <meta property="og:image" content={post.heroImage} />}
      </Head>

      <Navigation />

      <article>
        <header className="page-header" style={{ paddingBottom: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Link 
              href="/aktualnosci"
              style={{ 
                color: 'var(--color-accent-blue)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              ← Powrót do aktualności
            </Link>
          </div>
          
          {post.category && (
            <span 
              style={{ 
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                padding: '0.25rem 0.75rem',
                background: 'rgba(0, 212, 255, 0.1)',
                color: 'var(--color-accent-blue)',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                display: 'inline-block'
              }}
            >
              {post.category}
            </span>
          )}
          
          <h1 
            className="page-title" 
            data-tina-field={tinaField(post, 'title')}
            style={{ marginTop: '0.5rem' }}
          >
            {post.title}
          </h1>
          
          <div className="page-meta" style={{ marginTop: '1.5rem' }}>
            {formattedDate && (
              <span data-tina-field={tinaField(post, 'date')}>
                📅 {formattedDate}
              </span>
            )}
            {post.author && (
              <span data-tina-field={tinaField(post, 'author')}>
                👤 {post.author}
              </span>
            )}
          </div>
        </header>

        {post.heroImage && (
          <div 
            style={{ 
              maxWidth: '1000px', 
              margin: '0 auto',
              padding: '0 2rem'
            }}
            data-tina-field={tinaField(post, 'heroImage')}
          >
            <img 
              src={post.heroImage} 
              alt={post.title}
              style={{ 
                width: '100%', 
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            />
          </div>
        )}

        <div 
          className="page-content prose" 
          data-tina-field={tinaField(post, 'body')}
        >
          <TinaMarkdown content={post.body} components={components} />
        </div>
      </article>

      {/* Nawigacja do innych postów */}
      <div className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link href="/aktualnosci" className="btn btn-secondary">
            ← Wszystkie aktualności
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  let paths: { params: { slug: string } }[] = [];
  
  try {
    const postsResult = await client.queries.postConnection();
    paths = postsResult.data.postConnection.edges?.map((edge: any) => ({
      params: { slug: edge.node._sys.filename },
    })) || [];
  } catch (e) {
    console.log('No posts for paths');
  }

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const result = await client.queries.post({ relativePath: `${params.slug}.mdx` });
    
    return {
      props: {
        data: result.data,
        query: result.query,
        variables: result.variables,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
