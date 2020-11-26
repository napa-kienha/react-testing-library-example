import axios from "axios";

class Request {
  constructor() {
    const service = axios.create({
      headers: {
        "Content-Type": "multipart/form-data",
        "X-Frame-Options": "sameorigin",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "X-Content-Type-Options": "nosniff",
      },
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    service.interceptors.request.use(this.handleRequest);
    this.service = service;
  }

  convertToFormData = (data) => {
    const bodyFormData = new FormData();
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        bodyFormData.append(key, value);
      }
    }
    return bodyFormData;
  };

  get = (endpoint, payload) => {
    const data = this.convertToFormData(payload);
    return this.service.request({
      method: "GET",
      url: `${endpoint}`,
      responseType: "json",
      data,
    });
  };

  handleSuccess = async (response) => {
    console.log(response);
    return response.data;
  };

  handleError = async (error) => {
    console.log(error);
  };

  handleRequest = (request) => {};
}

export default Request;
