<style lang="less" scoped>
.register-container {
  background: #fff;
  .register-left-box {
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/images/shaoshan.png");
    background-size: cover;
    box-sizing: border-box;
  }
  .register-right-box {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    margin-top: 20%;
    text-align: center;
    .register-info {
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
  <div class="register-container">
    <el-row>
      <el-col :span="12">
        <div class="register-left-box"></div>
      </el-col>
      <el-col :span="12">
        <div class="register-right-box">
          <div class="register-info">
            <h3 class="title-box">Create an Account</h3>
            <el-form
              :model="registerForm"
              :rules="registerRules"
              ref="registerForm"
              label-width="0"
              class="form-box"
            >
              <el-form-item prop="email">
                <el-input
                  placeholder="邮箱"
                  prefix-icon="el-icon-user"
                  v-model="registerForm.email"
                  class="input-box"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  placeholder="密码"
                  prefix-icon="el-icon-lock"
                  show-password
                  v-model="registerForm.password"
                  class="input-box"
                ></el-input>
              </el-form-item>
              <el-form-item prop="checkPassword">
                <el-input
                  placeholder="确认密码"
                  prefix-icon="el-icon-lock"
                  show-password
                  v-model="registerForm.checkPassword"
                  class="input-box"
                ></el-input>
              </el-form-item>
              <el-button type="primary" class="btn-box" @click="submitForm('registerForm')">注册</el-button>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    const validateRePass = (rule, value, callback) => {
      if (!this.registerForm.checkPassword) {
        callback(new Error("请输入确认密码"));
      } else if (
        this.registerForm.password != this.registerForm.checkPassword
      ) {
        callback(new Error("两次密码必须一致"));
      } else {
        callback();
      }
    };
    return {
      registerForm: { email: "", password: "", checkPassword: "" },
      registerRules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度不能小于6位", trigger: "blur" }
        ],
        checkPassword: [
          { required: true, trigger: "blur", validator: validateRePass }
        ]
      }
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch("user/register", this.registerForm).then(response => {
            this.$store.dispatch("user/login",this.registerForm).then(response=>{
              this.$router.replace({path: '/'})
            })
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>