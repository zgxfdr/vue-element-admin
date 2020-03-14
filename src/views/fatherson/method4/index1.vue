<template>
  <div class="wrap">
    <h2>不想使用@click="$store.commit(xxx)"，像调用方法一样@click="xxx"</h2>
    <hr />
    <h3>{{count}}</h3>
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex';
import store from "@/store";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  }, 
  methods:mapMutations(['add','reduce']),
//   computed:mapState({
//         count:state=>state.count
//  })
//  computed:mapState["count"]
computed:{
    //   ...mapState(["count"]),// 多个state的情况
      ...mapGetters(["count"])
    
}
};
</script>