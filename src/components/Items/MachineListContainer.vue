<template>
  <div class="container">
    <machine-list-item id="id" :dbdata="{data: 'data', date: 'date', value1:'value1', value2:'value2'}" kind="title" />
    <machine-list-item v-for="(item, index) in list" :dbdata="item.data" :id="item.id" :key="index" />
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.container {
  padding: 10px;
  background-color: azure;
  display: flex;
  flex-direction: column;
}
</style>
