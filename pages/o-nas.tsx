import Head from 'next/head';
import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { client } from '../tina/__generated__/client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface PageProps {
  data: any;
  query: string;
  variables: any;
}

export default function ONasPage({ data, query, variables }: PageProps) {
  const { data: tinaData } = useTina({ query, variables, data });
  
  // Domyślna treść jeśli brak pliku
  const page = tinaData?.page || {
    title: 'O Polskim Związku Krótkofalowców',
    body: null,
  };

  return (
    <>
      <Head>
        <title>{page.title} - PZK</title>
        <meta name="description" content="Historia i działalność Polskiego Związku Krótkofalowców" />
      </Head>

      <Navigation />

      <header className="page-header">
        <span className="section-badge">// O nas</span>
        <h1 
          className="page-title"
          data-tina-field={tinaField(page, 'title')}
        >
          {page.title}
        </h1>
      </header>

      <main className="page-content prose">
        {page.body ? (
          <div data-tina-field={tinaField(page, 'body')}>
            <TinaMarkdown content={page.body} />
          </div>
        ) : (
          <>
            <h2>Historia PZK</h2>
            <p>
              Polski Związek Krótkofalowców został założony w 1930 roku i jest jedną z najstarszych 
              organizacji krótkofalarskich na świecie. Przez ponad 90 lat działalności zrzeszamy 
              pasjonatów radiokomunikacji amatorskiej z całej Polski.
            </p>

            <h2>Nasza misja</h2>
            <p>
              Rozwijamy krótkofalarstwo w Polsce poprzez:
            </p>
            <ul>
              <li>Organizację kursów i szkoleń dla początkujących</li>
              <li>Przeprowadzanie egzaminów na świadectwa operatora</li>
              <li>Organizację zawodów krajowych i międzynarodowych</li>
              <li>Wydawanie dyplomów i prowadzenie programów aktywacyjnych</li>
              <li>Reprezentowanie polskich krótkofalowców w IARU Region 1</li>
            </ul>

            <h2>Członkostwo w IARU</h2>
            <p>
              PZK jest członkiem International Amateur Radio Union (IARU) Region 1, 
              co daje nam możliwość reprezentowania polskich krótkofalowców na 
              arenie międzynarodowej i uczestnictwa w globalnych inicjatywach.
            </p>

            <blockquote>
              Krótkofalarstwo to nie tylko hobby - to społeczność, pasja i służba na rzecz łączności.
            </blockquote>

            <h2>Struktura organizacyjna</h2>
            <p>
              PZK działa poprzez sieć klubów regionalnych i sekcji tematycznych, 
              co pozwala nam dotrzeć do krótkofalowców w całej Polsce i wspierać 
              lokalne inicjatywy.
            </p>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let pageData = null;

  try {
    const result = await client.queries.page({ relativePath: 'o-nas.mdx' });
    pageData = result;
  } catch (e) {
    console.log('No o-nas.mdx page found, using defaults');
  }

  return {
    props: {
      data: pageData?.data || {},
      query: pageData?.query || '',
      variables: pageData?.variables || {},
    },
  };
}
