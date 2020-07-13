<template>
  <el-container class="tabBar">
    <el-row>
      <el-col class="tabBar-Con" v-for="item in tabBarList" :key="item.id">
        <router-link :to="item.link">
          <figure class="tabBar-Item">
            <i class="iconfont" v-html="item.icon"></i>
            <figcaption class="tabBar-title">
              <span>{{ item.title }}</span>
            </figcaption>
          </figure>
        </router-link>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      tabBarList: [
        {
          id: 0,
          title: "发现",
          icon: "&#xe60a;",
          link: "/home",
        },
        {
          id: 1,
          title: "视频",
          icon: "&#xe61d;",
          link: "/video",
        },
        {
          id: 2,
          title: "我的",
          icon: "&#xe619;",
          link: "/my",
        },
        {
          id: 3,
          title: "云村",
          icon: "&#xe61c;",
          link: "/hotwall",
        },
        {
          id: 4,
          title: "帐号",
          icon: "&#xe62e;",
          link: "/account",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #959595;
}
.tabBar {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #f6f6f6;
  z-index: 10;
  .el-row {
    width: 100%;
    margin-bottom: 0;
    padding: 10px 0;
    .tabBar-Con {
      width: 20%;
      .tabBar-Item {
        text-align: center;
        .iconfont {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
