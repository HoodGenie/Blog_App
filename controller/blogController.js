const { findByIdAndDelete } = require("../models/blogs");
const blogModel = require("../models/blogs");

exports.createBlog = (req, res) => {
  const blog = req.body;
  blogModel
    .create(blog)
    .then((blog) => {
      res.status(201).send(blog);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.deleteBlog = (req, res) => {
  const blogID = req.params.id;
  blogModel;
  findByIdAndDelete(blogID)
    .then(() => {
      res.status(200).json({
        message: "blog successfully deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.updateBlogById = (req, res, next) => {
  // get the new information to be updated
  const newInfo = req.body;

  // get the Id of the blog to be updated
  const blogID = req.params.id;

  // update by id
  blogModel
    .findByIdAndUpdate(blogID, newInfo, { new: true })

    // send the new blog info to user
    .then((updatedBlog) => {
      res.status(200).send(updatedBlog);
    })

    // error handler for the process
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.updateBlogSectionById = (req, res, next) => {
  // get the new information to be updated
  const newInfo = req.body;

  // get the Id of the blog to be updated
  const blogID = req.params.id;

  // update by id
  blogModel
    .findByIdAndUpdate(blogID, newInfo, { new: true })

    // send the new blog info to user
    .then((updatedBlog) => {
      res.status(200).send(updatedBlog);
    })

    // error handler for the process
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
