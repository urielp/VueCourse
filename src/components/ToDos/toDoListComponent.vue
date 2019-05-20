<template>
  <b-container>
    <b-row>
      <b-col md="4" offset-md="4" class="test">
        <b-list-group>
          <b-list-group-item>Default list group item</b-list-group-item>
          <b-list-group-item variant="primary"
            >Primary list group item</b-list-group-item
          >
          <b-list-group-item variant="secondary"
            >Secondary list group item</b-list-group-item
          >
          <b-list-group-item variant="success"
            >Success list group item</b-list-group-item
          >
          <b-list-group-item variant="danger"
            >Danger list group item</b-list-group-item
          >
          <b-list-group-item variant="warning"
            >Warning list group item</b-list-group-item
          >
          <b-list-group-item variant="info"
            >Info list group item</b-list-group-item
          >
          <b-list-group-item variant="light"
            >Light list group item</b-list-group-item
          >
          <b-list-group-item variant="dark"
            >Dark list group item</b-list-group-item
          >
        </b-list-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4" class="test">
        <b-list-group>
          <b-list-group-item
            variant="info"
            v-for="(item, index) in listItems"
            v-bind:key="index"
            >{{ item }}</b-list-group-item
          >
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.test {
  -ms-flex-item-align: center !important;
  align-self: center !important;
}
.list-group-item:hover {
  /* background: rgb(226, 226, 226) !important; */
  opacity: 0.7;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "../../store";

@Component
export default class ToDoList extends Vue {
  private listItems: Array<string> = [];
  private route: string | undefined;

  constructor() {
    super();
  }
  mounted() {
    store.dispatch("addCrumb", {
      text: this.$router.currentRoute.name,
      name: this.$router.currentRoute.name,
      href: this.$router.currentRoute.name
    });
    this.route = this.$router.currentRoute.name;
    this.listItems.push("Item 1");
    this.listItems.push("Item 2");
    this.listItems.push("Item 3");
    this.listItems.push("Item 4");
    this.listItems.push("Item 5");
    this.listItems.push("Item 6");
  }

  destroyed() {
    console.log("i was destroyed!!(home)");
    store.dispatch("removeCrumb", this.route);
  }
}
</script>
