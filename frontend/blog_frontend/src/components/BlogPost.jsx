import React, { useState } from "react";

function BlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Construct the post data
    const newPost = {
      title,
      content,
      author,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost), // Send the form data in JSON format
      });

      if (response.ok) {
        // If the post is created successfully
        const data = await response.json();
        setSuccessMessage("Blog post created successfully!");
        setTitle(""); // Reset form
        setContent("");
        setAuthor("");
      } else {
        // If there is an error, show a message
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to create blog post");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server");
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BlogPost;
