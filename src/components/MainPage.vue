<template>
  <div class="mainpage">
    <h2>Main Page</h2>

    <my-compo />

    <div>
      <button id="show-modal" @click="showModal = true">QEリーダー起動</button>
      <modal-qr v-if="showModal" @close="showModal = false" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Test2 from './Items/Test';
import ModalQR from './Items/ModalWindowQR';

Vue.component('my-compo', Test2);
Vue.component('modal-qr', ModalQR);

export default {
  data() {
    return {
      showModal: false
    };
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
