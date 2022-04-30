<script>
import hljs from "highlight.js/lib/common";
import cookies from '../cookies.js';

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
      cookies.setCookie("SCSSContent", value, 9999);
      if(!firstTime){
        document.querySelector("section.right iframe").contentDocument.location.reload(true);
      }
    }
  },
  mounted() {
    let cookie = cookies.getCookie("SCSSContent");
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