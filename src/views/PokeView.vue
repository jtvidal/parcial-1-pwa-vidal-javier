<script>
import {getPokemons} from '../services/pokemon';
import HeaderTwo from '../components/headers/HeaderTwo.vue';
import Pokemon from '../components/Pokemon.vue';

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
    },
    methods: {
      
    }
};
</script>
<template>
  <div>
    <HeaderTwo>POKéDEX</HeaderTwo>

    <div>

    </div>
  </div>
</template>
