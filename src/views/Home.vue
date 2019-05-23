<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Shalom myNewMessage="זה מה שנשלח לקומפוננטה החדשה"></Shalom>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Shalom from "@/components/Shalom.vue"; // @ is an alias to /src


@Component({
  components: {
    Shalom
  }
})
export default class Home extends Vue {
  created() {
    //console.log('i was loaded!');
  }
  mounted() {
    this.$store.dispatch("addCrumb", {
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
