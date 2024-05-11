import { createRouter, createWebHistory } from "vue-router";
import InstapowerFormulario from "../views/InstapowerFormulario.vue";
import DetalheView from "../views/DetalheView.vue";

const routes = [
  {
    path: "/instapower-formulario",
    name: "instapower-formulario",
    component: InstapowerFormulario,
  },
  {
    path: "/detalhes",
    name: "detalhes",
    component: DetalheView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
