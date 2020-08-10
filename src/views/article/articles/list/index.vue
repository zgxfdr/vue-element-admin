<style lang="less">
.pd20 {
}
.bgfff {
  background: #fff;
}
.com-box-operation {
  border: 1px solid #f1f1f1;
  padding: 20px;
  border-radius: 4px;
}
.article-list-container {
}
</style>
<template>
  <div class="article-list-container">
    <!--操作按钮-->
    <div class="pd20 bgfff mb20">
      <div class="com-box-operation">
        <el-button
          type="primary"
          size="mini"
          @click="$router.push({path: `/article/articles/addOrUpdate`})"
        >添加</el-button>
      </div>
    </div>
    <!--主体-->
    <div>
      <el-table    v-loading="loading" :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="province" label="省份"></el-table-column>
        <el-table-column prop="city" label="市区"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="fr mt20"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

var wsTask;
var reConnect;

const heartCheck = {
  timeout: 3 * 1000,
  timer: null,
  serverTimer: null,
  reset() {
    this.timer && clearTimeout(this.timer);
    this.serverTimer && clearTimeout(this.serverTimer);
  },
  start(ws) {
    this.reset();
    this.timer = setTimeout(() => {
      this.serverTimer = setTimeout(() => {
        // 如果超过一定时间还没响应(响应后触发重置)，说明后端断开了
        ws && ws.close();
      }, this.timeout);
    }, this.timeout);
  },
};


export default {
  data() {
    return {
         // websocket地址
      wsURL: 'ws://192.168.0.150:8085/websocket/',
      // websocket实例
      socket: null,
      // 连接失败不进行重连
      lockReconnect: false,
      // 最大重连次数，若连接失败
      maxReconnect: 5,

      loading:true,
      currentPage: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],

      // 筛选参数
      options:{

      }

    };
  },
  
  mounted(){

    this.initWebSocket();

    setTimeout(() => { 
      this.loading = false;
    }, 2000);
  },
  computed: {
    // ...mapState({
    //   ywtjList: (state) => state.reception.orderList,
    // })
  },
  methods: {

     // 重连
    reconnect() {
      console.log("尝试重连");
      if (this.lockReconnect || this.maxReconnect <= 0) {
        return;
      }
      setTimeout(() => {
        this.maxReconnect--; // 不做限制 连不上一直重连
        this.initWebSocket();
      }, 60 * 1000);
    },
 
    // 初始化websocket
    initWebSocket() {
      try {
        if ("WebSocket" in window) {
          this.socket = new WebSocket(this.wsURL+localStorage.getItem('access-user').id);
        } else {
          console.log("您的浏览器不支持websocket");
        }
        this.socket.onopen = this.websocketonopen;
        this.socket.onerror = this.websocketonerror;
        this.socket.onmessage = this.websocketonmessage;
        this.socket.onclose = this.websocketclose;
      } catch (e) {
        this.reconnect();
      }
    },

    // WebSocket连接成功
    websocketonopen() {
      console.log("WebSocket连接成功", this.socket.readyState);
      heartCheck.start(this.socket);
      
    },

    // WebSocket连接发生错误
    websocketonerror(e) {
      console.log("WebSocket连接发生错误", e);
      this.reconnect();
    },

    // WebSocket连接接收信息
    websocketonmessage({ data }) { 
      console.log("链接接受信息");
      
      if(data){
        // 接受到信息后要执行的内容
      }
     
      heartCheck.start(this.socket);
    },

    // WebSocket连接关闭
    websocketclose(e) {
      console.log("connection closed (" + e.code + ")");
      this.reconnect();
    },
    // WebSocket设置
    websocketsend() {},

    
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>