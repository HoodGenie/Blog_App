const express = require("express");
const blogController = require("../controller/blogController");
const blogModel = require("../models/blogs");

const blogRouter = express.Router();

// create new blog
blogRouter.post("/", blogController.createBlog);

// delete blog by id
blogRouter.delete("/:id", blogController.deleteBlog);

// update the whole blog by id
blogRouter.put("/:id", blogController.updateBlogById)

// update part of a blog by id
blogRouter.patch("/:id", blogController.updateBlogSectionById)

module.exports = blogRouter;
