//defining api routes in express

import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
} from "../controllers/postController";

const router = Router();
router.get("/posts", getPosts);
router.post("/posts", createPost);
// router.get("/:id", getPostById);

export default router;
