<template>
    <b-list-group-item
            variant="primary"
            @dblclick="removeToDo(item.id)">{{ item.todo }}
</b-list-group-item>
</template>

<script lang="ts">
import { Component,Prop, Vue } from "vue-property-decorator";
import store from "../../store";

@Component({})
export default class ToDoListItem extends Vue {

      readonly chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

     @Prop({default:'NA'})
     item!:any;
     @Prop()
     index!:number;

        constructor() {
            super();

        }
        mounted() {

        }

        destroyed() {

        }
        removeToDo(id:string){
            this.$store.dispatch("removeToDo",id);
            }
        addToDo(toDoToAdd:string){
            this.$store.dispatch("addToDo",{toDoToAdd});
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

}
</script>