<template>
  <div>
    <el-container class="songList-Con">
      <el-header class="songList-Header" height="50px">
        <Header />
      </el-header>
      <el-main class="songList-List">
        <SongListItem />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import SongListItem from "../components/SongListItem/SongListItem.vue";
export default {
  components: {
    Header,
    SongListItem,
  },
};
</script>

<style lang="scss">
.songList-Con {
  width: 100%;
  .songList-Header {
    padding: 0 10px;
    font-size: 20px;
    line-height: 50px;
  }
}
</style>
