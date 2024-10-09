const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};
//ZI9OHFicHNAeJzKb
//shiferawmichael13
