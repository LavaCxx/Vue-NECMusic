<template>
  <el-container class="player-Con">
    <el-header class="player-Header" height="40px">
      <PlayerHeader />
    </el-header>
    <el-main class="player-SongImg">
      <PlayerImg />
    </el-main>
    <el-footer class="player-Controller" height="120px">
      <PlayerController />
    </el-footer>
  </el-container>
</template>

<script>
import PlayerHeader from "../components/Player/PlayerHeader";
import PlayerImg from "../components/Player/PlayerImg";
import PlayerController from "../components/Player/PlayerController.vue";
export default {
  components: {
    PlayerHeader,
    PlayerImg,
    PlayerController,
  },
};
</script>

<style lang="scss">
.player-Con {
  text-align: center;
  position: relative;
  height: 100vh;
  display: flex;
  .iconfont {
    font-size: 20px;
    cursor: pointer;
  }
  .player-Header {
    padding: 0 10px;
    font-size: 20px;
    line-height: 40px;
    background: gray;
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
