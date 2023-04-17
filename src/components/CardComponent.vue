<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card mb-4 bg-transparent">
            <div class="card-image" v-for="(item, i) in card.card_images" :key="i">
                <img :src="item.image_url" alt="">
            </div>
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h6 class="text-white">{{ card.name }}</h6>
                <span class="text-white">{{ card.type }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['card']
    }
</script>

<style lang="scss" scoped>
    .card-image{
        width: 300px;
        height: 450px;
        margin: auto;

        img{
            width: 100%;
            height: 100%;
        }
    }
    span{
        font-size: 0.9rem;
        font-style: italic;
    }
</style>