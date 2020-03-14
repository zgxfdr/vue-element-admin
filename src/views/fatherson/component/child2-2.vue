<template>
  <div>
    <h3>child2-2组件</h3>
    <p>我的兄弟组件say:{{age}}</p>
  </div>
</template>
<script>
import bus from "./bus";
export default {
  data() {
    return {
      age: ""
    };
  },
  mounted() {
    bus.$on("data-age", age => {
      this.age = age;
    });
  }
};
</script>