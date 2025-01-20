import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enterdAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");
  function onAuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function onBodyChangehandler(event) {
    setEnteredBody(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enterdAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          placeholder="Type something Here"
          onChange={onBodyChangehandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onAuthorChangeHandler}
        ></input>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
export default NewPost;
