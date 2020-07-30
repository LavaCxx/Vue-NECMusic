<template>
  <div>
    <el-row class="header-Con">
      <el-col :span="2" class="header-Back"
        ><i class="iconfont" @click="goBack">&#xe605;</i></el-col
      >
      <el-col :span="20" class="header-TagName"><span>歌单</span></el-col>
      <el-col :span="2" class="iconCon playerBtn">
        <router-link to="/player">
          <i class="el-icon-video-play"></i></router-link
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      if (this.$router.matcher.match.length > 0) {
        this.$router.back(-1);
      } else {
        this.$router.history.push("/");
      }
      console.log(this.$router);
    },
  },
};
</script>

<style lang="scss">
.header-Con {
  text-align: center;
  font-size: 25px;
  .iconfont {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
