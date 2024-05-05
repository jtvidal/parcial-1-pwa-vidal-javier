<script>
import { getData, getUrl } from "../services/pokemon";
import HeaderTwo from "../components/headers/HeaderTwo.vue";
import PokemonCard from "../components/PokemonCard.vue";
import RangeSearch from "../components/RangeSearch.vue";
import NameSearch from "@/components/NameSearch.vue";
import PokePagination from "@/components/PokePagination.vue";

export default {
  name: "PokeView",
  components: {
    HeaderTwo,
    PokemonCard,
    RangeSearch,
    NameSearch,
    PokePagination,
  },
  props: {
    objectPokemon: Object,
  },
  data() {
    return {
      pokemonList: [],
      limit: 0,
      url: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
      nextUrl: null,
      prevUrl: null,
    };
  },
  async mounted() {
    console.log("URL mounted: ", this.url);
    this.pokemonList = await getData(this.url);
    this.getPages(this.url);
  },

  methods: {
    /**
     *
     * @param url
     */
    async getPages(url) {
      const data = getUrl(url);
      const rawData = await data;
      // console.log("response: ", rawData);
      this.nextUrl = await rawData.next;
      console.log("Viewer next: ", this.nextUrl);
      this.prevUrl = await rawData.previous;
      console.log("Viewer previous:", this.prevUrl);
    },

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

    // async nextPage(nextUrl) {
    //   this.url = nextUrl;
    //   console.log("New URl to fetch:", this.url);
    //   this.pokemonList = await getData(this.url);
    //   console.log("New pokemonList[]: ", this.pokemonList);
    // },
    // async prevPage(prevUrl) {
    //   this.url = prevUrl;
    //   console.log("New URl to fetch:", this.url);
    //   this.pokemonList = await getData(this.url);
    //   console.log("new pokemonList[]: ", this.pokemonList);
    // },
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
      <div>
        <!-- Pokémon Container -->
        <div id="poke-container">
          <!-- Pokémon Renderer -->
          <pokemon-card
            v-for="poke in pokemonList"
            :object-pokemon="poke"
          ></pokemon-card>
        </div>
        <!-- Pagination -->
        <poke-pagination
          :initial-url="url"
          :next="nextUrl"
          :previous="prevUrl"
        ></poke-pagination>
      </div>
    </div>
  </div>
</template>
