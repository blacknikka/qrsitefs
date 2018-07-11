<template>
  <div class="mainpage">
    <h2>Main Page</h2>

    <!-- <button @click="qrcode">QRCodeリーダー起動</button> -->

    <my-compo />

    <div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <modal-item v-if="showModal" @close="showModal = false">
        aaa
      </modal-item>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Test2 from "./Items/Test";
import Modal from "./Items/ModalWindow";

Vue.component("my-compo", Test2);
Vue.component("modal-item", Modal);

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
