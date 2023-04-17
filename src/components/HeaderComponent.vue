<template>
    <header class="d-flex align-items-center">
        <div class="box-logo ms-3">
            <img src="/image/logo.svg" alt="logo">
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>
    header{
        height: 50px;

        .box-logo{
            height: 40px;
            width: 120px;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .debug{
        border: 1px solid red;
    }
</style>