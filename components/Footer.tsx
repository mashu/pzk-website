import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">PZK</span>
          <p className="footer-desc">
            Polski Związek Krótkofalowców - organizacja zrzeszająca radioamatorów 
            w Polsce od 1930 roku. Jesteśmy członkiem IARU Region 1.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com/pzk" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://youtube.com/pzk" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="var(--color-bg-primary)"/>
              </svg>
            </a>
            <a href="https://twitter.com/pzk" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Nawigacja</h4>
          <ul className="footer-links">
            <li><Link href="/">Strona główna</Link></li>
            <li><Link href="/aktualnosci">Aktualności</Link></li>
            <li><Link href="/o-nas">O PZK</Link></li>
            <li><Link href="/czlonkostwo">Członkostwo</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Dla członków</h4>
          <ul className="footer-links">
            <li><Link href="/zawody">Zawody</Link></li>
            <li><Link href="/dyplomy">Dyplomy</Link></li>
            <li><Link href="/szkolenia">Szkolenia</Link></li>
            <li><Link href="/kluby">Kluby</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <ul className="footer-links">
            <li>
              <span style={{ color: 'var(--color-text-muted)' }}>Email:</span><br />
              <a href="mailto:sekretariat@pzk.org.pl">sekretariat@pzk.org.pl</a>
            </li>
            <li>
              <span style={{ color: 'var(--color-text-muted)' }}>Adres:</span><br />
              ul. Jasna 14/16A<br />
              00-041 Warszawa
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Polski Związek Krótkofalowców. Wszystkie prawa zastrzeżone.
        </p>
        <span className="footer-callsign">
          ··· ·--· / ·--· --·· -·-
        </span>
      </div>
    </footer>
  );
};

export default Footer;
