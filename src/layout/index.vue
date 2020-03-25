<style lang="less">
.app-layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  .app-sidenav {
    display: flex;
  }
  .app-layout {
    width: 100%;
    display: flex;
    flex: auto;
    flex-direction: column;
    background-color: #f1f1f1;
  }
}
</style>
<template>
  <div class="app-layout-container">
    <div class="app-sidenav">
      <sider-bar v-slot="scope">
        {{scope.test.begin}}
        <p style="color:#fff;font-size:18px;">hello</p>  
       <!-- <template #hello> <p  style="color:#fff;font-size:18px;">hello</p>  </template>
       <template #world> <p  style="color:#fff;font-size:18px;">world</p>  </template> -->
       </sider-bar>
      
    </div>
    <div class="app-layout">
      <div class="app-layout-header">
        <nav-bar /> 
      </div>
      <div class="app-layout-main">
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { AppMain, NavBar, SiderBar } from "./components";
export default {
  name: "Layout",
  components: {
    AppMain,
    SiderBar,
    NavBar 
  },
  data(){
    return{
      hello:"hello"
    }
  }
};
</script>

 
