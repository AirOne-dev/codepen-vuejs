<script>
import cookies from './cookies.js';

export default {
  name: "RenderItem",
  data () {
    return {
      HTMLContent: cookies.getCookie('HTMLContent'),
      JSContent: cookies.getCookie('JSContent'),
      SCSSContent: cookies.getCookie('SCSSContent'),
    }
  },
  methods:{
  },
  mounted() {
  }
}
</script>

<template>
  <component :is="'style'">
    {{this.SCSSContent}}
  </component>
  <section class="rendered" v-html="HTMLContent"></section>
  <component :is="'script'">
    {{this.JSContent}}
  </component>
</template>

<!--<style lang="scss" :content="this.SCSSContent"></style>-->

<style lang="scss">
.rendered {
  width: 100%;
  height: 100%;
}
</style>