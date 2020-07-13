<template>
  <div>
    {{ nickname }}
    {{ userId }}
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
import { getStatus, getLogout } from "../utils/http";
import { Message } from "element-ui";
export default {
  data() {
    return {
      nickname: "",
      userId: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    getStatus()
      .then((res) => {
        if (res.data.code === 200) {
          // 解决前置守卫不能获取钩子的问题
          let { userId, nickname } = res.data.profile;
          next((vm) => {
            vm.$store.commit("setUser", { userId, nickname });
          });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          Message({
            message: "请先登录！",
          });
          next("/login");
        }
      });
  },
  created() {
    this.nickname = this.$store.state.nickname;
    this.userId = this.$store.state.userId;
  },
  methods: {
    logout() {
      getLogout().then((res) => {
        if (res.data.code === 200) {
          this.nickname = "";
          this.userId = "";
          Message.success({
            message: "退出成功",
          });
        }
      });
    },
  },
};
</script>

<style></style>
