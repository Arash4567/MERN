import { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import FilterAndSearch from "./components/FindAndSearch";
import TableList from "./components/TableList";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./components/hooks/useCreatePost";
import PostServiceApi from "./API/PostServiceApi";
import { useFetching } from "./components/hooks/useFetdching";
import { getPageCount } from "./utils/pages";
import MyPagination from "./UI/pagination/MyPagination";

function App() {
  const [posts, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [visible, setVisible] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const [getPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostServiceApi.getAllPosts(limit, page);
    setPost(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPage(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    getPosts();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  const createPost = (postPost) => {
    setPost([postPost, ...posts]);
    setVisible(false);
  };

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
        {/* {postError && <h5 className="text-center text-danger lead">Error while get data!</h5>} */}
        {isLoading ? (
          <div className="d-flex justify-content-center my-3">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <TableList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            error={postError}
            caption="My Posts"
          />
        )}
        <MyPagination
          totalPage={totalPage}
          changePage={changePage}
          page={page}
        />
      </div>
    </>
  );
}

export default App;
