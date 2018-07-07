<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="E-mail" v-model="mail">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>

    <div v-if="error.isError">
      <!-- error message -->
      <p style="color : red;" v-cloak>{{error.errorMessage}}</p>
    </div>
    <p>You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signin",
  data() {
    return {
      mail: "",
      password: "",
      error: {
        isError: false,
        errorMessage: ""
      }
    };
  },
  methods: {
    signIn: function() {
      console.log("clicked");

      if (this.mail && this.password) {
        // mail, password is not null
        // then check mail
        if (this.mail.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/)) {
          // mail adress validation
          // GET /someUrl

          const url = `http://localhost:3000/signin?mail=${this.mail}&psw=${
            this.password
          }`;

          axios
            .get(url)
            .then(response => {
              // get body data
              console.log(response);
              this.InitError();
            })
            .catch(error => {
              console.log(error);
              this.DoError("Error occured !!!");
            });
        } else {
          this.DoError(`${this.mail} is not E-mail. please check.`);
        }
      } else {
        this.DoError("Enter mail and password !!!");
      }
    },

    DoError: function(msg) {
      this.error.isError = true;
      this.error.errorMessage = msg;
    },

    InitError: function() {
      this.error.isError = false;
      this.error.errorMessage = "";
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
