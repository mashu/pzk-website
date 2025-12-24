import Link from 'next/link';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

interface NewsCardProps {
  post: {
    title: string;
    date: string;
    category?: string;
    excerpt?: string;
    heroImage?: string;
    _sys: {
      filename: string;
    };
  };
  featured?: boolean;
}

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const NewsCard = ({ post, featured = false }: NewsCardProps) => {
  const formattedDate = post.date 
    ? format(new Date(post.date), 'd MMMM yyyy', { locale: pl })
    : 'Brak daty';

  return (
    <article className={`news-card ${featured ? 'featured' : ''}`}>
      {post.heroImage ? (
        <img 
          src={post.heroImage} 
          alt={post.title}
          className="news-card-image"
          loading="lazy"
        />
      ) : (
        <div 
          className="news-card-image" 
          style={{
            background: `linear-gradient(135deg, 
              var(--color-bg-card) 0%, 
              var(--color-bg-elevated) 50%,
              rgba(0, 255, 136, 0.05) 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ 
            fontSize: '3rem', 
            opacity: 0.3,
            fontFamily: 'var(--font-display)'
          }}>
            📡
          </span>
        </div>
      )}
      
      <div className="news-card-content">
        <div className="news-card-meta">
          {post.category && (
            <span className="news-card-category">{post.category}</span>
          )}
          <time className="news-card-date" dateTime={post.date}>
            {formattedDate}
          </time>
        </div>
        
        <h3 className="news-card-title">{post.title}</h3>
        
        {post.excerpt && (
          <p className="news-card-excerpt">
            {post.excerpt.length > 150 
              ? `${post.excerpt.substring(0, 150)}...` 
              : post.excerpt
            }
          </p>
        )}
        
        <Link 
          href={`/aktualnosci/${post._sys.filename}`}
          className="news-card-link"
        >
          Czytaj więcej
          <ArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
