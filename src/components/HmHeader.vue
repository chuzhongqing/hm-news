<template>
  <div class="header">
    <div class="left" @click="$router.back()">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="center"><slot></slot></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 40px;
  line-height: 40px;
  display: flex;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  .left,
  .right {
    width: 40px;
  }
  .center {
    flex: 1;
    font-weight: 700;
    font-size: 18px;
  }
}
</style>
