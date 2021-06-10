 <template id="qp-form">
  <q-page-container>
    <div class=" font-titulo row text-h4" style="padding-left: 20px; padding-top: 10px;">
      Imprensa
    </div> <br/>

    <div>
        <q-badge color="dark"> Sua Pesquisa: "{{ search }}" </q-badge>
      </div>

      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

    <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
    >

    <q-carousel-slide name="first" img-src="https://nerdbreak.com.br/wp-content/uploads/2019/06/shark-tank-001.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Ludus Participa da 7º Edição do Shark Tank Brasil</div>
          <div class="text-subtitle1">Start-up fecha parceria com uma das maiores investidoras anjo do país!</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="second" img-src="https://thumbs.dreamstime.com/b/new-update-sign-grunge-stamp-label-176839126.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Ludus Ganha sua Nova Versão 2.0</div>
          <div class="text-subtitle1">Disponivel para ios e Android</div>
        </div>

      </q-carousel-slide>
      <q-carousel-slide name="second"
        img-src="https://www.ifsudestemg.edu.br/noticias/reitoria/cursos-do-if-sudeste-mg-recebem-nota-maxima-em-avaliacao-de-reconhecimento-do-mec-1/avaliacao-mec-nota-maxima-01.png/@@images/image.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">Ludus é avaliado melhor app de Educação pelo MEC</div>
          <div class="text-subtitle1">Mídia</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </q-page-container>
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
      slide: 'first',
      search: ''
    }
  }
}
</script>
