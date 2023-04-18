<template>
    <div class="hero d-flex flex-column align-items-center">
        <div class="box-image">
            <img src="/image/mainvisual-monster.png" alt="">
        </div>
        <div class="box-logo">
            <img src="/image/logo-hero.png" alt="">
        </div>
        <h1 class="text-white text-uppercase pt-3">available soon!</h1>
        <h3 class="arrow-down"><i class="fa-solid fa-angles-down text-white"></i></h3>
    </div>
</template>

<script>
    export default {
        name: 'HeroComponent'
    }
</script>

<style lang="scss" scoped>
    .hero{
        margin-bottom: 40px;
    }
    .box-image{
        width: 1200px;
        position: relative;
    }
    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .box-logo{
        margin-top: -150px;
        z-index: 1;
        width: 500px;
        height: 250px;
    }
    @media screen and (min-width: 768px) {
        .arrow-down{
            display: none;
        }
    }
    @media screen and (max-width: 1200px) {
        .box-image{
            width: 100%;
            overflow: hidden;
        }
    }
    @media screen and (max-width: 992px) {
        .box-image{
            width: 100%;
            overflow: hidden;

            img{
                scale: 1.2;
                overflow: hidden;
                margin-top: 30px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .box-image{
            width: 100%;
            height: 500px;

            img{
                scale: 1.5;
                overflow: hidden;
                margin-top: 70px;
                height: 250px;
                margin-top: 70px;
            }
        }
    }
    @media screen and (max-width: 576px) {
        .box-image{
            width: 100%;
            height: 500px;

            img{
                overflow-y: visible;
                scale: 2;
                margin-top: 50px;
                height: 200px;
                margin-top: 100px;
            }
        }
    }
</style>