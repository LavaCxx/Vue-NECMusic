<template>
  <div>
    <el-row class="player-HeaderCon">
      <el-col :span="2" class="player-Back"
        ><i class="iconfont" @click="goBack">&#xe605;</i></el-col
      >
      <el-col :span="20" class="player-SongName"><span>Humanoid</span></el-col>
      <el-col :span="2" class="player-Share"
        ><i class="iconfont">&#xe61e;</i></el-col
      >
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
.player-HeaderCon {
  color: #fff;
}
</style>
