<template>

    <q-page id="qp-form" style="padding:3em" class="container justify-center">
    <div class="row flex-center">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <header class="logo-data">
          <q-img
              src="../../public/ludus-images/logo_ludus.png"
                alt="logo do ludus"
                />
          </header>
        <q-input
          style="margin: 1em;"
          rounded outlined
          v-model="user.username"
          type="text"
          label="email"
          label-color="secondary"
          color="dark"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Digite alguma coisa']" />

        <q-input
          style="margin: 1em;"
          rounded outlined
          v-model="user.password"
          type="password"
          label="senha"
          label-color="secondary"
          color="dark"
          text-color="dark"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Digite alguma coisa']" />

    <div class="row flex-center">
            <q-btn
              label="LOGAR"
              @click="logar"
              class="q-ml-sm"
              color="dark"/>
    </div>

    <div class="row flex-center">
      <q-btn
      flat to="Redefinir"
      color="dark"
      label="Esqueceu sua senha?"
      style="margin: 20px;"
       />
    </div>

    <div class="row flex-center">
      <q-btn
      flat to="LogarCadastro"
      color="dark"
      label="Não tem uma conta?"
       />
    </div>

    </div>
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
}
.logo-data{
  padding: 2px;
  height: 140px;
  max-width: 220px;
  display: block;
  margin: auto;
}
</style>

<script>
export default {
  name: 'layoutControle',
  data () {
    return {
      user: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    logar () {
      const userBd = {
        username: 'thaylinda',
        password: 'rainha123'
      }
      if (this.user.username === userBd.username && this.user.password === userBd.password) {
        this.$q.notify({
          message: 'Entrando...',
          color: 'dark'
        })
      } else {
        this.$q.notify({
          message: 'Senha ou usuário incorreto',
          color: 'dark'
        })
      }
    }
  }
}
</script>
