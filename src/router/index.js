import {
  createRouter,
  createWebHistory
} from "vue-router";
import {
  useStore
} from "../stores/lang.js";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: {
          hun: "Pap András | Főoldal",
          eng: "András Pap | Home",
        },
        requiredAuth: false,
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      meta: {
        title: {
          hun: "Pap András | Admin",
          eng: "András Pap | Admin",
        },
        requiredAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useStore();

  store.getIsAdmin();

  const {
    isAdmin
  } = store;

  if (to.meta.requiredAuth && !isAdmin) {
    router.replace("/");
  }

  next();
});

export default router;