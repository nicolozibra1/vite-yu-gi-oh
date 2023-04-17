import {reactive} from 'vue';

export const store = reactive({
    cardList: [], 
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0'
})