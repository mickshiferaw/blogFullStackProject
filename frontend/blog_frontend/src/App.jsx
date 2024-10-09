import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostList from "./components/PostList";
import BlogPost from "./components/BlogPost";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PostList />
      <BlogPost />
    </div>
  );
}

export default App;
