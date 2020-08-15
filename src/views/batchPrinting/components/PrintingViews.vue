<!--page-break-after:always; 重点样式，让二维码一页显示一个-->
<template>
  <div>
    <el-form>
      <el-form-item>
        <ul id="codeImgviewer" v-if="codePicList != null && codePicList.length != 0">
          <li
            v-for="(item, index) in codePicList"
            v-bind:key="index"
            style="cursor:pointer;padding:10px;float:left"
          >
            <div :id="'codeimg' + index" style="page-break-after:always;">
              <img
                :src="item"
                style="width:260px;height:130px;"
                @click="showBigImg('codeImgviewer')"
              />
            </div>
          </li>
        </ul>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="printCode()">打印</el-button>
      <el-button @click="cancelLookCodePic()">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["codePicList"],
  data() {
    return {};
  },
  methods: {
    printCode() {
      if (this.codePicList == null || this.codePicList.length == 0) {
        return;
      }
      var newWin = window.open(""); //新打开一个空窗口
      for (var i = 0; i < this.codePicList.length; i++) {
        var imageToPrint = document.getElementById("codeimg" + i); //将要被打印的图片
        newWin.document.write(imageToPrint.outerHTML); //将图片添加进新的窗口
      }
      newWin.document.close(); //在IE浏览器中使用必须添加这一句
      newWin.focus(); //在IE浏览器中使用必须添加这一句
      setTimeout(function() {
        newWin.print(); //打印
        newWin.close(); //关闭窗口
      }, 100);
    },
    cancelLookCodePic() {
      this.$parent.dialogTableVisible = false;
    }
  }
};
</script>