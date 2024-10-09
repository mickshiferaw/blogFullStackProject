import React, { useEffect, useState } from "react";
import { getPosts } from "../services/postService";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            <strong>{post.author}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
