import { Request, Response } from "express";
import Post from "../models/Post";

//get all post

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
//create new post
export const createPost = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;

  try {
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//get post by ID
export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id as string);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
//ZI9OHFicHNAeJzKb
//shiferawmichael13
