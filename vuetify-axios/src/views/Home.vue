<template>
  <div>
    <v-row>
      <v-col xs="12">
        <v-card>
          <v-date-picker
            v-model="date"
            full-width
            locale="es"
            :min="minDate"
            :max="maxDate"
            @change="getEuro(date)"
          ></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            {{ valor }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      date: new Date().toISOString().substring(0, 10),
      minDate: '1984',
      maxDate: new Date().toISOString().substring(0, 10),
      valor: null
    };
  },
  methods: {
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),

    async getEuro(dia) {
      let arrayFecha = dia.split('-');
      let ddmmyy = arrayFecha[2] + '-' + arrayFecha[1] + '-' + arrayFecha[0];

      try {
        this.mostrarLoading({
          titulo: 'Recuperando información',
          color: 'warning'
        });

        let data = await axios.get(`https://mindicador.cl/api/euro/${ddmmyy}`);

        if (data.data.serie.length > 0) {
          this.valor = (await data.data.serie[0].valor) + '€';
        } else {
          this.valor = 'Sin resultados';
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.ocultarLoading();
      }
    }
  },
  created() {
    this.getEuro(this.date);
  }
};
</script>
