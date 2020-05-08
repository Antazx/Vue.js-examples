<template>
  <v-navigation-drawer color="primary" app dark clipped expand-on-hover mini-variant-width="60">
    <v-list>
      <v-list-item link>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/13.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Nombre Usuario</v-list-item-title>
          <v-list-item-subtitle>Avisos</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-list-item>
        <v-list-item-content>
          <!-- <ItemFilter /> -->
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ItemFilter from './ItemFilter';

export default {
  data: () => {
    return {
      name: 'Navigation',
      components: { ItemFilter },
      items: [
        { title: 'Fil', icon: 'mdi-calendar' },
        { title: 'List', icon: 'mdi-table-large' },
        { title: 'Location', icon: 'mdi-map-marker' }
      ]
    };
  }
};
</script>
