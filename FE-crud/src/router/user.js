const user = [
    {
        path: "/user",
        component: () => import('../layout/users.vue'),
        children: [
            {
                path: 'home',
                name: 'user-home',
                component: () => import('../pages/users/home/home.vue')
            },
            {
                path: 'product',
                name: 'user-product',
                component: () => import('../pages/users/product/product.vue')
            },
            {
                path: 'about',
                name: 'user-about',
                component: () => import('../pages/users/about/about.vue')
            },
            {
                path: 'contact',
                name: 'user-contact',
                component: () => import('../pages/users/contact/contact.vue')
            },
            {
                path: 'login',
                name: 'user-login',
                component: () => import('../components/user/Login.vue')
            },
            {
                path: 'register',
                name: 'user-register',
                component: () => import('../components/user/Register.vue')
            },
            {
                path: 'detailproduct/show/:id',
                name: 'products-detailproduct',
                component: () => import('../components/user/DetailProduct.vue')
            }


        ]
    }
]
export default user