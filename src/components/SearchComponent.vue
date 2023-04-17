<template>
    <div class="search-box container">
        <input type="search" placeholder="Search for card name ..." id="search-bar">
        <span><i class="fa-solid fa-filter"></i></span>
        <div id="search-filter" class="d-flex gap-3">
            <!-- SEARCH TYPE -->
            <select name="type" id="type">
                <option value="" class="fst-italic fw-light bg-black text-warning" selected>Filter Type...</option>
                <option v-for="(type, index) in store.searchType" value="type" id="option-type" class="bg-black">
                    {{ type.type }}
                </option>   
            </select>
            <!-- SEARCH ATTRIBUTE -->
            <select name="attribute" id="attribute" class="text-capitalize">
                <option value="" class="fst-italic fw-light bg-black text-warning" selected>Filter Attribute...</option>
                <option v-for="(attribute, index) in store.searchAttribute" value="attribute" id="option-attribute" class="bg-black">
                    {{ attribute.attribute }}
                </option>  
            </select>
            <!-- SEARCH RARITY -->
            <select name="attribute" id="attribute" class="text-capitalize">
                <option value="" class="fst-italic fw-light bg-black text-warning" selected>Filter Rarity...</option>
                <option v-for="(rarity, index) in store.searchRarity" value="rarity" id="option-rarity" class="bg-black">
                    {{ rarity.rarity }}
                </option>  
            </select>
        </div>
        <button class="btn fw-semibold text-white text-uppercase">
            <i class="fa-solid fa-search p-0"></i>
            apply
        </button>
    </div>
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'SearchComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-box{
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        #search-bar{
            width: 75%;
            background-color: rgba(255, 255, 255, 0.123);
            border: none;
            padding: 5px 20px;
            border-radius: 5px;
            color: white;
        }
        i{
            color: white;
            padding-left: 30px;
            cursor: pointer;
        }
        #search-filter{
            select{
                padding: 5px 20px;
                background-color: rgba(255, 255, 255, 0.123);
                border: none;
                border-radius: 5px;
                color: white;
            }
        }
        button{
            background-color: black;
            border: 1px solid white;
            padding: 3px 10px;

            
        }
    }
    @media screen and (min-width: 992px) {
        .search-box{
            justify-content: space-around;
            #search-bar{
                width: 25%;
            }
        }
        span{
            display: none;
        }
        #search-filter{
            select{
                display: block;
            }    
        }
    }
    @media screen and (max-width: 992px) {
        #search-filter{
            select{
                display: none;
            }    
        }
        button{
            display: none;
        }
    }
</style>