<template>
  <q-page class="font-titulo">
    <div class="q-pa-md q-gutter-sm font-titulo">
      <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
    <div>Equipe Ludus</div>
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-img
              src="../../public/ludus-images/thayanne-tenorio.jpeg"
                alt="logo do ludus"
                />
        <div class="q-mt-md text-center">
          {{ dev1 }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ dev2 }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ dev3 }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ dev4 }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
          { label: 4, value: 'map' }
        ]"
      />
    </div>
  </div>
    <q-btn label="Políticas de Privacidade" color="dark" @click="politicas = true" />

    <q-dialog v-model="politicas">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Políticas de Privacidade</div>
          <q-space />
          <q-btn no-caps icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
            Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!

            Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?

            Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-btn label="Termos de Uso" color="dark" @click="termos = true" />

    <q-dialog v-model="termos">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Termos de Uso</div>
          <q-space />
          <q-btn no-caps icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
        Cushioning aresto protego anapneo. Stupefy mobilicorpus pepperup mobilicorpus sonorus quietus me concealment stupefy aresto. Prior unctuous sonorus wingardium aresto finite incarcerous quietus. Inflamarae expelliarmus unctuous patronum sonorus aparecium. Wolfsbane rictusempra quodpot tarantallegra apparate anapneo locomotor. Aparecium aparecium impedimenta finite rictusempra. Charm- impedimenta protego silencio. Aguamenti momentum totalus locomotor.
        Arania petrificus imperio aparecium tarantallegra reducio. Reducio aparecium conjunctivitis arania quietus alohomora funnunculus mortis peskipiksi patronum. Immobilus charm- incarcerous inflamarae legilimens elixir evanesco sonorus inflamarae. Petrificus quietus reducio lumos reparo wingardium dissendium. Nox imperio furnunculus aresto funnunculus legilimens patronum. Mobilicorpus waddiwasi expecto relashio riddikulus serpensortia serpensortia patronum evanesco sonorus. Felicis lumos alohomora.
        </q-card-section>

      </q-card>
    </q-dialog>
    </div>
  </q-page>
</template>
<style type="text/css">

.font-titulo {
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
}
</style>

<script>
export default {
  name: 'PaginaSobre',
  data () {
    return {
      politicas: false,
      termos: false,
      slide: 'style',
      dev1: 'Thayanne Tenorio - Front-end Developer',
      dev2: 'Carlos Rafael- Full-Stack Developer & Data Scientist & Scrum Master',
      dev3: 'Layon Figueiroa- Back-end Developer & Data Scientist ',
      dev4: 'Melissa Assis- UX Designer',
      lorem: ''
    }
  }
}
</script>
