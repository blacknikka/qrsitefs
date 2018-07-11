<template>
  <div @click="clicked">counter {{count}}</div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    clicked: function() {
      this.count++;
    }
  }
};
</script>
