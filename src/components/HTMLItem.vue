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
      document.querySelector("#HTMLContent").parentNode.dataset.replicatedValue = value
      this.HTMLContent = hljs.highlight(value, {language: 'html'}).value;
      Cookies.set("HTMLContent", value);
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
    let cookie = Cookies.get("HTMLContent");
    this.updateHTMLContent(cookie, true);
    document.querySelector("#HTMLContent").value = cookie;
  }
}
</script>

<template>
  <code class="html" v-html="HTMLContent"></code>

<!--  un énorme merci à cette source : https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/-->
  <div class="grow-wrap">
    <textarea
        @keydown.tab="insertTab($event)"
        @input="updateHTMLContent($event.target.value)"
        id="HTMLContent"
    ></textarea>
  </div>
</template>

<style lang="scss">

</style>