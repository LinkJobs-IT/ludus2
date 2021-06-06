<template>
<q-page class="row justify-center">
    <div class="q-pa-md" style="max-width: 400px">

    <q-form
      class="q-gutter-md"
    >
      <q-input
        rounded outlined
        v-model="email"
        label="email"
        hint="Digite seu email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Precisamos do seu email']"
      />

      <div class="text-center">
        <q-btn label="ENVIAR LINK" type="submit" color="dark"/>
      </div>
    </q-form>

  </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      email: null
    }
  }
}
</script>
