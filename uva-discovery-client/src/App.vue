<style>
* {
  margin: 0;
  box-sizing: border-box;
}
v-content {
  background-color: blueviolet;
  padding-left: 12px;
}
</style>

<template>
  <v-app>
    <NavigationDrawer />
    <v-content>
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </v-content>
    <BottomNavigation />
  </v-app>
</template>

<script>
import Vuex from 'vuex';
import NavigationDrawer from './components/NavigationDrawer';
import AppBar from './components/AppBar';
import BottomNavigation from './components/BottomNavigation';
import List from './components/List';
import Calendar from './components/Calendar';
import Location from './components/Location';

export default {
  components: { NavigationDrawer, AppBar, BottomNavigation, List, Calendar, Location },
  data: () => {
    return {};
  },
  computed: {
    ...Vuex.mapState(['currentTabComponent'])
  }
};
</script>
