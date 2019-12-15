Vue.component('child', {
    template:/*html*/
        `
        <div class="p-5 bg-success">
            <h4>Child component {{numero}}</h4>
            <button class="btn btn-danger mb-5" @click="numero--">-</button>
            <h4>Nombre: {{nombre}}</h4>
            
        </div>
        `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Guillermo'
        }
    },
    mounted() {
        this.$emit('nombre', this.nombre);
    }
});