<template>
  <div id="app">
    <router-view />
    <TabBar v-if="$route.meta.showTab" />
  </div>
</template>
<script>
import TabBar from "./components/TabBar/TabBar.vue";
// 引入iconfont字体
import "./utils/iconfont/iconfont.css";
export default {
  mounted() {},
  methods: {},
  components: {
    TabBar,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
}
</style>
