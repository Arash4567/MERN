import axios from "axios";
import { errorGet } from "../components/Notification";

class PostServiceApi {
  static async getAllPosts(limit = 10, page = 1) {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: limit,
          _page: page
        },
      })
      .catch(function (err) {
        errorGet("Server bilan bog`lanishda xatolik yuz berdi!");
      });
    return response;
  }
}

export default PostServiceApi;
