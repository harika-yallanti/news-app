import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [id]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/news/${id}`
      );

      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this news?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    await axios.delete(
      `http://localhost:5000/api/news/${id}`
    );

    alert("News deleted successfully!");

    navigate("/");
  } catch (error) {
    console.error("Error deleting news:", error);
    alert("Failed to delete news");
  }
};

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!news) {
    return <h2>News article not found</h2>;
  }

  return (
    <div className="details-container">

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <p className="category">{news.category}</p>

      <h1>{news.title}</h1>

      <p className="author">
        By {news.author}
      </p>

      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="details-image"
        />
      )}

      <p className="description">
        {news.description}
      </p>

      <div className="article-content">
        {news.content}
      </div>
      <div className="action-buttons">
       <Link
         to={`/edit/${news._id}`}
         className="edit-button"
       >
         Edit News
       </Link>

       <button
    onClick={handleDelete}
    className="delete-button"
  >
    Delete News
  </button>
      </div>

    </div>
  );
}

export default NewsDetails;

