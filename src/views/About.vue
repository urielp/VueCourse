<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import store from "../store";

@Component({
  components: {}
})
export default class About extends Vue {
  route: string | undefined;
  constructor() {
    super();
    this.route = "";
  }
  created() {
    console.log("about constructor");
  }
  mounted() {
    console.log("about was mounted(about)");
    this.route = this.$router.currentRoute.name;
    store.dispatch("addCrumb", {
      text: this.$router.currentRoute.name,
      name: this.$router.currentRoute.name
    });
  }
  beforeDestroy() {
    console.log("going to be destroyed !!(About)");
    console.log(`going to remove crumb !!(About) ${this.route}`);
    store.dispatch("removeCrumb", this.route);
  }
  destroyed() {
    console.log("i was destroyed!!(About)");
  }
}
</script>
