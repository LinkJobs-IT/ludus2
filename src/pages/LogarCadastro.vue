<template>
  <q-layout id="qp-form">

    <q-header none class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round color="accent" icon="arrow_back_ios" @click="left = !left" to="Login"/>
      </q-toolbar>
    </q-header>

      <q-page padding class="container justify-center">
      <div class="row justify-center">

      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-4">
        <header>
          <h2 class="row justify-center font-titulo text-dark">
            cadastro
          </h2>
        </header>

        <q-input
          type="text"
          label="usuário"
          label-color="secondary"
          color="dark"
          text-color="dark" />

        <q-input
          type="text"
          label="email"
          label-color="secondary"
          color="dark" />

        <q-input
          type="password"
          label="senha"
          label-color="secondary"
          color="dark"
          text-color="dark" />

          <q-input
          type="password"
          label="confirme sua senha"
          label-color="secondary"
          color="dark"
          text-color="dark" />

          <div class="q-gutter-sm" style="padding: 20px;">
            <q-checkbox
              v-model="customModel"
              color="dark"
              label="Concordo com a Política de Privacidade e Termos de uso"
              true-value="yes"
              false-value="no"
            />
            </div>

            <div class="q-gutter-sm">

          </div>

          <div class="row flex-center" style="padding: 5px;">
            <q-btn
              label="criar conta"
              class="q-ml-sm"
              color="accent"
              text-color="dark"/>
              </div>

        </div>
        </div>
    </q-page>

  </q-layout>
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
</style>

<script>
export default {
  name: 'layoutCadastro',

  data () {
    return {

      customModel: 'no'
    }
  }
}
</script>
