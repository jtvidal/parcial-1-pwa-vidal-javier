<script>
import { getPokemons } from "../services/pokemon";
import HeaderTwo from "../components/headers/HeaderTwo.vue";
import Pokemon from "../components/Pokemon.vue";
import RangeSearch from "../components/RangeSearch.vue";

export default {
  name: "PokeView",
  components: { HeaderTwo, Pokemon, RangeSearch },
  data() {
    return {
      pokemonList: [],
      limit: 0,
      url: `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`,
    };
  },
  mounted() {
    this.showPokemons();
  },

  methods: {
    /**
     *
     * @param {Number} amount used to capture child RangeSearch property 'amount' value
     */
    async setLimit(amount) {
      this.limit = amount;
      this.url = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=0`;
      this.pokemonList = getPokemons(this.url)
      console.log('Pokémon Search',await this.pokemonList);
    },

    async showPokemons() {
      this.pokemonList = getPokemons(this.url);
      console.log("Pokémon List: ", await this.pokemonList);
    },
  },
};
</script>
<template>
  <div>
    <div>
      <RangeSearch @limit-value="setLimit" />
    </div>
    <div>
      <HeaderTwo>POKéDEX</HeaderTwo>
    </div>
  </div>
</template>
