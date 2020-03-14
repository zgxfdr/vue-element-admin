<style lang="less" scoped>
.echarts-container {
  background: #fff;
  border-radius: 4px;
  .chart {
    padding: 30px 0;
  }
}
.dashboard-container {
  .box-info {
    background: #fff;
    border-radius: 4px;
    height: 450px;
    .chart {
      padding: 20px 0;
    }
  }
}
</style>
<template>
  <div class="dashboard-container">
    <el-row>
      <el-col>
        <div class="echarts-container">
          <line-chart :chart-data="lineChartData" :legend-list="lineLegend"></line-chart>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt20" style="height:500px;">
      <el-col :span="12">
        <div class="box-info">
          <todo-list></todo-list>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="box-info">
          <pie-chart :chart-data="pieChartData" :legend-list="pieLegend"></pie-chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LineChart from "./components/Echarts/LineChart";
import PieChart from "./components/Echarts/PieChart";
import TodoList from "./components/TodoList/Index";
const lineChartData = {
  actualData0: [100, 120, 161, 134, 105, 160, 165],
  actualData1: [120, 82, 91, 154, 162, 140, 145],
  actualData2: [290, 82, 91, 34, 22, 140, 105]
};
const pieChartData = [
  { value: 335, name: "老人" },
  { value: 310, name: "小孩" },
  { value: 234, name: "女性" },
  { value: 135, name: "男性" }
];

export default {
  components: {
    LineChart,
    PieChart,
    TodoList
  },
  data() {
    return {
      lineLegend: ["邮件营销", "联盟广告", "legend3"],
      pieLegend: ["老人", "小孩", "女性", "男性"],
      lineChartData: lineChartData,
      pieChartData: pieChartData
    };
  }
};
</script>