const express = require("express");
const News = require("../models/News");

const router = express.Router();

// GET all news
router.get("/", async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch news",
      error: error.message,
    });
  }
});

// GET one news article
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        message: "News article not found",
      });
    }

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch news",
      error: error.message,
    });
  }
});

// CREATE news
router.post("/", async (req, res) => {
  try {
    const news = new News(req.body);

    const savedNews = await news.save();

    res.status(201).json(savedNews);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create news",
      error: error.message,
    });
  }
});

// UPDATE news
router.put("/:id", async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedNews) {
      return res.status(404).json({
        message: "News article not found",
      });
    }

    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update news",
      error: error.message,
    });
  }
});

// DELETE news
router.delete("/:id", async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);

    if (!deletedNews) {
      return res.status(404).json({
        message: "News article not found",
      });
    }

    res.status(200).json({
      message: "News deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete news",
      error: error.message,
    });
  }
});

module.exports = router;