
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      { path: 'LogarCadastro', component: () => import('pages/LogarCadastro.vue') },
      { path: 'Redefinir', component: () => import('pages/Redefinir.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
