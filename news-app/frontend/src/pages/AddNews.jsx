import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNews() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "Technology",
    author: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/news",
        formData
      );

      alert("News added successfully!");

      navigate("/");
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
    }
  };

  return (
    <main className="form-page">

      {/* Header */}
      <div className="form-header">
        <p className="form-label">NEWS MANAGEMENT</p>

        <h1>Add News</h1>

        <p>
          Share a new story with your readers.
        </p>
      </div>

      {/* Form */}
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
              onClick={() => navigate("/")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-button"
            >
              Publish News
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}

export default AddNews;