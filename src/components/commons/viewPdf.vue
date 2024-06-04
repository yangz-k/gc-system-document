<template>
  <div class="word-wrap">
    <iframe id="wordView" :src="pdfUrl" />
  </div>
</template>

<script setup lang="ts">
import { getUrlVar } from "../../utils";
import { ref } from "vue";
const pdfUrl: any = ref(getUrlVar("url") || "");
</script>

<style lang="less">
.word-wrap {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
  iframe {
    height: 100%;
    width: 100%;
    border: 0;
  }
}
</style>
