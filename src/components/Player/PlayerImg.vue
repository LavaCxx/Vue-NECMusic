<template>
  <div>
    <el-row class="playerImg-Con">
      <el-col>
        <img
          src="https://i.loli.net/2020/06/30/c73PmXlKiJq9EyS.jpg"
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
    width: 70vmin;
    height: 70vmin;
    border-radius: 50%;
    background: linear-gradient(red, green);
    animation: imgRotate 8s linear infinite forwards;
    transform-origin: center center;
    animation-play-state: paused;
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
