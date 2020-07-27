<style lang="less" scoped>
.login-container {
<<<<<<< HEAD
  background: #fff;
  .login-left-box {
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/images/shaoshan.png");
    background-size: cover;
    box-sizing: border-box;
  }
  .login-right-box {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    margin-top: 20%;
    text-align: center;
    .login-info {
      width: 500px;
      .title-box {
        font-size: 32px;
        font-weight: lighter;
        color: #666;
        margin-bottom: 20px;
      }
      .form-box {
        margin: 10px 100px;
      }
      .sub-box {
        text-align: left;
        margin-bottom: 15px;
        .btn-link {
          float: right;
          font-size: 14px;
          color: #66b1ff;
          text-decoration: none;
        }
      }
      .btn-box {
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12">
        <div class="login-left-box"></div>
      </el-col>
      <el-col :span="12">
        <div class="login-right-box">
          <div class="login-info">
            <h3 class="title-box">Welcome to my cabin</h3>
            <el-form
              :model="loginForm"
              :rules="loginRules"
              ref="loginForm"
              label-width="0"
              class="form-box"
            >
              <el-form-item prop="email">
                <el-input
                  placeholder="邮箱"
                  prefix-icon="el-icon-user"
                  v-model="loginForm.email"
                  class="input-box"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  placeholder="密码"
                  prefix-icon="el-icon-lock"
                  show-password
                  v-model="loginForm.password"
                  class="input-box"
                ></el-input>
              </el-form-item>
              <div class="sub-box">
                <el-checkbox v-model="loginForm.rememberpwd">记住密码</el-checkbox>
                <router-link to="/register" class="btn-link">注册</router-link>
              </div>
              <el-button type="primary" class="btn-box" @click="submitForm('loginForm')">登录</el-button>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { login, getInfo } from "@/api/user.js";
import md5 from "md5";
export default {
  data() {
    return {
      loginForm: { email: "", password: "", rememberpwd: false },
      loginRules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度不能小于6位", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    // 获取邮箱密码
    this.getAccountInfo();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let param = {
            username: "2001",
            password: md5("ah6666")
          };
          const data = await this.http.post("/sysuser/login", param);
          console.log(data);
          if (data) {
            this.$router.replace({ path: "/" });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getAccountInfo() {
      if (localStorage.getItem("accountInfo")) {
        let account = JSON.parse(localStorage.getItem("accountInfo"));
        this.loginForm = account;
      }
    }
  }
=======
	background: #fff;
	.login-left-box {
		width: 100%;
		height: 100vh;
		background-image: url('../../assets/images/shaoshan.png');
		background-size: cover;
		box-sizing: border-box;
	}
	.login-right-box {
		display: -webkit-flex;
		display: flex;
		justify-content: center;
		margin-top: 20%;
		text-align: center;
		.login-info {
			width: 500px;
			.title-box {
				font-size: 32px;
				font-weight: lighter;
				color: #666;
				margin-bottom: 20px;
			}
			.form-box {
				margin: 10px 100px;
			}
			.sub-box {
				text-align: left;
				margin-bottom: 15px;
				.btn-link {
					float: right;
					font-size: 14px;
					color: #66b1ff;
					text-decoration: none;
				}
			}
			.btn-box {
				width: 100%;
			}
		}
	}
}
</style>
<template>
	<div class="login-container">
		<el-row>
			<el-col :span="12">
				<div class="login-left-box"></div>
			</el-col>
			<el-col :span="12">
				<div class="login-right-box">
					<div class="login-info">
						<h3 class="title-box">Welcome to my cabin</h3>
						<el-form
							:model="loginForm"
							:rules="loginRules"
							ref="loginForm"
							label-width="0"
							class="form-box"
						>
							<el-form-item prop="email">
								<el-input
									placeholder="邮箱"
									prefix-icon="el-icon-user"
									v-model="loginForm.email"
									class="input-box"
								></el-input>
							</el-form-item>
							<el-form-item prop="password">
								<el-input
									placeholder="密码"
									prefix-icon="el-icon-lock"
									show-password
									v-model="loginForm.password"
									class="input-box"
								></el-input>
							</el-form-item>
							<div class="sub-box">
								<el-checkbox v-model="loginForm.rememberpwd">记住密码</el-checkbox>
								<router-link to="/register" class="btn-link">注册</router-link>
							</div>
							<el-button type="primary" class="btn-box" @click="submitForm('loginForm')">登录</el-button>
						</el-form>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import { login, getInfo } from '@/api/user.js'
import md5 from 'md5'
export default {
	data() {
		return {
			loginForm: { email: "2001", password: "ah6666", rememberpwd: false },
			loginRules: {
				email: [
					{ required: true, message: "请输入邮箱", trigger: "blur" }
				],
				password: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{ min: 6, message: "密码长度不能小于6位", trigger: "blur" }
				]
			}
		};
	},
	created() {
		// 获取邮箱密码
		this.getAccountInfo();
	},
	methods: {
		submitForm(formName) {

			this.$refs[formName].validate(async (valid) => {
				if (valid) {
					let param = {
						username: "2001",
						password: md5("ah6666")
					};
					const data = await this.http.post('/sysuser/login', param);
					console.log(data);
					if (data) { 
					  this.$router.replace({ path: "/" })
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});


		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		getAccountInfo() {
			if (localStorage.getItem("accountInfo")) {
				let account = JSON.parse(localStorage.getItem("accountInfo"));
				this.loginForm = account;
			}
		}
	}
>>>>>>> 9cc463012fb5484cd11929eb4e626e5ad2c054f7
};
</script>