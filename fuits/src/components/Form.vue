<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      v-model="newFruit"
      @keyup.enter="addFruit(newFruit)"
      placeholder="Add a fruit"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" @click="addFruit(newFruit)">
        Button
      </button>
    </div>
    <button class="mt-3 btn btn-danger btn-block" @click="resetFruits">Reset</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Form',
  data() {
    return { newFruit: '' };
  },
  methods: {
    ...mapMutations(['addFruit', 'resetFruits'])
  }
};
</script>
