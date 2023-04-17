<template>
    <main>
        <HeroComponent />
        <hr>
        <div class="message container text-center">
            <span class="text-white fw-semibold"> ->> Discover exclusive sneak peeks of some of the cards that will be featured in the Z-Series!</span>
        </div>
        <hr>
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
    hr{
        height: 3px;
        color: white;
    }
</style>