<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {};
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
