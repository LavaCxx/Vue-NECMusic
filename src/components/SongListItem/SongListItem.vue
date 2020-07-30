<template>
  <div>
    <div class="songList-Info">
      <el-row :gutter="20">
        <el-col class="songList-Pic" :span="10"
          ><el-image :src="songListData.coverImgUrl"></el-image
        ></el-col>
        <el-col class="songList-Title" :span="14"
          ><p>{{ songListData.name }}</p></el-col
        >
      </el-row>
    </div>
    <el-card class="songItem-Con">
      <div slot="header" class="songItem-PlayAll">
        <span><i class="iconfont">&#xe62f;</i>全部播放</span>
      </div>
      <el-row
        :gutter="20"
        v-for="(item, index) in songListData.tracks"
        :key="item.id"
        class="songItem-List"
      >
        <el-col :span="2"
          ><span class="songItem-Num">{{ index }}</span></el-col
        >
        <el-col :span="19"
          ><p class="songItem-Name">{{ item.al.name }}</p>
          <p class="songItem-Artist">{{ item.ar[0].name }}</p></el-col
        >
        <el-col :span="3"
          ><i class="songItem-More iconfont">&#xe670;</i></el-col
        >
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getSongListDetail } from "../../utils/http";
export default {
  data() {
    return { songListId: "", songListData: [] };
  },
  created() {
    this.songListId = this.$route.params.id;
    this.getDetail();
  },
  methods: {
    getDetail() {
      getSongListDetail(this.songListId).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          this.songListData = res.data.playlist;
          console.log(this.songListData);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.songList-Info {
  margin-bottom: 20px;
  .songList-Pic {
    .el-image__inner {
      border-radius: 7px;
    }
  }
  .songList-Title {
    p {
      font-size: 22px;
      font-weight: bold;
    }
  }
}
.songItem-Con {
  .songItem-PlayAll {
    .iconfont {
      font-size: 20px;
      margin-right: 5px;
      line-height: 24px;
    }
    span {
      line-height: 24px;
    }
  }
  .songItem-List {
    margin: 5px 0;
    padding: 5px 0;
    .songItem-Num {
      line-height: 48px;
      color: #818181;
    }
    .songItem-Name {
      font-size: 20px;
    }
    .songItem-Artist {
      font-size: 15px;
      color: #818181;
    }
    .songItem-More {
      line-height: 48px;
    }
  }
}
</style>
