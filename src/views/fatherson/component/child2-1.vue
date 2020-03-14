<template>
  <div>
    <h3>child2-1组件</h3>
    <button @click="send">我要告诉兄弟组件我的年龄。</button>
  </div>
</template>
<script>
import bus from "./bus";
export default {
  data() {
    return { age: "26" };
  },
  methods: {
    send() {
      bus.$emit("data-age", `你好啊兄弟，我的年龄是${this.age}`);
    }
  }
};
</script>