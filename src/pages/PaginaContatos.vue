<template id="qp-form">
<q-page>
    <div class=" font-titulo row text-h4" style="padding-left: 20px; padding-top: 10px;">
      Mensagem
    </div> <br/>
      <q-input style="width:300px; padding-left: 20px;"
          class="row justify-left"
          label="Digite seu nome"
          v-model="nome"
          :dense="dense"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '']" />

      <q-input style="width:300px; padding-left: 20px;"
         class="row justify-left"
         label="Digite seu email"
         v-model="text"
         :dense="dense"
         lazy-rules
        :rules="[ val => val && val.length > 0 || '']" />

<div  class="row justify-left">

    <q-form class="q-gutter-md">

  <div class="q-pa-md size-lg" style="width:800px">

    <q-input
      v-model="text"
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
    </q-form>
    </div>
    <hr style="margin:15px">
    <div class="font-titulo row text-h4" style="padding-left: 20px; padding-top: 20px; padding-bottom: 20px;"> Trabalhe conosco</div>

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
      text: '',
      dense: false,
      nome: null
    }
  }
}
</script>
