<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(fruit, index) of sortList"
        @click="incQantinty(index)"
        :key="fruit.id"
      >
        {{ fruit.name }}
        <span class="badge badge-primary badge-pill">{{ fruit.quantity }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapState(['fruits']),
    sortList() {
      return this.fruits.sort((a, b) => b.quantity - a.quantity);
    }
  },
  methods: {
    ...mapMutations(['incQantinty'])
  }
};
</script>
