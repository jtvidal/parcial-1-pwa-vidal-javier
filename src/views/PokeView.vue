<script>
import {getPokemons} from '../services/pokemon';
import HeaderTwo from '../components/headers/HeaderTwo.vue';

export default {
    name:'PokeView',
    components:{HeaderTwo},
    data(){
        return{
            pokemonList:[],
            url : 'https://pokeapi.co/api/v2/pokemon?limit=0&offset=20'
        }
    },
    mounted(){
        getPokemons(this.url);
    }
};
</script>
<template>
  <div>
    <HeaderTwo>Pokedex</HeaderTwo>
  </div>
</template>
