export const getPosts = async () => {
  const res = await fetch("http://localhost:5000/api/posts");
  return res.json();
};

export const createPost = async (post) => {
  const res = await fetch("http://localhost:5000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return res.json();
};
