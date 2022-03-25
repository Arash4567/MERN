import { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import FilterAndSearch from "./components/FindAndSearch";
import TableList from "./components/TableList";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./components/hooks/useCreatePost";
import PostServiceApi from "./API/PostServiceApi";

function App() {
  const [posts, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [visible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = (postPost) => {
    setPost([postPost, ...posts]);
    setVisible(false);
  };

  async function getPosts() {
    setLoading(true);
    const posts = await PostServiceApi.getAllPosts();
    setPost(posts);
    setLoading(false);
  }

  const removePost = (post) => {
    setPost(posts.filter((selectPost) => selectPost.id !== post.id));
  };

  return (
    <>
      <MyModal showModal={visible} setModal={setVisible}>
        <PostForm createPost={createPost} />
      </MyModal>
      <div className="container mt-5 shadow rounded p-3">
        <MyButton className="btn btn-primary" onClick={() => setVisible(true)}>
          Add Post
        </MyButton>
        <MyButton className="btn btn-success ms-3" onClick={() => getPosts()}>
          Get Posts
        </MyButton>
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <TableList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            caption="My Posts"
          />
        )}
      </div>
    </>
  );
}

export default App;
