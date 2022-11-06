const blogModel = require("../models/blogs");

exports.getBlogList = async (req, res, next) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const blogList = await blogModel
      .find({ state: "published" })
      .sort({ read_count: 1, reading_time: 1, timestamp: 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
      blogList.read_count++;
      await blogList.save();
    res.status(200).json({ total: blogList.length, blogList });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.getBlogByAuthor = async (req, res, next) => {
  try {
    const authorName = req.params.authorname;
    const { page = 1, limit = 20 } = req.query;
    const blogList = await blogModel
      .find({
        author: authorName,
        state: "published",
      })
      .limit(limit * 1)
      .skip((page - 1) * limit);
      blogList.read_count++;
      await blogList.save();
    res.status(200).json({ total: blogList.length, blogList });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.getBlogByTitle = async (req, res, next) => {
  try {
    const blogTitle = req.params.title;
    const { page = 1, limit = 20 } = req.query;
    const blogList = await blogModel
      .find({ title: blogTitle, state: "published" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    blogList.read_count++;
    await blogList.save();
    res.status(200).json({ total: blogList.length, blogList });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.getBlogByTags = async (req, res, next) => {
  try {
    const blogTag = req.params.tags;
    const { page = 1, limit = 20 } = req.query;
    const blogList = await blogModel
      .find({ tags: blogTag, state: "published" })
      .limit(limit * 1)
      .skip((page - 1) * limit);
      blogList.read_count++;
      await blogList.save();
    res.status(200).json({ total: blogList.length, blogList });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
