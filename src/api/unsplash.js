import axios from "axios";
export default axios.create({
  baseURL:"https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID i3e2tK5ViUer-i4wJIepzGAFN2LiKSewkUgu0xGKBy0 "
  }
})
