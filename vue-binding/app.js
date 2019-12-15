const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola mundo con Vue.js',
    frutas: [
      { nombre: 'Pera', cantidad: 10 },
      { nombre: 'Manzana', cantidad: 0 },
      { nombre: 'Platano', cantidad: 30 }
    ],
    nuevaFruta: '',
    total: 0
  },
  methods: {
    addFruta() {
      console.log('Add fruta');

      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: 0
      });

      this.nuevaFruta = '';
    }
  },
  computed: {
    totalFrutas() {
      this.total = 0;
      for (fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }
      return this.total;
    }
  }
});
