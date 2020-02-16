<template>
  <div class="mt-5">
    <b-container>
      <form @submit.prevent="putRestaurant()">
        <b-row align-v="center">
          <b-col>
            <h4>Nombre:</h4>
          </b-col>
          <b-col cols="6">
            <input
              type="text"
              class="form-control my-2"
              placeholder="Nombre"
              v-model="current.name"
            />
          </b-col>
          <b-col><h4>Puntuación</h4></b-col>
          <b-col>
            <input
              type="number"
              max="10"
              min="0"
              class="form-control my-2"
              value="5"
              v-model="current.totalScore"
            />
          </b-col>
        </b-row>

        <b-row align-v="center">
          <b-col cols="6">
            <b-row align-v="center">
              <b-col cols="4">
                <h5>Sitio:</h5>
              </b-col>
              <b-col cols="3">
                <input
                  type="number"
                  max="10"
                  min="0"
                  class="form-control my-2"
                />
              </b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="4">
                <h5>Tiempo:</h5>
              </b-col>
              <b-col cols="3">
                <input
                  type="number"
                  max="10"
                  min="0"
                  class="form-control my-2"
                />
              </b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="4">
                <h5>Servicio:</h5>
              </b-col>
              <b-col cols="3">
                <input
                  type="number"
                  max="10"
                  min="0"
                  class="form-control my-2"
                />
              </b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="4">
                <h5>Comida:</h5>
              </b-col>
              <b-col cols="3">
                <input
                  type="number"
                  max="10"
                  min="0"
                  class="form-control my-2"
                />
              </b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="4">
                <h5>Precio:</h5>
              </b-col>
              <b-col cols="3">
                <input
                  type="number"
                  max="10"
                  min="0"
                  class="form-control my-2"
                />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <h1>AQUI MAPA</h1>
          </b-col>
        </b-row>

        <textarea
          type="text"
          class="form-control my-2"
          placeholder="Descripcion"
          v-model="current.description"
        />
        <h1>Aqui fotos</h1>

        <b-button class="btn-info my-2 btn-block" type="submit"
          >Actualizar</b-button
        >
      </form>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: {},
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getRestaurant(this.id);
  },
  methods: {
    putRestaurant() {
      this.axios
        .put(`/restaurant/${this.id}`, this.current)
        .then(res => {
          this.$router.go(-1);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getRestaurant(id) {
      this.axios
        .get(`/restaurant/${id}`)
        .then(res => {
          console.log(res);
          this.current = res.data.restaurantDB;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>