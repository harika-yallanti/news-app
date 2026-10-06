import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditNews() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "Technology",
    author: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [id]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/news/${id}`
      );

      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/news/${id}`,
        formData
      );

      alert("News updated successfully!");

      navigate(`/news/${id}`);
    } catch (error) {
      console.error("Error updating news:", error);
      alert("Failed to update news");
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  return (
    <main className="form-page">

      <div className="form-header">
        <p className="form-label">NEWS MANAGEMENT</p>
        <h1>Edit News</h1>
        <p>
          Update the information below and save your changes.
        </p>
      </div>

      <div className="form-container">

        <form onSubmit={handleSubmit}>

          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">
              News Title
            </label>

            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter news title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">
              Short Description
            </label>

            <textarea
              id="description"
              name="description"
              placeholder="Enter a short description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          {/* Content */}
          <div className="form-group">
            <label htmlFor="content">
              Full Article
            </label>

            <textarea
              id="content"
              name="content"
              placeholder="Write the full news article..."
              value={formData.content}
              onChange={handleChange}
              rows="10"
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">
              Category
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Business">Business</option>
              <option value="Health">Health</option>
              <option value="Entertainment">
                Entertainment
              </option>
            </select>
          </div>

          {/* Author */}
          <div className="form-group">
            <label htmlFor="author">
              Author Name
            </label>

            <input
              id="author"
              type="text"
              name="author"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image */}
          <div className="form-group">
            <label htmlFor="image">
              Image URL
            </label>

            <input
              id="image"
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
            />

            <small>
              Optional. Add a URL for the article image.
            </small>
          </div>

          {/* Buttons */}
          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate(`/news/${id}`)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-button"
            >
              Update News
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}

export default EditNews;