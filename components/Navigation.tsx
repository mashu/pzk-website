import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Strona główna', url: '/' },
    { label: 'Aktualności', url: '/aktualnosci' },
    { label: 'O nas', url: '/o-nas' },
    { label: 'Członkostwo', url: '/czlonkostwo' },
    { label: 'Zawody', url: '/zawody' },
    { label: 'Kontakt', url: '/kontakt' },
  ];

  return (
    <nav className={`nav-main ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-text">PZK</span>
          <span className="nav-logo-badge">SP • IARU</span>
        </Link>

        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span style={{ 
            transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' 
          }} />
          <span style={{ opacity: isMenuOpen ? 0 : 1 }} />
          <span style={{ 
            transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' 
          }} />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.url}>
              <Link 
                href={item.url} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
