<style scoped>
.wrap {
  margin: 20px;
}
</style>
<template>
  <div>
    <div class="wrap">
      <div>我是child子组件</div>
      <h3>父组件给我传值：{{ message }},{{ meSsages }}</h3>
    </div>

    <div class="wrap">
      <button @click="sendToParent">
        子组件$emit向父组件派发属性和方法
      </button>
    </div>

    <div class="wrap">
      <button @click="preBtn">上一页</button>
      <!-- <text>{{ curPage }}</text> -->
      <button @click="nextBtn">下一页</button>
    </div>
  </div>
</template>

<script> 
export default {
  props: ["message", "meSsages", "fatherMethod"],
  data() {
    return {
      helloParant: "我是子组件的helloParant,父组件根据$refs获取我的信息",
      helloParant1: "我是子组件的helloParant,父组件根据$children获取我的信息",
      msg: "我是子组件通过$emit派发传给父组件的值",
      curPage: 1
    };
  },
  methods: {
    preBtn() {
      if (this.curPage > 1 && this.curPage <= 10) {
        this.curPage--;
        this.$emit("listencurpage", this.curPage);
      }
    },
    nextBtn() {
      if (this.curPage < 10 && this.curPage > 0) {
        this.curPage++;
        this.$emit("listencurpage", this.curPage); 
      }
    },
    childDo() {
      this.fatherMethod();
      setTimeout(() => {
        this.$parent.childSay = "过一秒使用$parant改变父组件中childSay的值";
      }, 1000);
    },

    childDo1() {
      this.$parent.fatherMethod();
      setTimeout(() => {
        this.$parent.childSay1 = "过一秒使用$parant改变父组件中childSay的值";
      }, 1000);
    },

    sendToParent() {
      this.$emit("sendMsg", this.msg);
      this.$emit("getMethod1");
    }
  }
};
</script>
