import Vue from "vue";
import VueRouter from "vue-router";
import Trending from "../views/Trending";
import About from "../views/AboutUs";
import Products from "../views/Products";
import Contact from "../views/Contact";
import Details from "../views/Details";
import Questions from "../views/Questions";
import Error from "../views/Error404";
import MiCarrito from "../views/MiCarrito";
import MiCuenta from "../views/MiCuenta";
import AddProduct from "../views/AddProduct";
import UpdateProduct from "../views/UpdateProduct";
import CreateUser from "../views/CreateUser";
import UpdateUser from "../views/UpdateUser";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Trending",
        component: Trending,
    },
    {
        path: "/nosotros",
        name: "Nosotros",
        component: About,
    },
    {
        path: "/ropa",
        name: "Ropa",
        component: Products,
    },
    {
        path: "/contacto",
        name: "Contacto",
        component: Contact,
    },
    {
        path: "/preguntas",
        name: "Preguntas",
        component: Questions,
    },
    {
        path: "/detalles",
        name: "Detalles",
        component: Details,
    },
    {
        path: "/carrito",
        name: "MiCarrito",
        component: MiCarrito,
    },
    {
        path: "/cuenta",
        name: "MiCuenta",
        component: MiCuenta,
    },
    {
        path: "/user/agregar-producto",
        name: "Agregar-productos",
        component: AddProduct,
    },
    {
        path: "/user/actualizar-producto",
        name: "Actualizar-producto",
        component: UpdateProduct,
    },
    {
        path: "/crear-ususario",
        name: "Crear usuario",
        component: CreateUser,
    },
    {
        path: "/user/actualizar-ususario",
        name: "Actualizar usuario",
        component: UpdateUser,
    },
    {
        path: "/*",
        name: "Error",
        component: Error,
    },
];

const router = new VueRouter({
    index: "/default.html",
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;