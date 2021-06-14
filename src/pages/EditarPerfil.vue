<template>
<q-page>
  <q-toolbar class="text-dark">

      <q-btn flat round icon="west" to="Perfil" />
  </q-toolbar>
  <div class="row">
    <div class="row col-md-8 offset-md-2">
      <div class=" font-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12 text-h4" style="padding-left: 20px; padding-top: 10px; padding-bottom: 20px;">
        Editar Perfil
      </div> <br/>
      <q-input style="width:500px; padding-left: 20px;"
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-left"
          label="Mudar Nome"
          v-model="nome"
          :dense="dense"/>

      <div  class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

        <div class=" font-titulo q-pa-md size-sm col-xs-12 col-sm-12 col-md-12 col-lg-12 text-h4">
            Editar Bio
          <q-input
          style="max-width: 500px"
            v-model="ChangeBio"
            filled
            type="textarea"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Digite sua mensagem!']"
          />

        </div>
        <div  style="padding-left: 10px; padding-top: 30px; padding-bottom: 20px;"
               class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <q-btn
            label="Atualizar"
            type="submit"
            color="dark"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="row" style="margin-top: 40px;">
    <div class="row col-md-8 offset-md-2">
      <div class="font-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12 text-h4"
       style="padding-left: 20px; padding-top: 20px; padding-bottom: 20px;">  Nova Foto de Perfil</div>

      <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
            <q-uploader
              style="max-width: 400px"
              url="http://localhost:4444/upload"
              label="Restricted to images"
              color="dark"
              multiple
              accept=".jpg, image/*"
              @rejected="onRejected"
            />
        </div>
      </div>
      <div  style="padding-left: 10px; padding-top: 30px; padding-bottom: 20px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <q-btn no-caps
          label="Atualizar Foto"
          type="submit"
          color="dark"
        />
        </div>
      </div>
    </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      ChangeBio: null,
      email: '',
      dense: false,
      nome: null
    }
  },
  methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }
  }

}
</script>
