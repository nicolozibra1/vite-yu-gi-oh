import {reactive} from 'vue';

export const store = reactive({
    cardList: [], 
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    searchType: [
        {
            type: 'Effect Monster'
        },
        {
            type: 'Flip Effect Monster'
        },
        {
            type: 'Fusion Monster'
        },
        {
            type: 'Normal Monster'
        },
        {
            type: 'Spell Card'
        },
        {
            type: 'Trap Card'
        }
    ],
    searchAttribute: [
        {
            attribute: 'dark'
        },
        {
            attribute: 'divine'
        },
        {
            attribute: 'earth'
        },
        {
            attribute: 'fire'
        },
        {
            attribute: 'light'
        },
        {
            attribute: 'water'
        },
        {
            attribute: 'wind'
        }
    ],
    searchRarity: [
        {
            rarity: 'normal'
        },
        {
            rarity: 'rare'
        },
        {
            rarity: 'ultra rare'
        },
        {
            rarity: 'primastic'
        },
        {
            rarity: 'holographic'
        },
    ]
})