import React from "react";
import "../Comments/Comments.css";

const Comments = (props) => {
  const { name, email, body } = props.comments;
  return (
    <div className="comments">
      <h1>{name}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Comments;
