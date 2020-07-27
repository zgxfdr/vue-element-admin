<style lang="less" scoped>
.app-main {
  margin: 15px;
  padding:15px;
  background: #fff;
  height:100vh;
  border-radius: 8px;
  transition: margin-left 0.2s linear;
}
</style>

<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "app-main",
  data() {
    return {};
  }
};
</script>

