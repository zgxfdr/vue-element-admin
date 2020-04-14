<style scoped lang="less">
</style>
<template>
	<div class="set-container">
		<div class="set-header">
			<el-form :inline="true" :model="form" label-width="100px" class="demo-form-inline">
				<el-form-item label="审批人">
					<el-input v-model="form.user" placeholder="审批人"></el-input>
				</el-form-item>
				<el-form-item label="活动区域">
					<el-select v-model="form.region" placeholder="活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">查询</el-button>
					<el-button type="success" @click="add">添加</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="set-main">
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column prop="date" label="日期" width="180"></el-table-column>
				<el-table-column prop="name" label="姓名" width="180"></el-table-column>
				<el-table-column prop="address" label="地址"></el-table-column>
				<el-table-column prop="address" label="操作">
					<template slot-scope="scope">
						<el-button @click="editItem(scope.row)" type="primary" size="mini">修改</el-button>
						<el-button @click="delItem(scope.row.id)" type="danger" size="mini">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="mt15 ta-r">
				<el-pagination
					background
					@current-change="handleCurrentChange"
					:current-page.sync="currentPage"
					:page-size="pageSize"
					layout="total, prev, pager, next, jumper"
					:total="total"
				></el-pagination>
			</div>
		</div>
		<!-- 添加 -->
		<el-dialog
			:title="editTitle"
			:visible.sync="dialogFormVisible"
			:close-on-click-modal="false"
			:before-close="handleClose"
		>
			<Dialog @closeDialog="closeDialog" :editData="editData"></Dialog>
		</el-dialog>
	</div>
</template>
<script>
import Dialog from './components/dialog'
export default {
	components: { Dialog },
	data() {
		return {
			dialogFormVisible: false,
			form: {
				user: '',
				region: ''
			},
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}],
			// 分页
			total: 100,
			pageNum: 1,
			pageSize: 10,
            currentPage: 1,
            // 编辑内容
            editData:{},
            editTitle:"添加"
		}
	},
	mounted() {

	},
	methods: {
		// 关闭弹窗
		closeDialog() {
			this.dialogFormVisible = false;
		},
		handleClose(done) {
			done();
		},
		// 分页
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
		// 查询
		onSubmit() {

		},
		// 修改
		editItem(row) {
			this.dialogFormVisible = true;
            this.editData = row;
            this.editTitle="修改";
		},

		// 删除
		async delItem(id) {
			const data = await this.http.get('/sysuser/login', id);
			if (data) {
                this.$message("删除成功");
			}
		},
		// 添加表单
		add() {
            this.dialogFormVisible = true;
            this.editTitle="添加";
            this.editData={};
		}
	}
}
</script>