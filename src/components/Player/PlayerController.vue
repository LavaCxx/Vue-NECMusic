<template>
  <div>
    <audio
      controls
      style="display: none;"
      ref="audioPlayer"
      @canplay="getDuration"
      @ended="getEnd"
    >
      <source src="../../assets/test.mp3" type="audio/mpeg" />
      Your browser does not support this audio format.
    </audio>
    <el-row class="controller-First">
      <el-col :span="3" class="playTime Now"
        ><span>{{ nowTime }}</span></el-col
      >
      <el-col :span="18" class="playTime-Line">
        <div class="line-Con">
          <el-slider
            v-model="playTime"
            :show-tooltip="false"
            input-size="mini"
            @change="changeTime"
          ></el-slider>
        </div>
      </el-col>
      <el-col :span="3" class="playTime All"
        ><span>{{ totalTime }}</span></el-col
      >
    </el-row>
    <el-row class="controller-Second">
      <el-col :span="4" class="play-Mode"
        ><i
          class="iconfont"
          v-html="playMode[modeNum].icon"
          @click="changePlayMode"
        ></i
      ></el-col>
      <el-col :span="5" class="play-Pre"
        ><i class="iconfont">&#xe860;</i></el-col
      >
      <el-col :span="6" class="play-Pause"
        ><i class="iconfont" @click="play" v-html="playIcon"></i
      ></el-col>
      <el-col :span="5" class="play-Next"
        ><i class="iconfont">&#xe631;</i></el-col
      >
      <el-col :span="4" class="play-List"
        ><i class="iconfont">&#xe6c5;</i></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: "",
      playBtn: document.querySelector(".play-Pause iconfont"),
      modeBtn: document.querySelector(".play-Mode iconfont"),
      preBtn: document.querySelector(".play-Pre iconfont"),
      nextBtn: document.querySelector(".play-Next iconfont"),
      isPlay: false,
      // 播放模式
      playMode: [
        {
          id: 1,
          icon: "&#xe61f;",
          text: "列表循环",
        },
        {
          id: 2,
          icon: "&#xe620;",
          text: "单曲循环",
        },
        {
          id: 3,
          icon: "&#xe623;",
          text: "乱序播放",
        },
      ],
      modeNum: 0,
      // 进度条长度
      playTime: 0,
      // 已播放秒数
      rawTimeNow: "",
      // 歌曲秒数
      rawTimeAll: "",
      // 格式化后时间
      nowTime: "00:00",
      totalTime: "00:00",
    };
  },
  computed: {
    playIcon() {
      return this.isPlay ? "&#xe85f;" : "&#xe62f;";
    },
  },
  mounted() {
    this.player = this.$refs.audioPlayer;
  },
  methods: {
    // 播放暂停
    play() {
      this.isPlay = !this.isPlay;
      this.isPlay ? this.player.play() : this.player.pause();
      let timecheck = setInterval(() => {
        this.timeCheck();
        if (this.rawTimeNow == this.rawTimeAll) clearInterval(timecheck);
      }, 500);
      this.bus.$emit("play", this.isPlay);

      if (!this.isPlay) clearInterval(timecheck);
    },
    // 改变播放模式
    changePlayMode() {
      if (this.modeNum == 2) {
        this.modeNum = 0;
      } else {
        this.modeNum += 1;
      }
      this.setMode();
    },
    setMode() {
      switch (this.modeNum) {
        case 1:
          this.player.setAttribute("loop", "loop");
          break;
        default:
          this.player.removeAttribute("loop");
      }
    },

    timeCheck() {
      // 获取实时播放时间
      this.rawTimeNow = this.player.currentTime;
      this.nowTime = this.formatTime(~~this.rawTimeNow);
      // 获取进度条长度
      this.playTime = (this.rawTimeNow / this.rawTimeAll) * 100;
    },
    // 音频加载完后获取持续时间
    getDuration() {
      this.rawTimeAll = this.player.duration;
      this.totalTime = this.formatTime(~~this.rawTimeAll);
    },
    // 音频播放完触发
    getEnd() {
      if (this.modeNum !== 1) {
        this.play();
      }
    },
    formatTime(sec) {
      let min = 0;
      let time = "";
      if (sec >= 60) {
        min = ~~(sec / 60);
        sec -= min * 60;
      }
      min < 10 ? (min = "0" + min) : min;
      sec < 10 ? (sec = "0" + sec) : sec;
      time = min + ":" + sec;
      return time;
    },
    changeTime() {
      this.player.currentTime = (this.rawTimeAll / 100) * this.playTime;
      this.timeCheck();
    },
  },
};
</script>

<style lang="scss">
.controller-First {
  width: 100%;
  padding: 5px 0;
  line-height: 22px;
  color: #fff;
  .playTime {
    font-size: 14px;
    text-align: center;
  }
  .playTime-Line {
    padding: 0 20px;
    .line-Con {
      .el-slider__runway {
        margin: 8px 0;
        .el-slider__button {
          width: 10px;
          height: 10px;
          border: none;
          background-color: #fff;
        }
      }
    }
  }
}
.controller-Second {
  color: #fff;

  padding: 10px 0;
  line-height: 50px;
  .play-Mode,
  .play-Pre,
  .play-Next,
  .play-List {
    .iconfont {
      font-size: 25px;
    }
  }
  .play-Pause {
    .iconfont {
      font-size: 50px;
    }
  }
}
</style>
