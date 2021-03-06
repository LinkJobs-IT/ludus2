
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      { path: 'LogarCadastro', component: () => import('pages/LogarCadastro.vue') },
      { path: 'Sobre', component: () => import('pages/Sobre.vue') },
      { path: 'Contatos', component: () => import('pages/PaginaContatos.vue') },
      { path: 'Noticias', component: () => import('pages/PaginaNoticias.vue') },
      { path: 'Perfil', component: () => import('pages/PaginaPerfil.vue') },
      { path: 'EditarPerfil', component: () => import('pages/EditarPerfil.vue') },
      { path: 'NovaSenha', component: () => import('pages/RedefinirSenha.vue') },
      { path: 'Config', component: () => import('pages/PaginaConfig.vue') }
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
