<template>
  <div class="hm-login">
    <HmHeader>登录</HmHeader>
    <HmLogo></HmLogo>
    <HmInput
      type="text"
      placeholder="请输入用户名"
      :rule="/^1\d{4,10}$/"
      msg="用户名格式错误"
      v-model="username"
      ref="username"
    ></HmInput>
    <HmInput
      type="password"
      placeholder="请输入密码"
      :rule="/^\d{3,12}$/"
      msg="密码格式错误"
      v-model="password"
      ref="password"
    ></HmInput>
    <HmBtn @click="fn">登录</HmBtn>
  </div>
</template>

<script>
export default {
  data() {
    return { password: "", username: "" };
  },
  methods: {
    fn() {
      console.log(this.$refs.username.validate(this.username));
      console.log(this.$refs.password.validate(this.password));
      console.log(this.password);
      //账户密码格式不正确不发请求
      if (
        !this.$refs.username.validate(this.username) ||
        !this.$refs.password.validate(this.password)
      ) {
        return;
      }
      if (this)
        this.$axios({
          method: "post",
          url: "/login",
          data: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          console.log(res.data);
          if (res.data.statusCode == 200) {
            this.$router.push("/user");
          } else {
            this.$toast("用户名或密码错误");
          }
        });
    }
  }
};
</script>

<style></style>
