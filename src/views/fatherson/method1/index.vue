<template>
  <div>
    <h3>我是method1</h3>
    <child1 :message="message" @changeMessage="changeMessage" />
  </div>
</template>
<script>
import Child1 from "../component/child1";
export default {
  components: {
    Child1
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