<style scoped>
.wrap {
  margin: 20px;
}
</style>
<template>
  <div>
    <div class="wrap">
      <div>我是child2子组件</div>
      <child1 />
      <child2 />
    </div>
  </div>
</template>

<script>
import child1 from "./child2-1";
import child2 from "./child2-2";
export default {
  components: { child1, child2 },

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
