<style lang="less" scoped>
.nav-bar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;
  background-color: #01bcd4;
  .left-info {
    .left-info-list {
      .left-info-item {
        display: inline-block;
        padding: 0 15px;
        i {
          line-height: 60px;
          color: #fff;
        }
        &:hover {
          background-color: #01b2c9;
        }
      }
    }
  }
  .right-info {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .search-box.search-transition {
      width: 200px;
      display: block;
      transition: width 0.5s;
    }
    .el-icon-search {
      color: #fff;
      font-size: 20px;
      margin-right: 12px;
      cursor: pointer;
    }
    .search-box {
      margin-right: 10px;
      transition: width 0.5s;
      display: none;
      width: 0;
    }
    .el-dropdown-link {
      display: flex;
      align-items: center;
    }
    .header-photo {
      border-radius: 50%;
      font-size: 30px;
      color: #ddd;
      margin-right: 5px;
    }
    .user-name {
      color: #fff;
      height: 60px;
      line-height: 60px;
      padding: 0 10px;
      cursor: pointer;
      &:hover {
        background-color: #01b2c9;
      }
    }
  }
}
</style>
<template>
  <div class="nav-bar">
    <ul class="left-info">
      <li class="left-info-list">
        <a href="javascript:void(0);" class="left-info-item" @click="isCollapse">
          <i class="iconfont icon-shrink"></i>
        </a>
      </li>
    </ul>
    <breadcrumb></breadcrumb>
    <div class="right-info">
      <i class="el-icon-search" @click="showSearchBox"></i>
      <div class="search-box" :class="isShow?'search-transition':''">
        <el-input placeholder="请输入内容" v-model="keyword"></el-input>
      </div>
      <el-dropdown @command="logout">
        <div class="el-dropdown-link">
          <i class="iconfont icon-smile1 header-photo"></i>
          <span class="user-name">
            shaoshan
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>


<script>
import Cookies from "js-cookie";
import Breadcrumb from "./Breadcrumb";
export default {
  components: { Breadcrumb },
  data() {
    return {
      keyword: "",
      isShow: false
    };
  },
  methods: {
    // 伸缩左侧导航菜单
    isCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$store.dispatch("user/checkoutCollapse", this.isCollapse);
      if (!this.isCollapse) {
        this.$store.commit("user/SET_SIDEWIDTH", "64px");
      } else {
        this.$store.commit("user/SET_SIDEWIDTH", "200px");
      }
    },

    // 点击搜素
    showSearchBox() {
      this.isShow = !this.isShow;
    },
    // 退出登录
    logout() {
      this.$confirm("是否确定退出系统?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => { 
          console.log("退出登录");
          this.$router.push({ path: "/login" });
        })
        .catch(() => {
          console.log("已取消");
        });
    }
  }
};
</script>

