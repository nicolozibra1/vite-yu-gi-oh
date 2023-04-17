<template>
    <div class="hero d-flex flex-column align-items-center">
        <div class="box-image">
            <img src="image/mainvisual-monster.png" alt="">
        </div>
        <div class="box-logo">
            <img src="image/logo-hero.png" alt="">
        </div>
        <h1 class="text-white text-uppercase pt-3">available soon!</h1>
    </div>
</template>

<script>
    export default {
        name: 'HeroComponent'
    }
</script>

<style lang="scss" scoped>
    .hero{
        margin-bottom: 150px;;
    }
    .box-image{
        min-width: 1200px;
        position: relative;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .box-logo{
        margin-top: -150px;
        z-index: 1;
        width: 500px;
        height: 250px;
    }
</style>