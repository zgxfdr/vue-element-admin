<template>
  <router-view :key="key" />
</template>


<script>
export default {
  name: "ArticlesArticle",
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>