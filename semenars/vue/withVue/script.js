var vm = new Vue({
el: "#app",
data: {
    number: 1 
},
merhods: {
    double: function(event) {
        console.log(event);
        this.number *=2;
    }

}
});