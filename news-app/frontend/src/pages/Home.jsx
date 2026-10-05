import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <h2>Loading news...</h2>;
  }

  return (
    <div className="home">
      <h1>Latest News</h1>

      <div className="news-grid">
        {news.map((item) => (
          <NewsCard
            key={item._id}
            news={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;