<template>
  <div class="mainpage">
    <h2>Main Page</h2>

    <div>
      <button id="show-modal" @click="showModal = true">QRリーダー起動</button>
      <modal-qr v-if="showModal" @close="closed" />
      <div v-cloak>{{qrData}}</div>
    </div>

    <machine-list-container v-if="isData" :list="list" />
  </div>
</template>

<script>
import Vue from 'vue';
import ModalQR from './Items/ModalWindowQR';
import fbMan from './Util/firebase';
import Dbg from './Util/Debug';
import MachineListItem from './Items/MachineListItem';
import MachineListContainer from './Items/MachineListContainer';

Vue.component('modal-qr', ModalQR);
Vue.component('machine-list-item', MachineListItem);
Vue.component('machine-list-container', MachineListContainer);

export default {
  data() {
    return {
      showModal: false,
      qrData: '',
      list: {},
      isData: false
    };
  },
  mounted() {
    this.closed('');
  },
  methods: {
    async closed(qrData) {
      // showModalをfalseにして画面を消去
      this.showModal = false;

      if (typeof qrData !== 'undefined') {
        // qrの読み込みデータを表示
        Dbg.console(qrData);
        this.qrData = qrData;
      }

      const machineDatas = await fbMan.GetData('');
      this.isData = true;

      this.list = [];
      for (const key in machineDatas) {
        if (machineDatas.hasOwnProperty(key)) {
          this.list.push(machineDatas[key]);
        }
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
