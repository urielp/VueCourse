<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Shalom myNewMessage="זה מה שנשלח לקומפוננטה החדשה"></Shalom>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Shalom from "@/components/Shalom.vue"; // @ is an alias to /src
import store from "../store";

@Component({
  components: {
    HelloWorld,
    Shalom
  }
})
export default class Home extends Vue {
  created() {
    //console.log('i was loaded!');
  }
  mounted() {
    // console.log('i was mounted');
    //console.log(this.$router.currentRoute);
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
