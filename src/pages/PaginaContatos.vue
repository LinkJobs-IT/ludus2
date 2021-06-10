<template id="qp-form">
<q-page>
  <div class="row">
    <div class=" font-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12 text-h4" style="padding-left: 20px; padding-top: 10px;">
      Mensagem
    </div> <br/>
      <q-input style="width:300px; padding-left: 20px;"
          class="col-xs-12 col-sm-6 col-md-6 col-lg-12 justify-left"
          label="Digite seu nome"
          v-model="nome"
          :dense="dense"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '']" />

      <q-input style="width:300px; padding-left: 20px;"
         class="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-left"
         label="Digite seu email"
         v-model="email"
         :dense="dense"
         lazy-rules
        :rules="[ val => val && val.length > 0 || '']" />

<div  class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

  <div class="q-pa-md size-sm col-xs-12 col-sm-12 col-md-12 col-lg-12">

    <q-input
      v-model="mensagem"
      filled
      type="textarea"
      lazy-rules
        :rules="[ val => val && val.length > 0 || 'Digite sua mensagem!']"
    />

  </div>

      <div class="text-right">
        <q-btn no-caps
         label="Enviar Mensagem"
         type="submit"
         color="dark"
         />
      </div>

    </div>

    <hr style="margin:15px">

    <div class="font-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12 text-h4" style="padding-left: 20px; padding-top: 20px; padding-bottom: 20px;"> Trabalhe conosco</div>

      <div style=" width:400px;" class="q-pa-md size-lg">
      <q-input
        @input="val => { file = val[0] }"
        filled
        type="file"
        hint="Anexe seu Currículo nos formatos .doc , .docx ou .pdf"
      />
      <div style="padding-top: 30px; padding-bottom: 20px;" class="text-right">
        <q-btn no-caps
         label="Enviar Anexo"
         type="submit"
         color="dark"
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
  font-weight: 700;}

</style>

<script>
export default {
  data () {
    return {
      mensagem: null,
      email: '',
      dense: false,
      nome: null
    }
  }
}
</script>
