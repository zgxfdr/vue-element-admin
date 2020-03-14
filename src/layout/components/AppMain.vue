<style lang="less" scoped>
.app-main {
  margin: 20px;
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

