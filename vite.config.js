import {defineConfig, loadEnv} from "vite";
import viteBaseConfig from "./vite.base.config";
import viteProdConfig from "./vite.prod.config";
import viteDevConfig from "./vite.dev.config";

//策略模式
const envResolver = {
    "build": () => {
        console.log("生产环境");
        // ({...viteBaseConfig, ...viteProdConfig})
        return Object.assign({}, viteBaseConfig, viteProdConfig)
        // Object.assign(viteBaseConfig, viteProdConfig)
    },
    "serve": () => {
        console.log("开发环境");
        return Object.assign({}, viteBaseConfig, viteDevConfig)//将多个配置合并到一起
    }
}
export default defineConfig(({command,mode}) => {
    console.log("command", command)
    // console.log("process",process.env)
    // console.log("process",process.cwd());
    console.log("mode",mode);
    const env =loadEnv(mode,process.cwd(),"");
    console.log("env",env);
    return envResolver[command]();
})