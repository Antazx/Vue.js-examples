const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Vue.js lifecycle'
    },

    beforeCreate() { console.log('beforeCreate'); },

    //Al crear los metodos observadores y eventos, pero no accede al DOM
    //No se puede acceder a 'el'
    created() { console.log('created'); },

    //Antes de insertar el DOM
    beforeMount() { console.log('beforeMount'); },

    //Al insertar el DOM
    mounted() { console.log('mounted'); },

    //Al detectar un cambio
    beforeUpdate() { console.log('beforeUpdate'); },

    //Al realizar los cambios
    updated() { console.log('updated'); },

    //Antes de destruir la instancia
    beforeDestroy() { console.log('beforeDestroy'); },

    //Se destruye la instancia
    destroyed() { console.log('destroyed'); },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
});