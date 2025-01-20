import { useState } from "react";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import classes from "./PostList.module.css";
import Modal from "./Modal.jsx";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    setPosts((existingData) => [postData, ...existingData]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onAuthorChange={onAuthorChangeHandler}
            // onBodyChange={onBodyChangeHandler}
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          ></NewPost>
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author={enteredAuthor} body={enteredBody} /> */}
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body}></Post>
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>It's so quiet here, isn't it?</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
export default PostList;
