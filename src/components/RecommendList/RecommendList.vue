<template>
  <el-container>
    <el-header height="30px">
      <el-row type="flex" justify="space-between">
        <el-col :span="24">
          <h3 class="songList-title">{{ title }}</h3>
        </el-col>
        <el-col :span="10">
          <div class="btnCon">
            <el-button type="info" round size="mini" plain class="moreBtn"
              >查看更多</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <swiper :options="swiperOptions" class="RecommendSong">
            <swiper-slide
              v-for="item in songList"
              :key="item.id"
              class="songList-Con"
            >
              <figure @click="goSongList(item.id)">
                <div class="songList-Img">
                  <img :src="item.picUrl || item.coverImgUrl" alt="" />
                  <p class="playCount-mask">
                    <span>{{ numberFormat(item.playCount) }}</span>
                  </p>
                </div>
                <figcaption class="songList-title">
                  <p>{{ item.name }}</p>
                </figcaption>
              </figure>
            </swiper-slide>
          </swiper>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { getPersona, getPlaylist, getRecommend } from "../../utils/http";
import "swiper/css/swiper.css";
export default {
  props: ["type"],
  data() {
    return {
      title: "",
      songList: [],
      swiperOptions: {
        initialSlide: 0,
        freeMode: true,
        spaceBetween: 10,
        slidesPerView: "auto",
      },
    };
  },
  created() {
    switch (this.type) {
      case 0:
        getPersona().then((res) => {
          if (res.data.code === 200) {
            this.songList = res.data.result;
            this.title = "热门歌单";
          }
        });
        break;
      case 1:
        getPlaylist().then((res) => {
          if (res.data.code === 200) {
            this.songList = res.data.playlists;
            this.title = "网友精选碟";
          }
        });
        break;
      case 2:
        getRecommend().then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.songList = res.data.recommend;
            this.title = "每日推荐歌单";
          }
        });
    }
  },
  methods: {
    numberFormat(num) {
      if (num > 99999999) {
        return Math.floor(num / 10000000) / 10 + "亿";
      } else if (num > 9999) {
        return Math.floor(num / 1000) / 10 + "万";
      } else {
        return num;
      }
    },
    goSongList(id) {
      console.log(id);
      this.$router.push("songListDetail/" + id);
    },
  },
};
</script>

<style lang="scss">
.btnCon {
  text-align: right;
}
.songList-Con {
  width: 110px;
  .songList-Img {
    position: relative;
    width: 100%;
    height: 110px;
    border-radius: 10px;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 110px;
      top: 0;
      left: 0;
    }
    .playCount-mask {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      padding: 3px 6px 0 0;
      color: #fff;
      top: 0;
      left: 0;
      text-align: right;
    }
  }
  .songList-title {
    width: 100%;
    padding: 6px 0;
    overflow: hidden;
    box-sizing: border-box;
    p {
      width: 100%;
      height: 45px;
      line-height: 1.3;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
