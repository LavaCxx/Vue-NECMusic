<template>
  <div class="home">
    <el-container class="home-Con">
      <SearchBar />
      <HomeBanner />
      <el-footer>
        <HomeSwiper />
      </el-footer>
    </el-container>
    <RecommendList :type="0" />
    <RecommendList :type="1" />
    <RecommendList :type="2" v-if="userId" />
  </div>
</template>

<script>
import SearchBar from "../components/Searchbar/Searchbar.vue";
import HomeBanner from "../components/HomeBanner/HomeBanner.vue";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper.vue";
import RecommendList from "../components/RecommendList/RecommendList.vue";
export default {
  data() {
    return {
      userId: "",
    };
  },
  created() {
    this.userId = this.$store.state.userId;
  },
  components: {
    SearchBar,
    HomeBanner,
    HomeSwiper,
    RecommendList,
  },
};
</script>
<style lang="scss">
.home {
  padding-bottom: 60px;
  .home-Con {
    padding-top: 80px;
  }
  .el-row {
    margin-bottom: 20px;
  }
}
</style>
