import { useState } from "react";
import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {
  const [modalIsVisible, setIsModalVisible] = useState(false);
  function closeCreatePostMadalHandler(event) {
    setIsModalVisible(false);
  }
  function showCreatePostMadalHandler(event) {
    setIsModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showCreatePostMadalHandler}></MainHeader>
      <main>
        <PostList
          isPosting={modalIsVisible}
          onStopPosting={closeCreatePostMadalHandler}
        />
      </main>
    </>
  );
}

export default App;
