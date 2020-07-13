import axios from "axios";

var service = axios.create({
  // baseURL:"/api", // 开发环境下使用
  baseURL: "/api",
});

export default service;
