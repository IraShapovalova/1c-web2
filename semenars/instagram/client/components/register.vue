

<tamplete>
        <div class="focus">
    <form class="focus_holber" v-on:keydown.enter="register">
                
                        <input type="text" class="form-control" placeholder="Логин" v-model="username">
                        <input type="password" class="form-control"  placeholder="Пароль" v-model="passwordA">
                        <input type="password" class="form-control"  placeholder="Повтор пароля" v-model="passwordB">
                        <button type="submit" class="btn btn-primary btn-block">Зарегестрироваться!</button>
              </form>
              </div>
</tamplete>

<script>
 module.export = {
     data: function(){
         return {
           username: "",
           passwordA = "",
           passwordB = ""
         };
     },
     methods: {
         register: function() {
             if (this.passwordA === this.passwordB){
                 this.$auth.register(this.username, this.passwordA).then(
                     function() {
                         this.$router.go("/login")
                     }
                   
                 );
             }
         }
     }
 }
</script>


