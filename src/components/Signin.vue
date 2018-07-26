<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input v-model="mail" type="text" placeholder="E-mail">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="signIn">Signin</button>

    <div v-if="error.isError">
      <!-- error message -->
      <p v-cloak style="color : red;">{{error.errorMessage}}</p>
    </div>
  </div>
</template>

<script>
import Dbg from './Util/Debug';
import fbMan from './Util/firebase';

export default {
  name: 'Signin',
  data() {
    return {
      mail: '',
      password: '',
      error: {
        isError: false,
        errorMessage: ''
      }
    };
  },
  methods: {
    signIn: async function() {
      Dbg.console('clicked');

      if (this.mail && this.password) {
        // mail, password is not null
        // then check mail
        if (this.mail.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/)) {
          // mail adress validation
          // GET /someUrl

          if ((await fbMan.CheckUser(this.mail, this.password)) === true) {
            this.InitError();

            // when login sucess, go to data page.
            this.$router.push({
              name: 'MainPage'
            });
          } else {
            Dbg.console('login error');
            this.DoError(
              'email or password is failed. please verify the input data.'
            );
          }
        } else {
          this.DoError(`${this.mail} is not E-mail. please check.`);
        }
      } else {
        this.DoError('Enter mail and password !!!');
      }
    },

    DoError: function(msg) {
      this.error.isError = true;
      this.error.errorMessage = msg;
    },

    InitError: function() {
      this.error.isError = false;
      this.error.errorMessage = '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
