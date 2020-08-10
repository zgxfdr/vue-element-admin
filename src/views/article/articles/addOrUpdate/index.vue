<template>
  <el-form
    class="p20 bg-ffffff"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="120px"
  >
    <div class="section-container">
      <div class="section-header">
        <template v-if="ruleForm.id">
          <span>编辑文章</span>
        </template>
        <template v-else>
          <span>添加文章</span>
        </template>
      </div>
      <div class="section-body">
        <el-form-item label="所属分类">
          <el-select v-model="ruleForm.aid" placeholder="请选择" clearable>
            <el-option
              v-for="item in classifyList"
              :key="item.id"
              :label="item.categoryname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title" maxlength="100" clearable></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="ruleForm.sort" controls-position="right" step-strictly></el-input-number>
          <div class="font14 color-cccccc">数值越大排列越靠前</div>
        </el-form-item>
        <el-form-item label="内容">
          <tinymce
            v-model="ruleForm.content"
            :height="300"
            uploadUrl="/common/uploadFile"
            :uploadData="{fromw:1}"
          />
        </el-form-item>
        <el-form-item label="是否发布">
          <el-radio-group v-model="ruleForm.status">
            <el-radio :label="0">立即发布</el-radio>
            <el-radio :label="1">暂不发布</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button
            size="small"
            type="info"
            @click="$store.dispatch(`router/push`,{path: `/article/articles/list`})"
          >取消</el-button>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script>
import { mapState } from "vuex";
import { updateArticle, getArticle } from "@/api/article";
import Tinymce from "@/components/Tinymce";
export default {
  name: "AddOrUpdateArticlesArticle",
  components: { Tinymce },
  async created() {
    try {
      this.$store.dispatch("article/getclassifyList", {
        isdel: 0,
        status: 0
      });
      if (this.$store.getters.params.id) {
        const { data } = await getArticle({
          id: this.$store.getters.params.id
        });
        this.ruleForm = {
          id: data.id,
          aid: data.aid,
          title: data.title,
          content: data.content,
          status: data.status,
          sort: data.sort
        };
      }
      if (this.$store.getters.params.aid) {
        this.ruleForm.aid = this.$store.getters.params.aid;
      }
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      ruleForm: {
        aid: "",
        sort: 1,
        title: "",
        content: "",
        status: 1
      },
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" }
        ],
        sort: [{ required: true, message: "请输入排序", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
            await updateArticle(this.ruleForm);
            this.$store.dispatch(`router/push`, {
              path: `/article/articles/list`
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: mapState({
    classifyList: status => status.article.classifyList
  })
};
</script>