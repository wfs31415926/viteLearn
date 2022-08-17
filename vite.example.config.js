import {defineConfig} from "vite";
export default defineConfig({
    optimizeDeps:{//optimize-->优化
        exclude:["lodash-es"],//当遇到lodsh-es这个依赖时不进行依赖预构建
    },
    envPrefix:"ENV_",//配置vite注入客户端环境变量校验的env前缀
})