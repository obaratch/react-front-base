import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { version } from "config";

export default defineConfig({
  server: { port: 8080 },
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __BUILD_TIME__: Date.now(),
  },
  plugins: [reactRefresh()],
});
