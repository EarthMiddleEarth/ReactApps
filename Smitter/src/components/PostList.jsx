import Post from "./Post.jsx";
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author={enteredAuthor} body={enteredBody} /> */}
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            ></Post>
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>It s so quiet here, isn't it?</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
export default PostList;
