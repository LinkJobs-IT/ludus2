<template>
  <q-page padding>
    <div class="row">
      <q-toolbar class="text-dark">

      <q-btn flat round icon="west" to="Perfil" />
      </q-toolbar>
      <div class="row col-md-8 offset-md-2">
        <div class=" font-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12 text-h4" style="padding-left: 20px; padding-top: 10px; padding-bottom: 20px;">
          Nova Senha
        </div>
        <q-input style="width:500px; padding-left: 20px;"
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-center"
            label="Digite senha atual"
            v-model="senhaAntiga"
            :dense="dense"
            type="password"/>

        <q-input style="width:500px; padding-left: 20px;"
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-center"
          label="Digite nova senha"
          v-model="NovaSenha"
          :dense="dense"
          type="password"/>
        <q-input style="width:500px; padding-left: 20px;"
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-center"
          label="Confirme nova senha"
          v-model="ConfirmarSenha"
          :dense="dense"
          type="password"/>
        <div class="row col-md-8 offset-md-2" style="padding-top: 10px">
          <q-btn
          label="Confirmar"
          class="q-ml-sm"
          color="dark"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageName',
  data () {
    return {
      senhaAntiga: '',
      NovaSenha: '',
      ConfirmarSenha: '',
      dense: false
    }
  }
}
</script>
