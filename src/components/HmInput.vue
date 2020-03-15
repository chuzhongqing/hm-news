<template>
  <div class="hm-input">
    <input
      :type="type"
      :placeholder="placeholder"
      @input="inputFn"
      :class="{ success: status === 'success', error: status === 'error' }"
    />
    <div class="tips" v-show="status == 'error'">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  //   props: ["type", "placeholder"],
  props: {
    type: String,
    placeholder: String,
    rule: RegExp,
    msg: String
  },
  methods: {
    inputFn(e) {
      console.log(e.target.value);

      this.$emit("input", e.target.value);
      this.validate(e.target.value);
    },
    validate(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = "success";
          return true;
        } else {
          this.status = "error";
          return false;
        }
      }
    }
  },

  data() {
    return { status: "" };
  }
};
</script>

<style lang="less" scoped>
.hm-input {
  height: 50px;
  margin: 0 20px;
  input {
    border: none;
    font-size: 18px;
    border-bottom: 1px solid #cccccc;
    line-height: 18px;
    width: 100%;
    outline: none;
  }
  .success {
    border-color: green;
  }
  .error {
    border-color: red;
  }

  .tips {
    color: red;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
}
</style>
