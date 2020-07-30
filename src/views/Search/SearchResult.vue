<template>
  <div class="result-Con">
    <el-container>
      <el-main>
        <el-tabs @tab-click="changeType" tab-position="top" v-model="tabName">
          <el-tab-pane
            v-for="item in searchType"
            :key="item.id"
            :label="item.title"
            :name="item.name"
          >
            <ul class="result-List">
              <li
                class="result-Item"
                v-for="item2 in resultList"
                :key="item2.id"
              >
                <el-row :gutter="20">
                  <el-col :span="18">
                    <p class="songName">{{ item2.name }}</p>
                    <p class="artists">{{ item2.artists[0].name }}</p>
                  </el-col>
                  <el-col :span="6"></el-col>
                </el-row>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getSearch } from "../../utils/http";
export default {
  data() {
    return {
      searchType: [
        {
          id: 1,
          title: "单曲",
          name: "songs",
        },
        {
          id: 10,
          title: "专辑",
          name: "albums",
        },
        {
          id: 100,
          title: "歌手",
          name: "artists",
        },
        {
          id: 1000,
          title: "歌单",
          name: "playlists",
        },
      ],
      tabName: "songs",
      resultList: [],
    };
  },
  created() {
    this.getResult(1, "humanoid");
  },
  methods: {
    getResult(type, keywords) {
      getSearch(type, keywords).then((res) => {
        if (res.data.code === 200) {
          if (type == 100) {
            this.resultList = res.data.result.artists;
          } else {
            this.resultList = Object.values(res.data.result)[0];
          }
          console.log(this.resultList);
        }
      });
    },
    changeType(tab) {
      this.tabName = this.searchType[tab.index].name;
      console.log(this.searchType[tab.index].id);
      this.getResult(this.searchType[tab.index].id, "humanoid");
    },
  },
};
</script>

<style lang="scss">
.result-Con {
  .el-tabs {
    width: 100%;
    box-sizing: border-box;
    .result-List {
      .result-Item {
        height: 40px;
        padding: 10px 0;
        border-bottom: 1px solid #333;
      }
    }
    .el-tabs__item.is-top:nth-child(2) {
      padding-left: 20px;
    }
  }
}
</style>
