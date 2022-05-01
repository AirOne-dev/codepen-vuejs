<script>
import Cookies from 'js-cookie'

export default {
  name: "RenderItem",
  data () {
    return {
      HTMLContent: Cookies.get('HTMLContent'),
      JSContent: Cookies.get('JSContent'),
      SCSSContent: Cookies.get('CSSContent'),
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