Vue.component('father-component', {
    template:/*html*/
        `
        <div class="p-5 bg-dark text-white">
            <h1>Componente Padre: {{numeroPadre}}</h1>
            <button class="btn btn-info mb-5" @click="numeroPadre++">+</button>
            {{nombrePadre}}
            <child :numero="numeroPadre" @nombre="nombrePadre = $event "></child>
            
        </div>
        `,
    data() {
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
});