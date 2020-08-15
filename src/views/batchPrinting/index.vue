<template>
  <div class="batch-printing-container">
    <div>
      <el-form ref="form" :model="seachForm" label-width="80px">
        <el-form-item label="资产类型" class="mr10">
          <el-cascader
            style="width:200px;"
            :options="this.$store.state.batchPrinting.assetsTypes"
            :props="{
                          checkStrictly: true,
                          value: 'id',
                          label: 'label'
                        }"
            filterable
            ref="refHandle"
            @change="handleChange2"
            v-model="seachForm.type"
            clearable
          ></el-cascader>
        </el-form-item>
      </el-form>
    </div>
    <!--操作按钮-->
    <div class="pd20 bgfff mb20">
      <div class="com-box-operation">
        <el-button type="primary" size="mini" @click="printing">批量打印</el-button>
      </div>
    </div>
    <div>
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="hostname" label="资产名称"></el-table-column>
        <el-table-column prop="type" label="资产类型"></el-table-column>
        <el-table-column prop="model" label="品牌型号"></el-table-column>
        <el-table-column prop="city" label="市区"></el-table-column>
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
    <!--打印预览弹窗-->
    <el-dialog title="打印预览" :visible.sync="dialogTableVisible">
      <printing-views :codePicList="ercodePcList"></printing-views>
    </el-dialog>
  </div>
</template> 
<script>
import { getAssetList, getAssetTypes } from "@/api/batchPrinting";
import PrintingViews from './components/PrintingViews'
export default {
  components:{
    PrintingViews
  },
  data() {
    return {
      loading: true,
      tableData: [],
      currentPage: 1,
      dialogTableVisible: false,
      seachForm: { type: "" },
      multipleSelection:[],
      ercodePcList:[],// 选中二维码列表
    };
  },
  mounted() {
    // 获取资产分类
    this.getAssetTypes();
    // 获取资产列表
    this.getAssetList();
  },
  methods: {
    printing() {
      if(this.multipleSelection.length==0){
         this.$message("最少需要选择一条数据");
         return false;
      }else{ 
        this.tableData.forEach(item=>{
          this.multipleSelection.forEach(ids=>{
            if(item.id == ids.id){
              this.ercodePcList.push(item.codeurl + "?" + Math.random());
            }
          })
        }) 
        this.dialogTableVisible = true;
      }
      
    },
    async getAssetList() {
      let param = {
        num: "",
        hostname: "",
        type: "",
        brand: "",
        model: "",
        beDate: "",
        endDate: "",
        status: "",
        pageNum: 1,
        pageSize: 10,
        organ: "",
        dept: "",
        suborgan: "",
        userid: "f759a7fd1dee44869434dc245bb5e3da"
      };
      const { data } = await getAssetList(param);
      if (data) {
        this.loading = false;
        this.tableData = data.list;
      }
    },

    getAssetTypes() {
      this.$store.dispatch("batchPrinting/getAssetTypes", { code: "ZCFL" });
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    handleChange2(val) {
      this.seachForm.type = val; 
    }
  }
};
</script>