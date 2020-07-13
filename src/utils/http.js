import axios from "./request";

// 轮播图
// 0-PC 1-android 2-ios 3-ipad
export const getBanner = (type = 2) => {
  return axios.get("/banner", {
    params: {
      type,
    },
  });
};

// 推荐歌单
export const getPersona = (limit = 10) => {
  return axios.get("/personalized", {
    params: {
      limit,
    },
  });
};

// 网友精选歌单
export const getPlaylist = (limit = 10, order = "hot") => {
  return axios.get("/top/playlist", {
    params: {
      limit,
      order,
    },
  });
};
// 每日精选歌单
export const getRecommend = () => {
  return axios.get("/recommend/resource");
};

// 搜索结果
export const getSearch = (type, keyword) => {
  return axios.get("/search", {
    params: {
      type,
      keyword,
    },
  });
};

// 手机登录
export const getLogin = (phone, password) => {
  return axios.post("/login/cellphone", {
    phone,
    password,
  });
};

// 检测登录状态
export const getStatus = () => {
  return axios.get("/login/status");
};

// 退出登录
export const getLogout = () => {
  return axios.get("/logout");
};
