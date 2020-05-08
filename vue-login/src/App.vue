<template>
  <v-app>
    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Login
  },

  data: () => ({
    //
  })
};
</script>
