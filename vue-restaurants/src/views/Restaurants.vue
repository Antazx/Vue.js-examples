<template>
  <div class="container">
    <h1>Restaurantes</h1>
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <form @submit.prevent="postRestaurant()">
      <h3>Añadir restaurante</h3>
      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="restaurante.name"
      />
      <input
        type="number"
        max="10"
        min="0"
        class="form-control my-2"
        value="5"
        v-model="restaurante.totalScore"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripcion"
        v-model="restaurante.description"
      />
      <b-button class="btn-success my-2 btn-block" type="submit"
        >Añadir</b-button
      >
    </form>

    <b-table hover :items="restaurants" :fields="fields" head-variant="light">
      <template v-slot:cell(actions)="row">
        <b-button
          class="btn-info btn-sm mr-1"
          @click="editRestaurant(row.item._id)"
          >Editar</b-button
        >
        <b-button class="btn-danger btn-sm" @click="delRestaurant(row.item._id)"
          >Borrar</b-button
        >
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      fields: [
        { key: "name", sortable: true },
        { key: "totalScore", sortable: true },
        { key: "description", sortable: false },
        { key: "actions", sortable: false }
      ],
      dismissSecs: 5,
      dismissCountDown: 0,
      mensaje: { color: "", texto: "" },
      restaurante: { name: "", totalScore: 0, description: "" }
    };
  },
  created() {
    this.getRestaurants();
  },
  methods: {
    alerta() {
      this.mensaje.texto = "probando alerta";
      this.mensaje.color = "success";
      this.showAlert();
    },
    getRestaurants() {
      this.axios
        .get("/restaurant")
        .then(res => {
          console.log(res.data.restaurantsDB);
          this.restaurants = res.data.restaurantsDB;
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    postRestaurant() {
      this.axios
        .post("/new-restaurant", this.restaurante)
        .then(res => {
          this.restaurants.push(res.data.restaurantDB);
          this.restaurante.name = "";
          this.restaurante.description = "";
          this.restaurante.totalScore = 0;
          this.mensaje.texto = "Restaurante añadido!";
          this.mensaje.color = "success";
          this.showAlert();
        })
        .catch(e => {
          if (e.response.data.error.errors.name) {
            this.mensaje.texto = e.response.data.error.errors.name.message;
          } else if (e.response.data.error.errors.totalScore) {
            this.mensaje.texto =
              e.response.data.error.errors.totalScore.message;
          } else {
            this.mensaje.texto = "Error al añadir el restaurante :(";
          }
          this.mensaje.color = "danger";
          this.showAlert();
        });
    },
    delRestaurant(id) {
      this.axios
        .delete(`/restaurant/${id}`)
        .then(res => {
          let index = this.restaurants.findIndex(
            item => item._id === res.data.restaurantDB._id
          );

          this.restaurants.splice(index, 1);
          this.mensaje.texto = "Restaurante eliminado.";
          this.mensaje.color = "success";
          this.showAlert();
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    editRestaurant(id) {
      this.$router.push(`/local/${id}`);
      console.log(id);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>
