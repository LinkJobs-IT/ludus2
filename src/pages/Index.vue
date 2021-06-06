<template>
  <q-page style="padding:3em" class="container justify-center">
    <div class="items-center col-xs-12 col-sm-6 col-md-6 col-lg-4 q-gutter-md">
    <h3 class="font-titulo flex flex-center" style="color: #0d0632;">Disciplinas</h3>
    <q-btn no-caps
    class="font-titulo"
    text-color="accent"
    size="35px"
    color="dark">
    Português
    </q-btn>

    <q-btn no-caps
    class="font-titulo"
    size="35px"
    color="accent"
    text-color="dark">
        Matemática
    </q-btn>
    <q-btn no-caps
    class="font-titulo"
    size="35px"
    color="dark"
    text-color="accent">
        História
    </q-btn>

    <q-btn no-caps
    class="font-titulo"
    size="35px"
    color="accent"
    text-color="dark">
        Geografia
    </q-btn>

    <q-btn no-caps
    class="font-titulo"
    size="35px"
    color="dark"
    text-color="accent">
        Ciências
    </q-btn>

    <q-btn no-caps
    class="font-titulo"
    size="35px"
    color="accent"
    text-color="dark">
        Artes
    </q-btn>
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
</style>

<script>
export default {
  name: 'PageIndex'

}
</script>
