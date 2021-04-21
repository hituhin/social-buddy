import React from "react";
import { useHistory } from "react-router-dom";
import "../Post/post.css";

const Post = (props) => {
  const { id, title, body } = props.Post;
  const history = useHistory();
  const showComments = (id) => {
    const url = `post/${id}`;
    history.push(url);
  };
  return (
    <div className="post">
      <h1>
        {id}no:{title}
      </h1>
      <p>{body}</p>
      <button onClick={() => showComments(id)}>Show Comments</button>
    </div>
  );
};

export default Post;
