<script>
import { getData } from "../services/pokemon";
import HeaderTwo from "../components/headers/HeaderTwo.vue";
import PokemonCard from "../components/PokemonCard.vue";
import RangeSearch from "../components/RangeSearch.vue";
import NameSearch from "@/components/NameSearch.vue";
import PokePagination from "@/components/PokePagination.vue";

export default {
  name: "PokeView",
  components: { HeaderTwo, PokemonCard, RangeSearch, NameSearch, PokePagination },
  props: ["objectPokemon"],
  data() {
    return {
      pokemonList: [],
      limit: 0,
      url: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`,
    };
  },
  async mounted() {
    this.pokemonList = await getData(this.url);
  },

  methods: {
    /**
     *
     * @param {} amount used to capture child's RangeSearch property 'amount' value.
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
    <!-- Search components -->
    <div class="flex flex-col xsm:flex-row xsm:flex gap-2 p-2">
      <name-search></name-search>
      <range-search @limit-value="getLimit"> </range-search>
    </div>
    <div>
      <HeaderTwo>POKéDEX</HeaderTwo>
      <!-- Pokémon Renderer -->
      <div>
        <div id="poke-container" class="container">
          <pokemon-card
            v-for="poke in pokemonList"
            :object-pokemon="poke"
          ></pokemon-card>
        </div>
        <!-- Pagination -->
        <poke-pagination></poke-pagination>
      </div>
    </div>
  </div>
</template>
