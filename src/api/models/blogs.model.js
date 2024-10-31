import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
  {
    body: String,
    date: Date,
  },
  { _id: false }
);

const dbBlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true, index: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number,
    },
    comments: [commentsSchema],
  },
  {
    timestamps: true,
    statics: {
      findByHidden(hiddenBool) {
        return this.find({ hidden: hiddenBool });
      },
    },
  }
);

const Blog = mongoose.model("Blog", dbBlogSchema);

export default Blog;
