<script>
import hljs from "highlight.js/lib/common";
import Cookies from 'js-cookie'

export default {
  name: "HTMLItem",
  data () {
    return {
      HTMLContent: "",
    }
  },
  methods:{
    updateHTMLContent(value, firstTime = false){
      this.HTMLContent = hljs.highlight(value, {language: 'html'}).value;
      Cookies.set("HTMLContent", value);
      if(!firstTime){
        document.querySelector("section.right iframe").contentDocument.location.reload(true);
      }
    }
  },
  mounted() {
    let cookie = Cookies.get("HTMLContent");
    this.updateHTMLContent(cookie, true);
    document.querySelector("#HTMLContent").value = cookie;
  }
}
</script>

<template>
  <code class="html" v-html="HTMLContent"></code>
  <textarea style="width: 100%; height: 100%;" @input="updateHTMLContent($event.target.value)" name="" id="HTMLContent" cols="30" rows="10">
  </textarea>
</template>

<style lang="scss">

</style>