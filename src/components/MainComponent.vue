<template>
    <div class="container">
        <div class="row">
            <CardComponent v-for="(card, index) in store.cardList" :card="card" :key="card.id" :id="card.id" />
        </div>
    </div>
</template>

<script>
import {store} from '../data/store.js'
import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>