<template>
	<div>
		<el-form :model="dialogForm" :rules="rules" ref="dialogForm" :label-width="formLabelWidth">
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="dialogForm.name" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="活动形式">
				<el-input type="textarea" v-model="dialogForm.desc"></el-input>
			</el-form-item>
			<el-form-item label="活动区域" prop="region">
				<el-select v-model="dialogForm.region" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="上传图片">
				<el-upload
					action="https://jsonplaceholder.typicode.com/posts/"
					list-type="picture-card"
					:on-preview="handlePictureCardPreview"
					:on-remove="handleRemove"
				>
					<i class="el-icon-plus"></i>
				</el-upload>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('dialogForm')">提交</el-button>
				<el-button @click="resetForm('dialogForm')">取消</el-button>
			</el-form-item>
		</el-form>
		<el-dialog :visible.sync="dialogVisible" :append-to-body="true">
			<img width="100%" :src="dialogImageUrl" alt />
		</el-dialog>
	</div>
</template>
<script>
export default {
	props: ["closeDialog", "editData"],
	data() {
		return {
			// 规则
			rules: {
				name: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				region: [
					{ required: true, message: '请选择活动区域', trigger: 'change' }
				]
			},
			// 表单
			dialogForm: {
				name: "",
				region: ""
			},
			dialogImageUrl: '',
			dialogVisible: false,
			formLabelWidth: "100px",

		}
	},
	mounted() {

	},
	methods: {
		// 上传图片
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},

		// 提交
		submitForm(formName) {
			this.$refs[formName].validate(async (valid) => {
				if (valid) {
					const data = await this.http.post('/sysuser/login', param);
					if (data) {

					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$emit("closeDialog");
			this.$refs[formName].resetFields();
		}
	}

}
</script>