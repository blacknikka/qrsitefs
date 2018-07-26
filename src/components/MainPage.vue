<template>
  <div class="mainpage">
    <h2>Main Page</h2>

    <div>
      <button id="show-modal" @click="showModal = true">QRリーダー起動</button>
      <modal-qr v-if="showModal" @close="closed" />
      <div v-cloak>{{qrData}}</div>
    </div>

    <div v-if="isData">
      <machine-list-item v-for="(item, index) in list" :data="item" :key="index" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ModalQR from './Items/ModalWindowQR';
import fbMan from './Util/firebase';
import Dbg from './Util/Debug';
import MachineListItem from './Items/MachineListItem';

Vue.component('modal-qr', ModalQR);
Vue.component('machine-list-item', MachineListItem);

export default {
  data() {
    return {
      showModal: false,
      qrData: '',
      list: [],
      isData: false
    };
  },
  methods: {
    async closed(qrData) {
      // showModalをfalseにして画面を消去
      this.showModal = false;

      if (typeof qrData !== 'undefined') {
        // qrの読み込みデータを表示
        console.log(qrData);
        this.qrData = qrData;
      }

      const machineDatas = await fbMan.GetData('');
      this.isData = true;
      Dbg.console(machineDatas);
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
