<script>
import hljs from "highlight.js/lib/common";
import Cookies from 'js-cookie'

export default {
  name: "JSItem",
  data () {
    return {
      JSContent: "",
    }
  },
  methods:{
    updateJSContent(value, firstTime = false){
      this.JSContent = hljs.highlight(value, {language: 'javascript'}).value;
      Cookies.set("JSContent", value);
      if(!firstTime){
        document.querySelector("section.right iframe").contentDocument.location.reload(true);
      }
    }
  },
  mounted() {
    let cookie = Cookies.get("JSContent");
    this.updateJSContent(cookie, true);
    document.querySelector("#JSContent").value = cookie;
  }
}
</script>

<template>
  <code class="JS" v-html="JSContent"></code>
  <textarea style="width: 100%; height: 100%;" @input="updateJSContent($event.target.value)" name="" id="JSContent" cols="30" rows="10">
  </textarea>
</template>

<style lang="scss">

</style>