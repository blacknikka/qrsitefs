<template>
  <div class="mainpage">
    <h2>Main Page</h2>

    <div>
      <button id="show-modal" @click="showModal = true">QRリーダー起動</button>
      <modal-qr v-if="showModal" @close="closed" />
      <div v-cloak>{{qrData}}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ModalQR from './Items/ModalWindowQR';
import axios from 'axios';

Vue.component('modal-qr', ModalQR);

export default {
  data() {
    return {
      showModal: false,
      qrData: ''
    };
  },
  methods: {
    closed(qrData) {
      // showModalをfalseにして画面を消去
      this.showModal = false;

      if (typeof qrData !== 'undefined') {
        // qrの読み込みデータを表示
        console.log(qrData);
        this.qrData = qrData;
      }

      // POST using axios
      // axios.post('http://localhost:3000/data', qs.stringify({ 'bar': 123 }));

      if (typeof this.$route.params['token'] !== 'undefined') {
        const post = {
          token: this.$route.params['token']
        };
        axios({
          method: 'POST',
          url: 'http://localhost:3000/data',
          data: post
        }).then(response => console.log(response.status));
      }
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
</style>
