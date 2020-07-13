<template>
  <el-header class="home-Header" height="auto">
    <el-row :gutter="10" class="searchCon">
      <el-col :span="2" class="iconCon listenSearch"
        ><i class="el-icon-microphone"></i
      ></el-col>
      <el-col :span="20"
        ><el-input
          placeholder="搜索音乐、视频、歌词、电台"
          class="searchIpt"
          v-model="keyWord"
      /></el-col>
      <el-col :span="2" class="iconCon playerBtn">
        <router-link to="/player">
          <i class="el-icon-video-play"></i></router-link
      ></el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      keyWord: "",
    };
  },
};
</script>

<style lang="scss">
.home-Header {
  background: #d53b33;
  width: 100%;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.searchCon {
  margin-bottom: 0 !important;
  padding: 0 15px;
  .searchIpt {
    border-radius: 20px;
    overflow: hidden;
    outline: none;
    .el-input__inner {
      background: rgba(255, 255, 255, 0.05);
      border: none;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 1px;
    }
  }
  .iconCon {
    text-align: center;
    padding: 0;
    color: #fff;
    a {
      text-decoration: none;
      color: inherit;
    }
    i {
      font-size: 25px;
      vertical-align: middle;
      line-height: 40px;
    }
  }
}
</style>
