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
      document.querySelector("#JSContent").parentNode.dataset.replicatedValue = value
      this.JSContent = hljs.highlight(value, {language: 'javascript'}).value;
      Cookies.set("JSContent", value);
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
    let cookie = Cookies.get("JSContent");
    this.updateJSContent(cookie, true);
    document.querySelector("#JSContent").value = cookie;
  }
}
</script>

<template>
  <code class="JS" v-html="JSContent"></code>

  <!--  un énorme merci à cette source : https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/-->
  <div class="grow-wrap">
    <textarea
        @keydown.tab="insertTab($event)"
        @input="updateJSContent($event.target.value)"
        id="JSContent"
    ></textarea>
  </div>
</template>

<style lang="scss">

</style>