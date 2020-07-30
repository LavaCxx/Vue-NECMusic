<template>
  <div>
    <el-row class="playerImg-Con">
      <el-col>
        <img
          src="http://p2.music.126.net/bw7Sxt-W5lq0Jeq9B9eaXA==/109951163846794308.jpg"
          alt=""
          class="song-Img"
          ref="songImg"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: false,
      songImg: "",
    };
  },
  created() {},
  mounted() {
    this.bus.$on("play", (data) => (this.isPlay = data));
    this.songImg = this.$refs.songImg;
  },
  watch: {
    isPlay(newV) {
      newV
        ? (this.songImg.style.animationPlayState = "running")
        : (this.songImg.style.animationPlayState = "paused");
    },
  },
  updated() {},
};
</script>

<style lang="scss">
.playerImg-Con {
  .song-Img {
    width: 65vmin;
    height: 65vmin;
    border-radius: 50%;
    background: gray;
    animation: imgRotate 8s linear infinite forwards;
    transform-origin: center center;
    animation-play-state: paused;
    border: 8px solid rgba(110, 110, 110, 0.8);
  }
  @keyframes imgRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
