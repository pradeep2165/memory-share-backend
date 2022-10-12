import express from "express";

import { getPosts, getPost, createPost, updatePost, likePost, deletePost, getPostsBySearch, getPostsByCreator } from "../controllers/posts.js";

const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/creator", getPostsByCreator);
router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
