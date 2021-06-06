<template>
  <q-layout view="lHh Lpr lFf" id="qp-form">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="font-titulo"
        >
         <p>MENU</p>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
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
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Sobre',
    caption: 'Equipe, Termos de Uso, Política de Privacidade',
    icon: 'info',
    link: 'Sobre'
  },
  {
    title: 'Jogo',
    caption: '',
    icon: 'sports_esports',
    link: ''
  },
  {
    title: 'Contato',
    caption: 'Trabalhe conosco, mensagens',
    icon: 'email',
    link: 'Contatos'
  },
  {
    title: 'Notícias',
    caption: 'Pesquisar, imprensa',
    icon: 'article',
    link: 'Noticias'
  },
  {
    title: 'Sair',
    caption: 'Sair do Ludus',
    icon: 'logout',
    link: 'Login'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
