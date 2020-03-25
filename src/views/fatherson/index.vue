<style >
.wrap {
  margin: 20px;
}
</style>
<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="props/$emit">
        <method1 />
      </el-tab-pane>
      <el-tab-pane label="$emit/$on">
        <method2 />
      </el-tab-pane>
      <el-tab-pane label="update:PropName">
        <method3 />
      </el-tab-pane>
      <el-tab-pane label="vuex">
        <div>
          <p>写法1：</p>
           <method4 />
        </div>
        <div>
          <p>写法2：</p>
          <method41 />
        </div>
        <div>
          <p>action</p>
          <method42 />
        </div>
       
      </el-tab-pane>
      <el-tab-pane label="v-solt插槽">
        <method5/>
      </el-tab-pane>
      <el-tab-pane label="$attr/$listeners"></el-tab-pane>
      <el-tab-pane label="provide/inject"></el-tab-pane>
      <el-tab-pane label="$parent/$children/ref"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Method1 from "./method1";
import Method2 from "./method2";
import Method3 from "./method3";
import Method4 from "./method4";
import Method5 from "./method5";
import Method41 from "./method4/index1";
import Method42 from "./method4/index2";
export default {
  components: { Method1, Method2, Method3, Method4,Method41,Method42 ,Method5},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
