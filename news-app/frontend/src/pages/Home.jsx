import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/news"
      );

      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  // Search and category filtering
  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading latest news...</p>
      </div>
    );
  }

  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <p className="hero-label">STAY INFORMED</p>

        <h1>Latest News</h1>

        <p className="hero-text">
          Discover the latest stories, updates and insights
          across technology, sports, business, health and entertainment.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="filters">

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search news by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Business">Business</option>
          <option value="Health">Health</option>
          <option value="Entertainment">Entertainment</option>
        </select>

      </section>

      {/* News heading */}
      <div className="news-heading">
        <div>
          <h2>Latest Stories</h2>
          <p>
            {filteredNews.length} article
            {filteredNews.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      {/* News Cards */}
      <section className="news-grid">

        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <NewsCard
              key={item._id}
              news={item}
            />
          ))
        ) : (
          <div className="no-news">
            <div className="no-news-icon">📰</div>

            <h3>No news found</h3>

            <p>
              Try searching with a different title or category.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}

export default Home;