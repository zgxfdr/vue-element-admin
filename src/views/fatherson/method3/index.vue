<template>
  <div>
    <h3>我是method3</h3>
    <p>父组件的messgae随着子组件文本框的值改变：{{message}}</p>
    <child3 :message.sync="message" />
  </div>
</template>
<script>
import Child3 from "../component/child3";
export default {
  components: {
    Child3
  },
  data() {
    return {
      message: "day day up!"
    };
  },
  methods: {}
};
</script>