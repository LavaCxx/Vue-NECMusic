<template>
  <el-row>
    <el-col :span="24">
      <swiper :options="swiperOptions" class="swiper-Con">
        <swiper-slide
          v-for="item in sliderData"
          :key="item.id"
          class="swiper-Item"
        >
          <span>{{ item.title }}</span>
        </swiper-slide>
      </swiper>
    </el-col>
  </el-row>
</template>

<script>
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      sliderData: [
        {
          id: 1,
          title: "每日推荐",
        },
        {
          id: 2,
          title: "歌单",
        },
        {
          id: 3,
          title: "排行榜",
        },
        {
          id: 4,
          title: "电台",
        },
        {
          id: 5,
          title: "私人FM",
        },
      ],
      swiperOptions: {
        initialSlide: 0,
        freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    };
  },
};
</script>

<style lang="scss">
.swiper-Con {
  .swiper-Item {
    text-align: center;
    padding: 5px;
    border: 1px solid #333;
    width: 20%;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
