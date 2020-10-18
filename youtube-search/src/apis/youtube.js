import axios from "axios";
const KEY = "AIzaSyAO3izU3jx5zz6OGxr2Uob6ICJmDOzMQgQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
