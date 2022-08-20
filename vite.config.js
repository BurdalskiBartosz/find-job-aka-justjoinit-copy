import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

export default defineConfig({
	root,
	publicDir: resolve(__dirname, "public"),
	build: {
		rollupOptions: {
			input: {
				main: resolve(root, "/index.html")
			}
		}
	}
});
