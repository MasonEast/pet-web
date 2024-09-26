import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 添加以下选项以启用 JavaScript（这是可选的，根据需求）
        javascriptEnabled: true,
        // 将全局 less 文件中的变量和 mixins 注入到每个 less 文件中
        additionalData: `@import "@/assets/global.less";`,
      },
    },
  },
});
