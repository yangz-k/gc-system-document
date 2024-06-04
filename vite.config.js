import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
const argv = process.argv;
const result = argv.find((item) => item.match("--mode"));
const argMode = result.split("=")[1];
let base = argMode !== "production" ? "" : "/static/doc/";
export default defineConfig({
  base,
  resolve: {
    alias: {
      "@": "/src", // 设置 @ 别名指向 src 目录
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  build: {
    outDir: "./dist/doc/",
    assetsDir: "static",
    chunkFileNames: "static/[name]-[hash].js",
    rollupOptions: {
      output: {
        entryFileNames: `static/[name].[hash].js`,
        chunkFileNames: `static/[name].[hash].js`,
        assetFileNames: `static/[name].[hash].[ext]`,
      },
    },
  },
});
