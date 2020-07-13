<template>
  <el-main class="under-Header">
    <el-row>
      <el-col :span="24">
        <el-carousel
          trigger="click"
          class="home-Banner"
          arrow="always"
          autoplay
        >
          <el-carousel-item
            class="bannerList-Con"
            v-for="item in bannerList"
            :key="item.bannerId"
          >
            <figure class="bannerList-Item">
              <img :src="item.pic" alt="" />
              <figcaption class="bannerList-Type" v-if="item.showAdTag">
                <span :style="{ background: item.titleColor }"></span>
              </figcaption>
            </figure>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { getBanner } from "../../utils/http";
export default {
  data() {
    return {
      bannerList: [],
    };
  },
  created() {
    getBanner().then((res) => {
      if (res.data.code === 200) {
        this.bannerList = res.data.banners;
      }
    });
  },
};
</script>
<style lang="scss">
.under-Header {
  background: linear-gradient(#d53b33 30%, transparent 30%);
  @media screen and (max-width: 480px) {
    .home-Banner {
      height: 150px;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 640px) {
    .home-Banner {
      height: 200px;
    }
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    .home-Banner {
      height: 250px;
    }
  }
  @media screen and (min-width: 768px) {
    .home-Banner {
      height: 300px;
    }
  }
  .home-Banner {
    .el-carousel__container {
      height: 100%;
    }
    .el-carousel__item h3 {
      line-height: 150px;
      margin: 0;
      text-align: center;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
    //   幻灯片下标按钮样式
    .el-carousel__button {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .bannerList-Con {
      border-radius: 8px;
      overflow: hidden;
      .bannerList-Item {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
