import Blog from "../models/blogs.model.js";

export const createBlog = async (req, res) => {
  try {
    const {
      title,
      content,
      author,
      hidden = false,
      meta = { votes: 0, favs: 0 },
      comments = [],
    } = req.body;

    const newBlog = new Blog({
      title,
      content,
      author,
      hidden,
      meta,
      comments,
    });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
};

// Handler to retrieve all blog posts
export const getBlogs = async (_, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

export const getBlogsByHiddenStatus = async (
  req,
  res
) => {
  try {
    const hidden = req.query.hidden === "true";
    const blogs = await Blog.findByHidden(hidden);
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs by hidden status:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};
