import express from "express";
import {
  createBlog,
  getBlogs,
  getSingleBlog,
  getBlogsByHiddenStatus,
} from "../controllers/blogs.controller.js";

const router = express.Router();

router.post("/blogs", createBlog);
router.get("/blogs", getBlogs);
router.get("/blogs/:slug", getSingleBlog);
router.get("/blogs/hidden", getBlogsByHiddenStatus); 

export default router;
