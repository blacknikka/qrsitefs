<template>
  <li class="character">
    {{data}}
  </li>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
character {
  color: red;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
