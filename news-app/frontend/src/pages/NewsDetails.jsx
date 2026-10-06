import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jsPDF } from "jspdf";

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

  const handleDownloadPDF = () => {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  // Title
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");

  const titleLines = doc.splitTextToSize(
    news.title,
    contentWidth
  );

  doc.text(titleLines, margin, 25);

  let currentY = 25 + titleLines.length * 10;

  // Category
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  doc.text(
    `Category: ${news.category}`,
    margin,
    currentY + 5
  );

  doc.text(
    `Author: ${news.author}`,
    margin,
    currentY + 12
  );

  if (news.createdAt) {
    doc.text(
      `Published: ${new Date(news.createdAt).toLocaleDateString()}`,
      margin,
      currentY + 19
    );
  }

  currentY += 32;

  // Description
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");

  const descriptionLines = doc.splitTextToSize(
    news.description,
    contentWidth
  );

  doc.text(descriptionLines, margin, currentY);

  currentY += descriptionLines.length * 7 + 10;

  // Article content
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  const contentLines = doc.splitTextToSize(
    news.content,
    contentWidth
  );

  const lineHeight = 6;

  contentLines.forEach((line) => {
    if (currentY > 275) {
      doc.addPage();
      currentY = 20;
    }

    doc.text(line, margin, currentY);
    currentY += lineHeight;
  });

  // Download
  const fileName = news.title
    .replace(/[^a-z0-9]/gi, "_")
    .substring(0, 50);

  doc.save(`${fileName}.pdf`);
};

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="not-found">
        <h2>News article not found</h2>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="details-container">

      {/* Back button */}
      <Link to="/" className="back-link">
        ← Back to Latest News
      </Link>

      {/* Article Header */}
      <article className="article">

        <span className="details-category">
          {news.category}
        </span>

        <h1>{news.title}</h1>

        <div className="article-meta">
          <span>By {news.author}</span>

          {news.createdAt && (
            <span>
              {new Date(news.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Image */}
        {news.image && (
          <img
            src={news.image}
            alt={news.title}
            className="details-image"
          />
        )}

        {/* Description */}
        <p className="description">
          {news.description}
        </p>

        {/* Full Article */}
        <div className="article-content">
          {news.content}
        </div>

      </article>

      {/* Actions */}
      <div className="action-buttons">

  <Link
    to={`/edit/${news._id}`}
    className="edit-button"
  >
    ✏️ Edit News
  </Link>

  <button
    onClick={handleDownloadPDF}
    className="download-button"
  >
    📥 Download PDF
  </button>

  <button
    onClick={handleDelete}
    className="delete-button"
  >
    🗑 Delete News
  </button>

</div>
    </main>
  );
}

export default NewsDetails;