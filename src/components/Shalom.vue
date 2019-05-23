<template>
  <div class="hello">
    <h1>{{ myNewMessage }}</h1>

    <b-card-group deck>
      <b-card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="Title"
      >
        <b-card-text>Header and footers using props.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
      <b-card title="Title" header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">{{ getComputedMessage() }}</h6>
        {{ this.$store.getters.getToDos.length }}
        <br />
        <b-container>
          <b-row>
            <ToDoList/>
<!--            <b-col md="4" offset-md="4">-->
<!--              <b-list-group>-->
<!--                <b-list-group-item-->
<!--                  variant="primary"-->
<!--                  v-for="(item, index) in this.$store.getters.getToDos"-->
<!--                  v-bind:key="index"-->
<!--                  @dblclick="whatAmI(item)"-->
<!--                >{{ item }}-->

<!--                </b-list-group-item>-->

<!--              </b-list-group>-->
<!--            </b-col>-->
          </b-row>
        </b-container>
        <b-card-text>Header and footers using slots.</b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
        <input type="text" v-model="message" />
        <button @click="addToDoItem(message)">Add To Do</button>
        <em slot="footer">Footer Slot</em>
      </b-card>
    </b-card-group>
  </div>
</template>
<style>

  .icon::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
  .test::before {
    display: inline-block;
    visibility: visible;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f1ea";
    margin-left: -1.3em;
    width: 1.3em;
  }
</style>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ToDoList from  './ToDos/toDoListComponent.vue';
@Component({components: {ToDoList}})
export default class Shalom extends Vue {
  @Prop() private myNewMessage!: string;
  readonly chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
  message: string;

  toDoList = ["one", "two", "three"];

  constructor() {
    super();
    this.message = "Hello World!";
  }

  getComputedMessage() {
    return this.message;
  }
  getComputedToDosLength() {
    return this.toDoList.length;
  }

  addToDoItem(toDoToAdd: string) {
      console.log(this.randomString(12));
      this.$store.dispatch("addToDo",{id:this.randomString(12),todo:toDoToAdd});

  }
  randomString(length:number) {

    if (! length) {
      length = Math.floor(Math.random() * this.chars.length);
    }

    let result = [];
    result.length = length;
    for (let i = 0; i < length; i++) {
      result[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return result.join('');
  }
  getComputedToDos() {
    return this.toDoList;
  }
  whatAmI(event: any) {
    this.toDoList.splice(this.toDoList.indexOf(event), 1);
  }
}
</script>
