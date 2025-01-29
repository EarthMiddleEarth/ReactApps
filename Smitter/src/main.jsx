import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/routeLayout.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/postDetails.jsx";

import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Posts></Posts>,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost></NewPost>,
            action: newPostAction,
          },
          {
            path: "/:postId",
            element: <PostDetails></PostDetails>,
            loader: postDetailsLoader,
          },
        ],
      }, // our-domain
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
