<script>
import hljs from "highlight.js/lib/common";
import Cookies from 'js-cookie'

export default {
  name: "SCSSItem",
  data () {
    return {
      SCSSContent: "",
    }
  },
  methods:{
    updateSCSSContent(value, firstTime = false){
      this.SCSSContent = hljs.highlight(value, {language: 'scss'}).value;
      Cookies.set("SCSSContent", value);
      if(!firstTime){
        document.querySelector("section.right iframe").contentDocument.location.reload(true);
      }
    }
  },
  mounted() {
    let cookie = Cookies.get("SCSSContent");
    this.updateSCSSContent(cookie, true);
    document.querySelector("#SCSSContent").value = cookie;
  }
}
</script>

<template>
  <code class="SCSS" v-html="SCSSContent"></code>
  <textarea style="width: 100%; height: 100%;" @input="updateSCSSContent($event.target.value)" name="" id="SCSSContent" cols="30" rows="10">
  </textarea>
</template>

<style lang="scss">

</style>