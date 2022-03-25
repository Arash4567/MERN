import axios from "axios";
import { errorGet } from "../components/Notification";

class PostServiceApi {
  static async getAllPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ).catch(function (err) {
      errorGet(err)
    });
    return response.data;
  }
}

export default PostServiceApi;
