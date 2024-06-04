<template>
  <a-layout class="applyMain">
    <a-layout-header>
      <div class="left-span">
        <span>想做点什么</span>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
      >
        <a-menu-item key="1">前端</a-menu-item>
        <a-menu-item key="2">后端</a-menu-item>
      </a-menu>
      <div class="right-span">
        <span>就一直想想</span>
      </div>
    </a-layout-header>
    <a-layout-content>
      <frontEnd v-if="selectedKeys[0] === '1'"></frontEnd>
      <backEnd v-if="selectedKeys[0] === '2'"></backEnd>
    </a-layout-content>
    <a-layout-footer>工程研发部技术文档</a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import frontEnd from "../components/FrontEnd.vue";
import backEnd from "../components/BackEnd.vue";
import { ref } from "vue";

const selectedKeys = ref<string[]>(["1"]);
</script>
<style lang="less">
.applyMain {
  height: 100%;
  width: 100%;
  position: relative;
  .ant-layout-header {
    height: 64px;
    display: flex;
    justify-content: center;
    .right-span,
    .left-span {
      width: 400px;
      font-size: 16px;
      text-align: center;
    }
    .left-span {
      color: greenyellow;
    }
    .right-span {
      color: #dfe446;
    }
    .ant-menu {
      width: 240px;
      .ant-menu-item {
        width: 120px;
        text-align: center;
      }
    }
  }
  .ant-layout-content {
    height: 100%;
  }
  .ant-layout-footer {
    height: 64px;
    border: 1px solid #f3eaea;
    text-align: center;
    font-weight: 700;
  }
}
</style>
