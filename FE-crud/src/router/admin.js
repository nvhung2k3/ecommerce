const admin = [
  {
    path: "/admin",
    component: () => import("../layout/admin.vue"),
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("../pages/admin/users/index.vue"),
      },
      {
        path: "products",
        name: "admin-products",
        component: () => import("../pages/admin/products/index.vue"),
      },
      {
        path: "settings",
        name: "admin-settings",
        component: () => import("../pages/admin/settings/index.vue"),
      },
      {
        path: "product/add",
        name: "admin-product-add",
        component: () => import("../components/Admin/AddProduct.vue"),
      },
      {
        path: "product/edit/:id",
        name: "admin-product-edit",
        component: () => import("../components/Admin/AddProduct.vue"),
      },
    ],
  },
];

export default admin;
