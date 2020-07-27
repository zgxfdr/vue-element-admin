<template>
  <div>
    <p>count:{{count}}</p>
    <button @click="add">+</button>
  </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      // this.$store.commit("user/SET_COUNT", { addcount: "33" });
      // this.$store.dispatch("user/addCount");
      this.add1();
      console.log(this.$store.getters.count);
    },

    ...mapMutations({
      add1: "user/SET_COUNT"
    })
  },

  computed: {
    count() {
      return this.$store.state.user.count;
    }
  }
  //   computed:mapState({
  //       count:state=>state.user.count
  //   })
};
</script>