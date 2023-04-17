<template>
    <main>
        <HeroComponent />
        <hr>
        <div class="message container text-center">
            <span class="text-white fw-semibold"> ->> Discover exclusive sneak peeks of some of the cards that will be featured in the Z-Series!</span>
        </div>
        <hr>
        <div class="box-button container d-flex justify-content-center mt-5">
            <button class="btn text-uppercase fw-semibold" @click="discoverNow" v-if="!this.visible && !this.loading">discover now</button>
        </div>
        <div class="loading d-flex justify-content-center align-items-center" v-if="this.loading">
            <LoadingComponent />
            <span class="text-white text-capitalize">loading...</span>
        </div>
        <div class="container">
            <div class="row" v-if="this.visible">
                <CardComponent v-for="(card, index) in store.cardList" :card="card" :key="card.id" :id="card.id" />
            </div>
    </div>
    </main>
    
</template>

<script>
import {store} from '../data/store.js'
import HeroComponent from './HeroComponent.vue';
import LoadingComponent from './LoadingComponent.vue'
import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            HeroComponent,
            LoadingComponent
        },
        data() {
            return {
                store,
                visible: false,
                loading: false
            }
        },
        methods: {
            discoverNow() {
                this.loading = true;
                setTimeout(() => {
                    this.visible = true;
                    this.loading = false;
                },3000)
            },
        }
    }
</script>

<style lang="scss" scoped>
    hr{
        height: 3px;
        color: white;
    }
    button{
        color: white;
        background-color: #2646ce;
        box-shadow: rgba(255, 255, 255, 0.3) 0px 5px 38px, rgba(255, 255, 255, 0.22) 0px 3px 10px;

        &:hover{
            background-color: white;
            color: black;
        }
    }
</style>