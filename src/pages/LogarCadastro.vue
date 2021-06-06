<template>
<q-page style="padding:3em" class="row justify-center">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <h2 class="font-titulo flex flex-center ">

       Cadastro

       </h2>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        rounded outlined
        style="margin: 1em;"
        v-model="name"
        label="Nome"
        hint="Digite seu nome"
        label-color="secondary"
        color="dark"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Digite alguma coisa']"
      />

      <q-input
        rounded outlined
        style="margin: 1em;"
        v-model="email"
        label="Email"
        hint="Digite seu Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Digite alguma coisa']"
      />
      <q-input
        rounded outlined
        style="margin: 1em;"
        type="password"
        v-model="senha"
        label="Senha"
        hint="Escolha uma senha"
        label-color="secondary"
        color="dark"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Digite alguma coisa']"
      />

      <q-toggle v-model="accept" label="Estou de acordo com os Termos de Uso e Política de Privacidade" />

      <div class="row flex-center">
        <q-btn
          class="q-ml-sm"
          label="Criar Conta"
          type="submit"
          color="dark"/>
      </div>
    </q-form>

  </div>
</q-page>
</template>

<style type="text/css">
#qp-form{
  font-family: 'Comfortaa', cursive;
  font-weight: 300;
}
.font-titulo{
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
  color: #0d0632;
}
</style>

<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      senha: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'dark',
          textColor: 'white',
          icon: 'warning',
          message: 'Você precisa estar de acordo com nossos Termos de Uso e Política de Privacidade'
        })
      } else {
        this.$q.notify({
          color: 'dark',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}</script>
