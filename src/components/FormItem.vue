<script>
import hljs from "highlight.js/lib/common";
import Cookies from 'js-cookie'

export default {
  name: "FormItem",
  props: {
    name: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
  },
  data () {
    return {
      Content: "",
    }
  },
  methods:{
    updateContent(value, firstTime = false){
      document.querySelector("#" + this.name).parentNode.dataset.replicatedValue = value
      this.Content = hljs.highlight(value, {language: this.language}).value;
      Cookies.set(this.name, value);
      if(!firstTime){
        document.querySelector("section.right iframe").contentDocument.location.reload(true);
      }
    },
    insertTab(event) {
      event.preventDefault();
      event.target.value += '  ';
      this.updateContent(event.target.value);
    }
  },
  mounted() {
    let cookie = Cookies.get(this.name) ?? "Entrez ici votre code " + this.language;
    this.updateContent(cookie, true);
    document.querySelector("#" + this.name).value = cookie;
  }
}
</script>

<template>
  <code :class="this.language" v-html="this.Content"></code>

  <!--  un énorme merci à cette source : https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/-->
  <div class="grow-wrap">
    <textarea
        @keydown.tab="insertTab($event)"
        @input="updateContent($event.target.value)"
        :id="this.name"
        rows="1"
    ></textarea>
  </div>
</template>