import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Keep base as "/" for S3/CloudFront + custom domain.
  // If you later deploy under a sub-path, change base accordingly.
  base: "/"
});
