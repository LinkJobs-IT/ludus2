<template>
<q-page>
  <q-page padding>

    <div class="q-pa-md q-gutter-y-sm">

    <q-toolbar class="text-dark">

      <q-btn flat round icon="west" to="/" />
      <q-toolbar-title>

      </q-toolbar-title>

      <!-- <q-btn flat round dense icon="manage_accounts" /> -->
      <q-btn color="dark" round icon="manage_accounts">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
        >
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
   </q-page>
  </q-page>

</template>

<script>
export default {
  name: 'PagPerfil',
  data () {
    return {}
  }
}
</script>
