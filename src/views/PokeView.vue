<script>
import { getData } from "../services/pokemon";
import HeaderTwo from "../components/headers/HeaderTwo.vue";
import PokemonCard from "../components/PokemonCard.vue";
import RangeSearch from "../components/RangeSearch.vue";

export default {
  name: "PokeView",
  components: { HeaderTwo, PokemonCard, RangeSearch },
  props: ["objectPokemon"],
  data() {
    return {
      pokemonList: [],
      limit: 0,
      url: `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`,
    };
  },
  async mounted() {
    this.pokemonList = await getData(this.url);
  },

  methods: {
    /**
     *
     * @param {} amount used to capture child RangeSearch property 'amount' value
     */
    async getLimit(amount) {
      this.limit = amount;
      this.url = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=0`;
      this.pokemonList = await getData(this.url);
      console.log("Pokémon Search", this.pokemonList);
    },

  },
};
</script>
<template>
  <div>
    <div>
      <range-search @limit-value="getLimit"> </range-search>
    </div>
    <div>
      <HeaderTwo>POKéDEX</HeaderTwo>
      <div>
        <div class="poke-list container">
          <pokemon-card
            v-for="poke in pokemonList"
            :object-pokemon="poke"
          ></pokemon-card>
        </div>
      </div>
    </div>
  </div>
</template>
