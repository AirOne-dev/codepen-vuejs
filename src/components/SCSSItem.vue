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
      document.querySelector("#SCSSContent").parentNode.dataset.replicatedValue = value
      this.SCSSContent = hljs.highlight(value, {language: 'scss'}).value;
      Cookies.set("SCSSContent", value);
      if(!firstTime){
        document.querySelector("section.right iframe").contentDocument.location.reload(true);
      }
    },
    insertTab(event) {
      event.preventDefault();
      event.target.value += '  ';
      this.updateHTMLContent(event.target.value);
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

  <!--  un énorme merci à cette source : https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/-->
  <div class="grow-wrap">
    <textarea
        @keydown.tab="insertTab($event)"
        @input="updateSCSSContent($event.target.value)"
        id="SCSSContent"
    ></textarea>
  </div>
</template>

<style lang="scss">

</style>