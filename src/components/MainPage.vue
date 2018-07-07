<template>
  <div class="mainpage">
    <h2>Main Page</h2>
    <button @click="qrcode">QRCodeリーダー起動</button>

    <div class="qrdisp" v-if="qrActive">
    </div>
    <p>You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      qrActive: false
    };
  },
  methods: {
    qrcode: function() {
      this.qrActive = true;
    }
  }
};
</script>

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
.qrdisp {
  margin-top: 20px;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
