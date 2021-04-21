import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import "../PostDetail/PostDetail.css";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);
  return (
    <div className="post-details">
      <h3>This is Post Details of : {id}</h3>
      <br />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {comment.map((com) => (
        <Comments comments={com} key={id}></Comments>
      ))}
    </div>
  );
};

export default PostDetail;
