<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input v-model="username" type="text" placeholder="Username">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="signUp">Register</button>
    <p>Do you have an account?
      <router-link to="/">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    signUp: function() {
      console.log('clicked');

      // GET /someUrl
      this.$http.get('http://localhost:3000/signup').then(
        response => {
          // get body data
          console.log(response.body);
        },
        response => {
          // error callback
          console.log('error');
        }
      );
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
.signup {
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
