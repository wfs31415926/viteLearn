import {defineConfig} from "vite";
export default defineConfig({
    optimizeDeps:{//optimize-->优化
        exclude:["lodash-es"],//当遇到lodsh-es这个依赖时不进行依赖预构建
    }
})