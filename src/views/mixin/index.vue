<style scoped>
.blue {
  color: blue;
}
.red {
  color: red;
}
</style>
<template>
  <div>
    <h3>混入</h3>
    <p>num:{{ num }}</p>
    <P>
      <button @click="add">增加数量</button>
    </P>
    <h3>computed计算属性</h3>
    <p :class="{blue:isBlue}" :style="{fontSize:fs}">{{myName}}</p>
    <button @click="changeName">点击改变myName</button>
    <p>我的myMixi组件修改的title属性值：{{isamtitle}}</p>
    <myMixin :title.sync="isamtitle"></myMixin>
  </div>
</template>
<script>
import myMixin from "./component/child";
import * as Raven from "raven-js"; // 首先引入
export default {
  components: { myMixin },
  mixins: [myMixin],
  data() {
    return {
      isamtitle: "hello",
      fs: "20px",
      isBlue: true,
      num: 1,
      message: "goodbye",
      firstName: "shaoshan",
      lastName: "zeng"
    };
  },
  computed: {
    myName() {
      return this.firstName + " " + this.lastName;
    }
  },
  watch: {
    lastName(val) {
      this.lastName = val;
    }
  },
  created: function() {
    console.log(this.$data);

    // => { message: "goodbye", foo: "abc", bar: "def" }
  },
  mounted() {
    // this.foo1();
    // this.bar();
    // this.conflicting();
    this.err();
  },
  methods: {
    err() {
      try {
      } catch (e) {
        console.log(e);
        Sentry.captureException(e);
      }
    },
    changeName() {
      this.lastName = "li";
    },
    add: function() {
      this.num++;
    },
    bar: function() {
      console.log("bar");
    },
    conflicting: function() {
      console.log("from self");
    }
  }
};
</script>