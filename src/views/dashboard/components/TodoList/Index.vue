<style lang="less">
.todolist-container {
  background: #fff;
  border-radius: 4px;
  .wrap {
    padding: 15px;
  }
  .title {
    font-size: 22px;
    text-align: center;
    margin: 0 auto;
  }
  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .todo-list {
    height: 230px;
    overflow-y: auto;
    .todo-item {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      .todo-name {
        margin-left: 20px;
        font-size: 16px;
        width: 100%;
        display: inline-block;
      }
      .todo-edit {
        @extend .todo-name;
        position: absolute;
        width: 88%;
        top: 0;
        left: 14px;
      }
      .todo-completed {
        @extend .todo-name;
        text-decoration: line-through;
        color: #d9d9d9;
      }
    }
  }
  .status-box {
    .el-button {
      &.isactive {
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: 0;
      }
    }
  }
}
</style>
<template>
  <div class="todolist-container">
    <div class="wrap">
      <h3 class="title">todolist</h3>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-row>
            <el-col :span="19">
              <el-input
                type="text"
                placeholder="Do what you need to do !"
                v-model="dothings"
                @keyup.enter.native="addThings"
              ></el-input>
            </el-col>
            <el-col :span="2">
              <el-button class="ml10" type="primary" @click="addThings">添加</el-button>
            </el-col>
          </el-row>
        </div>
        <Item
          :todosList="todosList"
          :isEdit="isEdit"
          :editIndex="editIndex"
          @editItem="editItem"
          @chkChange="chkChange"
          @todoListBlur="todoListBlur"
          @delItem="delItem"
        ></Item>
        <div class="card-bottom">
          <span>{{activeCount}} item left</span>
          <div class="status-box">
            <el-button
              size="small"
              v-for="(status,index) in todoStatus"
              :key="index"
              :class="chkStatusIndex == index?'isactive':''"
              @click.native="chkStatus(index)"
            >{{status}}</el-button>
          </div>
          <a href="javascript:void(0);" @click="clearCompleted">Clear completed</a>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import Item from "./Item";
export default {
  components: { Item },
  data() {
    return {
      checked: false,
      dothings: "",
      todoList: [],
      todosList: [],
      todoStatus: ["All", "Active", "Completed"],
      chkStatusIndex: 0,
      editIndex: 0,
      isEdit: false
    };
  },
  created() {
    this.todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    if (this.todoList) {
      this.todosList = this.todoList;
    }
  },
  methods: {
    // 添加任务
    addThings() {
      if (this.dothings) {
        this.todoList.push({ checked: false, name: this.dothings.trim() });
        this.todoList.map((item, index) => {
          item.index = index;
        });
        this.todosList = this.todoList;
        this.filterToDoList(this.chkStatusIndex);
        this.dothings = "";
      } else {
        this.$message({
          message: "任务不能为空",
          type: "warning"
        });
      }
    },

    // 编辑任务
    editItem(index) {
      this.isEdit = true;
      this.editIndex = index;
    },
    // 删除任务
    delItem(index) {
      this.todoList.forEach((value, i) => {
        if (value.index == index) {
          this.todoList.splice(i, 1);
        }
      });
      this.filterToDoList(this.chkStatusIndex);
    },
    // 切换状态
    chkStatus(index) {
      this.chkStatusIndex = index;
      this.filterToDoList(index);
    },
    // 筛选方法
    filterToDoList(index) {
      if (index == 0) {
        this.todosList = this.todoList;
      } else if (index == 1) {
        this.todosList = this.todoList.filter(item => item.checked == false);
      } else {
        this.todosList = this.todoList.filter(item => item.checked == true);
      }
      this.saveTodoList();
    },
    // 改变任务状态
    chkChange(obj) {
      const { status, index } = obj;
      this.todoList = this.todoList.map(item => {
        if (item.index == index) {
          item.checked = status;
        }
        return item;
      });
      if (status) {
        this.$message({
          message: "恭喜你完成一项新任务啦！要再接再厉 ^_^",
          type: "success"
        });
      }

      this.filterToDoList(this.chkStatusIndex);
    },

    // 清空已完成
    clearCompleted() {
      this.todoList.forEach((value, i) => {
        if (value.checked) {
          this.todoList.splice(i, 1);
          this.filterToDoList(this.chkStatusIndex);
        }
      });
    },
    // 存储任务
    saveTodoList() {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      this.todoList = JSON.parse(localStorage.getItem("todoList"));
    },
    // 编辑时失去焦点
    todoListBlur(obj) {
      const { $event, name, index } = obj;
      if (this.isEdit) {
        this.isEdit = !this.isEdit;
      }
      this.todoList.map(item => {
        if (item.index == index) {
          item.name = name;
        }
        return item;
      });
      this.filterToDoList(this.chkStatusIndex);
    }
  },
  computed: {
    activeCount: function() {
      return this.todoList.filter(item => item.checked == false).length;
    }
  },
  watch: {
    todosList(newData, oldData) {
      this.todosList = newData;
    }
  }
};
</script>
