import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    curmbs: Array()
  },
  getters: {
    getCrumbs: state => state.curmbs
  },
  mutations: {
    pushCrumb(state, obj) {
      const found = state.curmbs.some(el => el.text === obj.text);
      if (!found) {
        console.log("add crumb");
        state.curmbs.push(obj);
        console.log(state.curmbs);
      }
    },
    popCrumb(state, textToRemove) {
      const found = state.curmbs.some(el => el.text === textToRemove);
      if (found) {
        console.log(`removing crumb: ${textToRemove}`);
        state.curmbs = state.curmbs.filter(el => {
          return el.text !== textToRemove;
        });
        console.log(state.curmbs);
      }
    }
  },
  actions: {
    addCrumb({ state, commit }, crumb) {
      commit("pushCrumb", crumb);
    },
    removeCrumb({ commit }, textToRemove) {
      commit("popCrumb", textToRemove);
    }
  }
  //plugins: debug ? [createLogger()] : [],
});
