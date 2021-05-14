<template>
  <q-page padding class="row flex-center">
    <q-card class="q-pa-md col-10 col-md-6 col-lg-4">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Controle',
  data () {
    return {
      name: null,
      age: null,
      accept: null
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('internal')
    }
  }
}
</script>
