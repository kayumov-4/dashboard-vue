import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "admin",
      component: () => import("@admin/Layout.vue"),

      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@admin/Dashboard/Dashboard.vue"),
        },
        {
          path: "/dashboard/students",
          name: "students",
          component: () => import("@admin/Students/Students.vue"),
        },
        {
          path: "/dashboard/courses",
          name: "courses",
          component: () => import("@admin/Courses/Courses.vue"),
        },
        {
          path: "/dashboard/customers",
          name: "customers",
          component: () => import("@admin/Customers/Customers.vue"),
        },
        {
          path: "/dashboard/services",
          name: "services",
          component: () => import("@admin/Services/Services.vue"),
        },
        {
          path: "/dashboard/settings",
          name: "settings",
          component: () => import("@admin/Settings/Settings.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "home",
      component: () => import("@user/Layout.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@auth/Login/Login.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@error/Error.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (
    (to.name == "dashboard" ||
      to.name == "students" ||
      to.name == "courses" ||
      to.name == "customers" ||
      to.name == "services") &&
    !localStorage.getItem("token")
  ) {
    next({ name: "login" });
  }
  next();
});

export default router;
