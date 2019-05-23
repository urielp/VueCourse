import Vue from "vue";
import Vuex from "vuex";
//import createLogger from "vuex/dist/logger";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    curmbs: Array(),
    toDos:[{id:"cvcx43gdg",todo:"one"},{id:"g34vbfd4",todo:"two"},{id:"f34gfd",todo:"three"}]
  },
  getters: {
    getCrumbs: state => state.curmbs,
    getToDos:state => state.toDos
  },
  mutations: {
    pushCrumb(state, obj) {
      const found = state.curmbs.some(el => el.text === obj.text);
      if (!found) {
        state.curmbs.push(obj);
      }
    },
    popCrumb(state, textToRemove) {
      const found = state.curmbs.some(el => el.text === textToRemove);
      if (found) {
        state.curmbs = state.curmbs.filter(el => {
          return el.text !== textToRemove;
        });
      }
    },
    popToDo(state,toDoToRemoveID){

      const found = state.toDos.some(el => el.id === toDoToRemoveID);
      if (found) {

        state.toDos = state.toDos.filter(el => {
          return el.id !== toDoToRemoveID;
        });

      }
    },
    addToDo(state,toDoToAdd){

      state.toDos.push(toDoToAdd);
    }
  },
  actions: {
    addCrumb({ state, commit }, crumb) {
      commit("pushCrumb", crumb);
    },
    removeCrumb({ commit }, textToRemove) {
      commit("popCrumb", textToRemove);
    },
    removeToDo({commit,state},toDoToRemoveID){

      commit('popToDo',toDoToRemoveID);
    },
    addToDo({commit,state},toDoToAdd){

      commit('addToDo',toDoToAdd);
    },
  }
  //plugins: debug ? [createLogger()] : [],
});
