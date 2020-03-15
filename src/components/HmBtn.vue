<template>
  <div class="btn" @click="fn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      //字传父 让父级组件触发事件
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  height: 50px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  background-color: #cc3300;
  margin: 20px;
  border-radius: 25px;
  color: aliceblue;
}
</style>
