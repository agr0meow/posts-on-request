import Post from "./Post";
import React, { useState, useEffect } from "react";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const array = posts;
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPost(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);
  // использование useEffect без синтаксиса async await
  // ====================================================================
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => setPost(posts))
  //     .catch((err) => setError(err.message))
  //     .finally(() => setIsLoading(false));
  // }, []);
  // ====================================================================

  if (error) {
    return <div style={{ fontSize: "3rem" }}>Error: {error}</div>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        array.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      )}
    </>
  );
};
export default Posts;
