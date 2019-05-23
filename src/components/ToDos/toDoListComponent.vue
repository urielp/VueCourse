<template>
  <b-container>
    <b-row>
      <b-col md="4" offset-md="4" >
        <h1>We have {{getComputedToDosLength()}} ToDos</h1>
        <b-list-group>
          <ToDoListItem v-for="todo,index in this.$store.getters.getToDos" :item="todo" :key="index" :index="index"></ToDoListItem>
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
import ToDoListItem from './toDoItemComponent.vue';

@Component({components: {ToDoListItem}})
export default class ToDoList extends Vue {
  private route: string | undefined;
  toDoList!: Array<string>;

  constructor() {
    super();
    this.toDoList = this.$store.getters.getToDos;
  }


  mounted() {

    this.$store.dispatch("addCrumb", {
      text: this.$router.currentRoute.name,
      name: this.$router.currentRoute.name,
      href: this.$router.currentRoute.name
    });
    this.route = this.$router.currentRoute.name;

  }

  destroyed() {
    this.$store.dispatch("removeCrumb", this.route);
  }
  getComputedToDosLength() {
    return this.$store.state.toDos.length;
  }
}
</script>
