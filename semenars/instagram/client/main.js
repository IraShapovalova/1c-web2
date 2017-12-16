var Vue = require("vue");
var VueRouter = require("vue-router");
var VueResource= require("vue-resource");
var VueJwtMongo = require(vue-jwt-mongo)
var Register = require("./components/register.vue");
Vue.use(VueRouter);
vue.use(VueJwtMongo.Client)

var router = new VueRouter();

router.map({
    "/register": {component: Register}
});

router.start(Vue.extend({}), "#app");