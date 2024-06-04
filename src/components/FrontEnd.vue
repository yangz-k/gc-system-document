<template>
  <div class="FrontEnd">
    <a-flex wrap="wrap" gap="small">
      <a-card
        @click="showMore(item)"
        hoverable
        v-for="(item, index) in cardArr"
        :key="index"
      >
        <template #cover>
          <img v-if="item.img" alt="example" :src="item.img" />
          <img v-else src="/defaultFront.png" />
        </template>
        <a-card-meta :title="item.title">
          <template #description>{{ item.des }}</template>
        </a-card-meta>
      </a-card>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { data } from "/data/frontData";

const cardArr = ref(data);
const hashes = window.location.href ? window.location.href.split("#") : [];
const suUrl = hashes[0];
const showMore = (item: { type; url }) => {
  if (item?.type == "pdf") {
    window.open(`${suUrl}#/viewPdf?url=${item?.url}`, "_blank");
  } else if (item?.type == "word") {
    window.open(`${suUrl}#/viewDocx?url=${item?.url}`, "_blank");
  } else if (item?.type == "url") {
    window.open(`${suUrl}#/viewUrl?url=${item?.url}`, "_blank");
  } else {
    window.open(``, "_blank");
  }
};
</script>

<style lang="less">
.FrontEnd {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 16px;
  overflow: auto;
  background: #f3f5fb;
  .ant-card {
    width: 228px;
    margin: 16px;
    height: 340px;
    border: 3px solid #808de6;
    display: flex;
    flex-direction: column;
    .ant-card-cover {
      height: 80%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 6px 6px 0 0;
      }
    }
    .ant-card-body {
      flex: 1;
      padding: 8px 16px;
      background: #7077d6;
      border-radius: 0px 0 4px 4px;
      .ant-card-meta {
        height: 100%;
        width: 100%;
        .ant-card-meta-detail {
          .ant-card-meta-title {
            color: #02fd41;
          }
          .ant-card-meta-description {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
