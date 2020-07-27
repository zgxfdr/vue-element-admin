<style lang="less" scoped>
.sider-bar {
  transition: all 0.5s;
  width: 200px;
  background-color: #fff;
  .el-menu {
    border-right: 0;
    .el-submenu__title .el-menu-item,
    .el-submenu__title,
    .el-submenu .el-submenu__title {
      height: 40px;
      line-height: 40px;
    }

    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: #e6f7ff;
      color: #1890ff;
      border-right: 3px solid #1890ff;
      i {
        color: #1890ff;
      }
    }
  }
  .logo-info {
    background-color: #01bcd4;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    flex: 1;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    align-items: center;

    .logo {
      color: #fff;
      font-size: 32px;
    }
    .name {
      font-size: 18px;
      color: #fff;
      margin-left: 8px;
      .hide {
        display: none;
      }
    }
  }
}
</style>

<template>
  <div class="sider-bar">
    <div class="logo-info">
      <i class="iconfont icon-smile logo"></i>
      <slot :test="test"></slot>
      <!-- <slot name="hello"></slot>
      <slot name="world"></slot>-->
      <router-link to="/" class="name">Cabin</router-link>
    </div>
    <div class="menu-info">
      <el-menu :router="true" :default-openeds="openeds" :default-active="$route.path">
        <template v-for="item in $router.options.routes">
          <template v-for="(items,index) in item.children">
            <!-- 一级有children -->
            <el-submenu v-if="items.children" :index="items.path" :key="index">
              <template slot="title">
                <i :class="items.icon"></i>
                <span slot="title">{{items.name}}</span>
              </template>
              <template v-for="(trem,i) in items.children">
                <!-- 二级有children -->
                <el-submenu v-if="trem.children" :key="i" :index="trem.path">
                  <template slot="title">
                    <i :class="trem.icon"></i>
                    <span slot="title">{{trem.name}}</span>
                  </template>
                  <template v-for="(value,idx) in trem.children">
                    <!-- 三级有children -->
                    <template v-if="value.children">
                      <el-submenu :index="value.path" :key="idx">
                        <span slot="title">{{value.name}}</span>
                        <el-menu-item
                          v-for="(v,k) in value.children"
                          :index="v.path"
                          :key="k"
                        >{{v.name}}</el-menu-item>
                      </el-submenu>
                    </template>
                    <!-- 三级无children -->
                    <el-menu-item v-else :index="value.path" :key="'else'+idx">
                      <template slot="title">
                        <i :class="trem.icon"></i>
                        <span slot="title">{{value.name}}</span>
                      </template>
                    </el-menu-item>
                  </template>
                </el-submenu>
                <!-- 二级无children -->
                <el-menu-item v-else :index="trem.path" :key="'else'+i">
                  <template slot="title">
                    <i :class="trem.icon"></i>
                    <span slot="title">{{trem.name}}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-submenu>
            <!-- 一级无children -->
            <el-menu-item v-else :index="items.path" :key="'else'+index">
              <template slot="title">
                <i :class="items.icon"></i>
                <span slot="title">{{items.name}}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openeds: ["0"],
      test: {
        begin: "begin"
      }
    };
  },
  created() {}
};
</script>

