<template>
  <div id="app">
    <div id="nav">
      <!-- <b-breadcrumb :items="this.$store.getters.getCrumbs"></b-breadcrumb> -->

      <NavigationBar></NavigationBar>
      <BreadCrumbs></BreadCrumbs>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        -->
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "./store";
import NavigationBar from "./components/navbar/NavigationBar.vue";
import BreadCrumbs from "./components/breadCrumbs/breadCrumbs-component.vue";
@Component({
  components: {
    NavigationBar,
    BreadCrumbs
  }
})
export default class extends Vue {
  private breadCrumbs: Array<any>;

  constructor() {
    super();
    this.breadCrumbs = this.$store.getters.getCrumbs;
  }
  mounted() {
    //store.dispatch('addCrumb',{text:this.$router.currentRoute.name,name:this.$router.currentRoute.name});
    //this.breadCrumbs = this.$store.getters.getCrumbs;
  }
}
</script>
