const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    state: {
      type: String,
      default: "draft",
      enum: ["draft", "published"],
    },
    read_count: {
      type: Number,
    },
    reading_time: {
      type: String,
    },
    tags: {
      type: [String],
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("blogs", blogSchema);

module.exports = blogModel;
