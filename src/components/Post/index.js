import React from "react";

import "./index.css";

function Post(props) {
  return (
    <article
      key={props.postId}
      title={props.title}
      data={props.date}
      author={props.author}
      text={props.text}
      highlights={props.highlights}
      image={props.image}
    >
      <h1>{props.title}</h1>
      <img
        src={props.image.link}
        alt={props.image.alt}
        height={300}
        width={400}
      />
      <p>{props.author}</p>
      <li>{props.highlights}</li>
      <p>{props.text}</p>
      <div>{props.date}</div>
    </article>
  );
}

export default Post;
