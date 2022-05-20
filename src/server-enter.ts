import { router } from "./router";
import App from './App.vue'
import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";


const app = createSSRApp(App)
console.log(app)
renderToString(app)