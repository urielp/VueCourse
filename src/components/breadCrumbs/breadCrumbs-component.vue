<template>
  <div>
    <b-breadcrumb
      class="breadcrumb-cust"
      :items="this.$store.getters.getCrumbs"
    ></b-breadcrumb>
  </div>
</template>
<style>
.breadcrumb-cust {
  background-color: transparent !important;
  margin-top: 1.9rem;
}
.breadcrumb-item a {
  color: dodgerblue !important;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
//import { Card } from './node_modules/bootstrap-vue/es/components'
import store from "../../store";

@Component
export default class BreadCrumbs extends Vue {
  constructor() {
    super();
  }

  mounted() {
    store.dispatch("addCrumb", {
      text: this.$router.currentRoute.name,
      name: this.$router.currentRoute.name,
      href: this.$router.currentRoute.name
    });
  }

  destroyed() {
    console.log("i was destroyed!!(home)");
    //store.dispatch('addCrumb',{text:this.$router.currentRoute.name,name:this.$router.currentRoute.name});
  }
}
</script>
