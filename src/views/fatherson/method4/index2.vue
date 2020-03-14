<template>
  <div  class="wrap">
    <h2>使用action异步改变状态</h2>
    <hr />
    <!-- <h3>{{$store.state.a.sayhi}}</h3> -->
    <h3>{{count}}</h3>
    <button @click="addAction">add</button>
    <button @click="reduceAction">reduce</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
import store from "@/store";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  }, 
  methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])

  },
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