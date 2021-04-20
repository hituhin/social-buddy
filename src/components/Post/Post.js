import React from "react";
import "../Post/post.css";

const Post = (props) => {
  const { id, title, body } = props.Post;
  return (
    <div className="post">
      <h1>
        {id}no:{title}
      </h1>
      <p>{body}</p>
      <button>Show Comments</button>
    </div>
  );
};

export default Post;
