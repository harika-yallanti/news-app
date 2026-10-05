import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img
        src={news.image || "https://via.placeholder.com/400x200"}
        alt={news.title}
        className="news-image"
      />

      <div className="news-content">
        <p className="category">{news.category}</p>

        <h2>{news.title}</h2>

        <p>{news.description}</p>

        <p className="author">
          By {news.author}
        </p>

        <Link
          to={`/news/${news._id}`}
          className="read-more"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;