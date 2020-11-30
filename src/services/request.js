class Request {
  async fetchData(url) {
    return await fetch(url).then((res) => res.json());
  }
}

export default Request;
