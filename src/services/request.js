import axios from "axios";

class Request {
  async fetchData(url) {
    let data;
    try {
      data = await axios.get(url);
    } catch (e) {
      console.log(e);
    }
    return data;
  }
}

export default Request;
