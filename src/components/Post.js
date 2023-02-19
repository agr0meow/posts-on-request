import "./Post.css";
const Post = ({ userId, id, title, body }) => {
  return (
    <div className="wrapper">
      <h1>ID: {id}</h1>
      <p> TITLE: {title}</p>
      <p> BODY: {body}</p>
      <p>userID: {userId}</p>
    </div>
  );
};
export default Post;
