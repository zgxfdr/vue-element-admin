<template>
  <div class="todo-list">
    <div v-for="(item,index) in todosList" :key="index" class="todo-item pr">
      <el-checkbox v-model="item.checked" @change.native="chkChange(item.checked,item.index)"></el-checkbox>
      <div
        class="todo-name"
        :class="item.checked?'todo-completed':''"
        @dblclick="!item.checked?editItem(item.index):''"
      >
        <span class="ml15">{{item.name}}</span>
      </div>
      <el-input
        type="text"
        class="todo-edit"
        v-model="item.name"
        v-show="isEdit && (editIndex == item.index)"
        :autofocus="isEdit && (editIndex == item.index)"
        @keyup.enter.native="todoListBlur($event,item.name,item.index)"
        @blur.native.capture="todoListBlur($event,item.name,item.index)"
      />
      <el-button type="text" class="fr" @click="delItem(item.index)">delete</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todosList: {
      type: Array,
      required: true
    },
    isEdit: {
      type: Boolean,
      required: true
    },
    editIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
    };
  },

  methods: {
   
    chkChange(status, index) {
      let obj = {
        status: status,
        index: index
      };
      this.$emit("chkChange", obj);
    },
    editItem(index) {
     this.$emit("editItem",index);
    },
    todoListBlur($event, name, index) {
      let obj = {
        $event: $event,
        name: name,
        index: index
      };
      this.$emit("todoListBlur", obj);
    },
    delItem(index) {
      this.$emit("delItem", index);
    }
  }
};
</script>