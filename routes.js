const routes = [
    { path: '/', name: 'Contact_Book', component: Contact_Book },
    { path: '/contact/:id', name: 'Contact', component: Contact, props: true },
    { path: '/new', name: 'New', component: New },
    { path: '/edit/:id', name: 'Edit', component: Edit, props: true },
]

const router = new VueRouter({
    routes: routes
})