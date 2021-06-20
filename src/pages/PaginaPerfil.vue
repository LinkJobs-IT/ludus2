<template>
<q-page>
  <div class="q-pa-md q-gutter-y-sm">
    <q-toolbar class="text-dark">
      <q-btn flat round icon="west" to="/" />
        <q-toolbar-title>
        </q-toolbar-title>
      <q-btn color="dark" round icon="manage_accounts">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up">
          <q-list style="min-width: 100px">
              <q-item clickable to="EditarPerfil">
                <q-item-section>Editar Perfil</q-item-section>
              </q-item>
              <q-item clickable to="NovaSenha">
                <q-item-section>Redefinir Senha</q-item-section>
              </q-item>
            <q-separator />
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </div>
  <!-- Friend List -->
  <q-toolbar>
  <div class="row">
       <q-btn-dropdown style="margin-left:50px;" color="dark" label="Lista de Amigos">
          <q-list>
            <q-item clickable v-close-popup  v-ripple v-for="user in users" :key="user.name">
              <q-item-section>
                <q-item-label>Thayanne Tenório{{}}</q-item-label>
              </q-item-section>
              <q-avatar>
                <img src="../../public/ludus-images/thayanne-tenorio.jpeg">
              </q-avatar>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- User search -->
      <div class="justify-right" style="margin-left: 800px; margin-top:50px">
        <q-input type="search"
            style="padding-bottom: 25px"
            v-model="users"
            debounce="500"
            filled
            @keyup="searchUser"
            placeholder="Pesquisar usuário"
            >
              <template v-slot:append>
                  <q-icon @click="searchUser" color="primary" name="search" />
              </template>
        </q-input>
      </div>
  </q-toolbar>
<!-- User Info -->
  <div class="row justify-center">
    <q-avatar size="200px">
      <img src="../../public/ludus-images/thayanne-tenorio.jpeg">
    </q-avatar>
  </div>
    <div class="row justify-center">
      <q-item clickable v-ripple>
          <q-item-section class="text-center">
            <q-item-label style="padding: 5px;" class="text-bold">{{user}}</q-item-label>
            <q-item-label  style="text-weight-medium">{{bio}}</q-item-label>
          </q-item-section>
        </q-item>
    </div>
<!-- Post section and friends list bellow -->
  <section style="padding-top: 5em;" class="row">
      <div class="col-md-6 offset-md-3 q-gutter-md">
        <p class="text-h5">Olá! O que há de novo?</p>
        <q-input v-model="posts.content" filled autogrow/>
        <q-btn color="secondary" label="Postar" unelevated rounded @click="sendPost" />
        <hr>
        <section>
          <q-list bordered class="q-mb-md" v-for="allPost in allPosts" :key="allPost.id">
            <q-item>
              <q-item-section top avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6">{{allPost.userId}}</q-item-label>
                <q-item-label>{{allPost.content}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <div class="q-gutter-sm">
                <q-checkbox v-model="likes" label="Curtir" />
              </div>
            </q-item>

            <q-item-section>
              <q-item-label class="text-subtitle2 text-right q-mr-sm">Postado em: {{allPost.createdAt}}</q-item-label>
            </q-item-section>
          </q-list>
        </section>
      </div>
    </section>

  </q-page>

</template>

<script>
export default {
  name: 'PagPerfil',
  data () {
    return {
      user: '@thay.rainha',
      bio: '22, Pernambucana e deva em desenvolvimento!',

      posts: {
        content: ''
      },
      allPosts: [],
      users: [],
      likes: false
    }
  },
  methods: {
    sendPost () {
      const url = ''
      this.$axios.post(url, this.posts)
        .then(response => {
          console.log(response.data)
          this.posts.content = ''
          this.$q.notify({
            message: 'Postagem adicionada com sucessso!',
            color: 'positive',
            position: 'bottom'
          })
          this.$emit('listarPosts')
        })
        .catch(error => {
          console.error(`Error: ${error}`)
          this.$q.notify({
            message: 'Ocorreu um erro ao adicionar a postagem!',
            color: 'negative',
            position: 'bottom'
          })
        })
    },
    listPosts () {
      const url = ''
      this.$axios.get(url)
        .then(response => {
          this.allPosts = response.data
        })
        .catch(error => {
          console.error(`Error: ${error}`)
        })
    },
    listUsers () {
      const urlUsers = ''
      this.$axios.get(urlUsers)
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error(`Error: ${error}`)
        })
    },
    searchUser () {
      const url = ''
      this.$axios.get(url)
        .then(response => {
          this.users = response.data
        })
    }
  },
  beforeMount () {
    this.listPosts()
    this.listUsers()
  }
}
</script>
