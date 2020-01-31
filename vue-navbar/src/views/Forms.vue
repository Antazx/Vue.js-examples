<template>
  <div class="mt-5">
    <h1>Forms</h1>

    <form>
      <b-row>
        <b-col md="6">
          <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
          <small>Mínimo tres caractesres</small>
        </b-col>
      </b-row>
    </form>
    <p>Texto: {{ texto }}</p>

    <h1>Select Forms</h1>

    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{selected}}</strong></div>

    <h1>Radio Buttons</h1>

    <b-form-group label="Individual radios">
      <b-form-radio v-model="radioSelected" name="some-radios" value="1">Option A</b-form-radio>
      <b-form-radio v-model="radioSelected" name="some-radios" value="2">Option B</b-form-radio>
    </b-form-group>

    <b-form-radio-group v-model="radioSelected" :options="radioOptions"></b-form-radio-group>

    <div class="mt-3">Selected: <strong>{{ radioSelected }}</strong></div>

    <h1>CheckBox</h1>

    <b-form-checkbox
      id="checkbox-1"
      v-model="checkbox"
      name="checkbox-1"
      value="Yes"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
    <b-form-checkbox
      id="checkbox-2"
      v-model="checkbox"
      name="checkbox-2"
      value="Yas"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
    <b-form-checkbox
      id="checkbox-3"
      v-model="checkbox"
      name="checkbox-3"
      value="Yos"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>

    <b-form-checkbox-group v-model="checkbox" :options="radioOptions"></b-form-checkbox-group>

    <div>State: <strong>{{ checkbox }}</strong></div>

  </div>
</template>
<script>
export default {
  name: "Forms",
  data() {
    return {
        texto: "",
        selected:  null,
        status: 'No aceptado',
        radioSelected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'A', text: 'This is First option' },
          { value: 'B', text: 'Selected Option' },
          { value: 'C', text: 'This is an option with object value' },
          { value: 'D', text: 'This one is disabled', disabled: true }
        ],
        radioOptions: [
          { value: 'A', text: 'This is First option' },
          { value: 'B', text: 'Selected Option' },
          { value: 'C', text: 'This is an option with object value' },
          { value: 'D', text: 'This one is disabled', disabled: true }
        ],
        checkbox: []
    };
  },
  computed:{
      comprobar(){
          return this.texto.length < 2 ? false : true;
      }
  }
};
</script>