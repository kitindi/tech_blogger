import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date.now(),
  },
  content: {
    type: String,
    required: true,
  },
});

const BlogModel = mongoose.model.model || mongoose.model("blog", Schema);

export default BlogModel;
