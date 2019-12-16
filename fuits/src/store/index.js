import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      { name: 'Apple', quantity: 0 },
      { name: 'Orange', quantity: 0 },
      { name: 'Watermelon', quantity: 0 },
      { name: 'Tomatto', quantity: 0 }
    ]
  },
  mutations: {
    incQantinty(state, index) {
      state.fruits[index].quantity++;
    },
    addFruit(state, fruit) {
      if (fruit != '')
        state.fruits.push({ name: fruit, quantity: 0 });
    },
    resetFruits(state) {
      state.fruits.forEach(fruit => { fruit.quantity = 0 });
    }
  },
  actions: {
  },
  modules: {
  }
})
