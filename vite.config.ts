import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // 添加以下选项以启用 JavaScript（这是可选的，根据需求）
        javascriptEnabled: true,
      },
    },
  },
});
