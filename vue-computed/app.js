const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola soy Guillermo',
        contador: 0
    },
    methods: {},
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        color() {
            return {
                'bg-succes': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 80,
                'bg-danger': this.contador >= 80
            }
        }
    }
});