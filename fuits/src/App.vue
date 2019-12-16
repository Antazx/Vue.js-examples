<template>
  <div id="app" class="container">
    <Header />
    <hr />
    <List />
    <hr />
    <Form />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Form from './components/Form.vue';

export default {
  name: 'app',
  components: {
    Header,
    List,
    Form
  }
};
</script>
