<template>
  <transition appear>
    <div class="flex-container">
      <span :class="{'title-container' : isTitle}" class="list-container" style="flex:1">
        <li>{{id}}</li>
      </span>
      <span :class="{'title-container' : isTitle}" class="list-container" style="flex:1">
        <li>{{dbdata.data}}</li>
      </span>
      <span :class="{'title-container' : isTitle}" class="list-container" style="flex:2">
        <li>{{date}}</li>
      </span>
      <span :class="{'title-container' : isTitle}" class="list-container" style="flex:2">
        <li>{{time}}</li>
      </span>
      <span :class="{'title-container' : isTitle}" class="list-container" style="flex:2">
        <li>{{dbdata.value1}}</li>
      </span>
      <span :class="{'title-container' : isTitle}" class="list-container" style="flex:2">
        <li>{{dbdata.value2}}</li>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    dbdata: {
      type: Object,
      default: function() {
        return {};
      }
    },
    kind: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      date: '',
      time: '',

      // judge title , true or false
      isTitle: false
    };
  },
  mounted() {
    if (typeof this.kind !== 'undefined') {
      this.isTitle = this.kind === 'title';
    }

    if (this.isTitle === true) {
      this.date = 'date';
      this.time = 'time';
    } else {
      this.FromTimeStampToDate(this.dbdata.date);
    }
  },
  methods: {
    FromTimeStampToDate(date) {
      const d = new Date(date.seconds * 1000);
      const year = d.getFullYear();
      const month = `0${d.getMonth() + 1}`.slice(-2);
      const day = `0${d.getDate()}`.slice(-2);
      const hour = `0${d.getHours()}`.slice(-2);
      const min = `0${d.getMinutes()}`.slice(-2);
      const sec = `0${d.getSeconds()}`.slice(-2);

      this.date = `${year}-${month}-${day}`;
      this.time = `${hour}:${min}:${sec}`;
    }
  }
};
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
  display: table;
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
}
.list-container {
  background-color: lightyellow;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  margin: 2px;
}
.title-container {
  background-color: mistyrose;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  margin: 2px;
  color: hotpink;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
