import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTabComponent: 'List',
    componentList: [
      { name: 'List', icon: 'mdi-table-large' },
      { name: 'Calendar', icon: 'mdi-calendar' },
      { name: 'Location', icon: 'mdi-map-marker' }
    ]
  },
  mutations: {
    switchComponent(state, newComponent) {
      console.log(
        state.componentList.filter(i => {
          console.log(i.name, newComponent);
          i.name == newComponent;
        })
      );
      state.currentTabComponent = newComponent;
    }
  },
  actions: {},
  modules: {}
});
