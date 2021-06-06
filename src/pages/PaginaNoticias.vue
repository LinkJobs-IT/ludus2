 <template id="qp-form">
  <q-page>
    <div class=" font-titulo row text-h4" style="padding-left: 20px; padding-top: 10px;">
      Imprensa
    </div> <br/>
    <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="../../public/ludus-images/logo_ludus.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Ludus Ganha sua Nova Versão 2.0</div>
          <div class="text-subtitle1">Disponivel para ios e Android</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second"
        img-src="https://lh3.googleusercontent.com/proxy/BZ37NaxL7NRfbhH-jCBO43OtfqayNsrI52WuKeZLgRENgJaN4_bsqoyvCILh4CDzZ-hFEeqAJxVHHl-gBXtRUd6eLhAlmG6yY71kgaEOa9vldfX7UUv-EsuUnQ">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Ludus é avaliado melhor app de Educação pelo MEC</div>
          <div class="text-subtitle1">Mídia</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://nerdbreak.com.br/wp-content/uploads/2019/06/shark-tank-001.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Ludus Participa da 7º Edição do Shark Tank Brasil</div>
          <div class="text-subtitle1">Start-up fecha parceria com uma das maiores investidora anjo do país!</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </q-page>
  </template>
  <style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

<script>
export default {
  // name: 'PaginaNoticias',
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>
