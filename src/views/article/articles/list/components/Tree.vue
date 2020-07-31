<template>
  <div class="p20 b1 br4 bg-ffffff">
    <el-input class="mb10" placeholder="输入关键字进行过滤" v-model="filterText" clearable></el-input>
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      :highlight-current="true"
      :expand-on-click-node="false"
      ref="tree"
    >
      <div class="dfr-center w-100 pr10 h35 overflow-hidden" slot-scope="{ node, data }">
        <div class="flex1 h-100 dfr-center mr10 overflow-hidden" @click="selecte(data)">
          <div class="w-100 font14 text-overflow-ellipsis">{{ node.label || "--" }}</div>
        </div>
      </div>
    </el-tree>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TreeListArticlesArticle",
  data() {
    return {
      filterText: "",
      defaultProps: {
        label: "categoryname"
      }
    };
  },
  methods: {
    selecte(data) {
      if (data.id) {
        this.$emit("selecte", data);
      } else {
        this.$emit("selecte", {});
      }
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.categoryname.indexOf(value) !== -1;
    }
  }, 
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  computed: mapState({
    data: status => [
      { categoryname: "全部分类", children: status.article.classifyList }
    ]
  })
};
</script>