<template>
  <el-row>
    <el-col :span="24">
      <swiper :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
      </swiper>
    </el-col>
  </el-row>
</template>

<script>
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      swiperOptions: {
        initialSlide: 0,
        slidesPerView: 5.5,
      },
    };
  },
};
</script>

<style></style>
