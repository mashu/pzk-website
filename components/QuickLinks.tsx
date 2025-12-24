import Link from 'next/link';

interface QuickLink {
  title: string;
  url: string;
  icon?: string;
  description?: string;
}

interface QuickLinksProps {
  links?: QuickLink[];
}

const defaultLinks: QuickLink[] = [
  { 
    title: 'Zostań krótkofalowcem', 
    url: '/czlonkostwo', 
    icon: '📡',
    description: 'Jak zdobyć licencję i dołączyć do PZK'
  },
  { 
    title: 'Zawody i dyplomy', 
    url: '/zawody', 
    icon: '🏆',
    description: 'Kalendarz zawodów i programy dyplomowe'
  },
  { 
    title: 'Kursy i egzaminy', 
    url: '/szkolenia', 
    icon: '📚',
    description: 'Szkolenia i terminy egzaminów'
  },
  { 
    title: 'Kluby regionalne', 
    url: '/kluby', 
    icon: '🗺️',
    description: 'Znajdź klub w swojej okolicy'
  },
];

const QuickLinks = ({ links = defaultLinks }: QuickLinksProps) => {
  const displayLinks = links && links.length > 0 ? links : defaultLinks;

  return (
    <div className="quick-links">
      {displayLinks.map((link, index) => (
        <Link 
          key={index}
          href={link.url}
          className="quick-link"
        >
          <span className="quick-link-icon">
            {link.icon || '📻'}
          </span>
          <div className="quick-link-content">
            <span className="quick-link-title">{link.title}</span>
            {link.description && (
              <span className="quick-link-desc">{link.description}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;
