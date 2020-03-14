<script>
// 用于重定向
// 清除 history替换成根路径
export default {
  created() {
    console.log(this.$route);
    const { params, query } = this.$route;
    this.$router.replact({ path: "/" + path, query });
  },
  render: function(h) {
    return h(); // warning message
  }
};
</script>

