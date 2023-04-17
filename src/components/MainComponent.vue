<template>
    <main>
        <HeroComponent />
        <div class="container">
            <div class="row">
                <CardComponent v-for="(card, index) in store.cardList" :card="card" :key="card.id" :id="card.id" />
            </div>
    </div>
    </main>
    
</template>

<script>
import {store} from '../data/store.js'
import HeroComponent from './HeroComponent.vue';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            HeroComponent
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