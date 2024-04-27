<script>
import {getPokemons} from '../services/pokemon';

export default {
    name:'PokeView',
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
    <h2 class="text-gray-500">Home Page</h2>
  </div>
</template>
