<template>
  <vue-office-docx
    :src="wordUrl"
    style="height: 100vh"
    @rendered="renderedHandler"
    @error="errorHandler"
  />
</template>

<script>
//引入VueOfficeDocx组件
import VueOfficeDocx from "@vue-office/docx";
import { getUrlVar } from "../../utils";
//引入相关样式
import "@vue-office/docx/lib/index.css";

export default {
  components: {
    VueOfficeDocx,
  },
  data() {
    return {
      wordUrl: "", //设置文档网络地址，可以是相对地址
    };
  },
  mounted() {
    this.wordUrl = getUrlVar("url");
  },
  methods: {
    renderedHandler() {
      console.log("渲染完成");
    },
    errorHandler() {
      console.log("渲染失败");
    },
  },
};
</script>
