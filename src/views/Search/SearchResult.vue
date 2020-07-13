<template>
  <el-container>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :label="item.title"
        v-for="item in searchType"
        :key="item.id"
      >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
            <el-button style="float: right; padding: 3px 0;" type="text"
              >操作按钮</el-button
            >
          </div>
          <div
            v-for="(item2, index2) in resultList"
            :key="index2"
            class="text item"
          >
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>

<script>
import { getSearch } from "../../utils/http";
export default {
  data() {
    searchType: [
      {
        id: 1,
        title: "单曲",
        name: "songs",
      },
      {
        id: 2,
        title: "专辑",
        name: "albums",
      },
      {
        id: 3,
        title: "歌手",
        name: "artists",
      },
      {
        id: 4,
        title: "歌单",
        name: "playlists",
      },
    ];
    resultList: [];
  },
  created() {
    getSearch(1, "humanoid").then((res) => {
      if (res.data.code === 200) {
        this.resultList = res.data.result;
      }
    });
  },
};
</script>

<style></style>
