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
        placeholder="Puntuación"
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

    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Puntuación</th>
          <th scope="col">Descripcion</th>
          <th scope="col">*</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in restaurants" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.totalScore }}</td>
          <td>{{ item.description }}</td>
          <td>
            <b-button class="btn-danger" @click="alerta()">Borrar</b-button>
          </td>
        </tr>
      </tbody>
    </table>
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
        { key: "description", sortable: false }
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
          console.log("res.data", res.data.restaurantDB);
          this.restaurants.push(res.data.restaurantDB);
          this.restaurante.name = "";
          this.restaurante.description = "";
          this.restaurante.totalScore = 0;
          this.mensaje.texto = "Se ha añadido el restaurante";
          this.mensaje.color = "success";
          this.showAlert();
        })
        .catch(e => {
          this.mensaje.texto =
            "Se ha producido un error al añadir el restaurante";
          this.mensaje.color = "danger";
          this.showAlert();
        });
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
