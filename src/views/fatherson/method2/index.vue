<template>
  <div>
    <h3>我是method2</h3>
    <child2 />
  </div>
</template>
<script>
import Child2 from "../component/child2";
export default {
  components: {
    Child2
  },
  data() {
    return {
      message: "day day up!"
    };
  },
  methods: {
    changeMessage() {
      this.message = "good good stady!";
    }
  }
};
</script>