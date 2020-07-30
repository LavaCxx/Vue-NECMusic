<template>
  <div class="player-Glass" :style="isDisplay">
    <el-container class="player-Con">
      <el-header class="player-Header" height="50px">
        <PlayerHeader />
      </el-header>
      <el-main class="player-SongImg">
        <PlayerImg />
      </el-main>
      <el-footer class="player-Controller" height="120px">
        <PlayerController />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import PlayerHeader from "../components/Player/PlayerHeader";
import PlayerImg from "../components/Player/PlayerImg";
import PlayerController from "../components/Player/PlayerController.vue";
export default {
  data() {
    return { isDisplay: "height:100%" };
  },
  watch: {},
  components: {
    PlayerHeader,
    PlayerImg,
    PlayerController,
  },
};
</script>

<style lang="scss">
.player-Glass {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
}
.player-Con {
  text-align: center;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background: url("http://p2.music.126.net/bw7Sxt-W5lq0Jeq9B9eaXA==/109951163846794308.jpg")
    no-repeat center center;
  background-size: 120% 120%;
  &::before {
    content: " ";
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(15px);
  }
  .iconfont {
    font-size: 20px;
    cursor: pointer;
  }
  .player-Header {
    padding: 0 10px;
    font-size: 20px;
    line-height: 50px;
  }
  .player-SongImg {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .player-Controller {
    width: 100%;
  }
}
</style>
