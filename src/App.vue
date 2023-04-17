<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
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
          console.log(res.data.data)
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
