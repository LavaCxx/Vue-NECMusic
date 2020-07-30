<template>
  <div>
    手机号：<el-input v-model="phone" /> 密码：<el-input
      type="password"
      v-model="password"
    />
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { getLogin } from "../utils/http";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    login() {
      let that = this;
      getLogin(that.phone, that.password).then((res) => {
        if (res.data.code === 200) {
          Message.success({
            message: "登录成功！",
          });
          that.$router.push({ path: "/account" });
        }
      });
    },
  },
};
</script>

<style></style>
