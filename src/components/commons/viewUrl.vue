<template>
  <iframe :src="url" class="urlIframe" />
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
      url: "", //设置文档网络地址，可以是相对地址
    };
  },
  mounted() {
    this.url = getUrlVar("url");
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
<style lang="less">
.urlIframe {
  height: 100%;
  width: 100%;
  border: 0;
}
</style>
