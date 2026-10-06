import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <article className="news-card">

      {/* News Image */}
      <div className="news-image-container">
        <img
          src={news.image || "https://via.placeholder.com/400x220"}
          alt={news.title}
          className="news-image"
        />

        <span className="category-badge">
          {news.category}
        </span>
      </div>

      {/* News Content */}
      <div className="news-content">

        <h2>{news.title}</h2>

        <p className="news-description">
          {news.description}
        </p>

        <div className="news-meta">
          <span>By {news.author}</span>

          {news.createdAt && (
            <span>
              {new Date(news.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>

        <Link
          to={`/news/${news._id}`}
          className="read-more"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}

export default NewsCard;