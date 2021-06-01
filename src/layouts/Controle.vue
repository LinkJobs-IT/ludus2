<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
    </q-page-container>
    <router-view/>

  </q-layout>
</template>
<script>
export default {
  // name: 'PageName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
