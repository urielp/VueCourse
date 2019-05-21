<template>
    <b-list-group-item
            variant="primary"
            @dblclick="removeToDo(item)">{{ item }}
</b-list-group-item>
</template>

<script lang="ts">
import { Component,Prop, Vue } from "vue-property-decorator";
import store from "../../store";

@Component({})
export default class ToDoListItem extends Vue {

     @Prop({default:'NA'})
     item!:string;
     @Prop()
     index!:number;

        constructor() {
            super();
        }
        mounted() {

        }

        destroyed() {

        }
    removeToDo(toDoToRemove:string){
            console.log(toDoToRemove);
        store.dispatch("removeToDo",{toDoToRemove});
        }
}
</script>