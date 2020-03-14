
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
    ,
    chartData: {
      type: Object,
      required: true
    },
    legendList:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      // handler(val) {
      //   console.log(val);
      //   this.setOptions(val)
      // }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      // 使用echarts的主题  第二个参数可以指定前面引入的主题
     // var chart = echarts.init(document.getElementById('main'), 'macarons');
      this.chart = echarts.init(this.$el, 'macarons');
   
      this.setOptions(this.chartData)
    },

    getSeries(){
        let arr = [];
        for(let i=0;i < this.legendList.length;i++){
          arr.push({
            name:this.legendList[i],
            type:'line',
            stack: '总量',
            data:this.chartData['actualData'+i]
          })
        }
        return arr;
    },
    setOptions(chartData) {
     let {expectedData, actualData } = chartData;
      this.chart.setOption({
        title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:this.legendList
    },
    grid: {
      top:"10%",
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
       
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    
    series: this.getSeries()
      })
    }
  }
}
</script>
