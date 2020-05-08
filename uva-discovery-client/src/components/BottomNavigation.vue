<template>
  <v-bottom-navigation app horizontal grow color="primary">
    <v-btn
      v-for="comp in componentList"
      :key="comp.name"
      value="comp.name"
      @click="switchComponent(comp.name)"
    >
      <span>{{ comp.name }}</span>
      <v-icon>{{ comp.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import Vuex from 'vuex';
export default {
  name: 'BottomNavigation',
  data: () => {
    return {};
  },
  computed: {
    ...Vuex.mapState(['currentTabComponent', 'componentList'])
  },
  methods: {
    ...Vuex.mapMutations(['switchComponent'])
  }
};
</script>
