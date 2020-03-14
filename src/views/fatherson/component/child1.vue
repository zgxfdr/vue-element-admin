<style scoped>
.wrap {
  margin: 20px;
}
</style>
<template>
  <div>
    <div class="wrap">
      <div>我是child1子组件</div>
      <h3>method1 tell me：{{ message }}</h3>
    </div>

    <div class="wrap">
      <button @click="changeMessage">child1 触发$emit父组件method1的changeMessage方法</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {};
  },
  methods: {
    changeMessage() {
      this.$emit("changeMessage");
    }
  }
};
</script>
