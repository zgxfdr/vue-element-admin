<template>
  <div  class="wrap">
    <h2>{{msg}}</h2>
    <hr />
    <h3>{{count}}</h3>
    <button @click="$store.commit('add')">add</button>
    <button @click="$store.commit('reduce')">reduce</button>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import store from "@/store";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  }, 
  // computed:{
  //    count(){
  //       return this.$store.state.count;
  //   }
  // }
  
  computed:{
    // 以下写法比较麻烦可以使用这个
    ...mapState(["count"]),
    // 在每次count 的值发生变化的时候，都会进行加100的操作
    // count(){
    //     return this.$store.getters.count;
    // }
}
};
</script>