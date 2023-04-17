<template>
  <HeaderComponent />
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent
    },
    data() {
      return {
        store,
      }
    },
    methods: {
      getCards() {
        const url = store.url;
        axios.get(url).then((res) => {
          store.cardList = res.data.data
        });
      }
    },
    mounted() {
      this.getCards();
    }
  }
</script>

<style lang="scss" scoped>

</style>
