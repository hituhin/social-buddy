import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h1>{posts.length}</h1>
      {posts.map((post) => (
        <Post Post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Home;
