import React, { useState } from "react";
import "./index.css";
import samplePosts from "../../libs/data";
import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  let id = 0;

  return (
    <main id="main">
      {posts.map((post) => {
        return (
          <Post
            key={post.postId}
            title={post.title}
            data={post.date}
            author={post.author}
            highlights={post.highlights.map((post) => {
              return <ul text={post.highlights} key={id++}></ul>;
            })}
            text={post.text}
            image={post.image}
          />
        );
      })}
    </main>
  );
}

export default Main;
