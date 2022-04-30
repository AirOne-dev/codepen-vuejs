import {createApp, reactive} from "vue";
import App from "./App.vue";
import hljs from 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App);
app.use(hljsVuePlugin)
app.mount("#app");

