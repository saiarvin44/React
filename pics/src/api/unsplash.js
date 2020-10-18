import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID Ll5WRDIEFLltQqvPTF4H24C9KjM9u9s8395ha7fteTg",
  },
});
