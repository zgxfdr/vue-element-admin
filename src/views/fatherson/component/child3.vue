<style scoped>
.wrap {
  margin: 20px;
}
</style>
<template>
  <div>
    <div class="wrap">
      <div>我是child3子组件</div>
      <h3>子级的message:{{ message }}</h3>
      <input v-model="word" placeholder="输入文本父组件的message会改变" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {
      word: "hello"
    };
  },
  watch: {
    word: function(val) {
      this.$emit("update:message", val);
    }
  },
  methods: {
    changeMessage() {
      this.$emit("changeMessage");
    }
  }
};
</script>
