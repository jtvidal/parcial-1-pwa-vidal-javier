<script>
import { getData, getUrl } from "../services/pokemon";
import HeaderTwo from "../components/headers/HeaderTwo.vue";
import PokemonCards from "../components/PokemonCards.vue";
import RangeSearch from "../components/RangeSearch.vue";
import NameSearch from "@/components/NameSearch.vue";

export default {
  name: "PokeView",
  components: {
    HeaderTwo,
    PokemonCards,
    RangeSearch,
    NameSearch,
  },
  props: {
    arrayPokemon: Array,
  },
  data() {
    return {
      pokemonList: [],
      pokemonData: [],
      limit: 0,
      url: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
      nextUrl: null,
      prevUrl: null,
    };
  },
  async mounted() {
    console.log("URL mounted: ", this.url);
    this.pokemonList = await getData(this.url);
    await this.getPages(this.url);
    await this.getPokemons();
  },

  methods: {
    /**
     * Gets each pokemon info from the fetched pokemonList
     * into a new Array pokemonData
     */
    async getPokemons() {
      this.pokemonList.forEach(async (pokemon) => {
        this.pokemonData.push(await getUrl(pokemon.url));
        // console.log('pokemonData[]', this.pokemonData);
      });
    },
    /**
     *Gets next and previous values of the fetched url.
     * @param url
     */
    async getPages(url) {
      const data = getUrl(url);
      const rawData = await data;
      // console.log("response: ", rawData);
      this.nextUrl = await rawData.next;
      // console.log("Viewer next: ", this.nextUrl);
      this.prevUrl = await rawData.previous;
      // console.log("Viewer previous:", this.prevUrl);
    },

    /**
     *
     */
    async nextPage() {
      this.pokemonData = [];
      // console.log("New url next:", await this.nextUrl);
      this.url = await this.nextUrl;
      // console.log("url: ", this.url);
      this.pokemonList = await getData(this.url);
      await this.getPokemons();
      // console.log("New pokemonList[]: ", this.pokemonList);
      this.getPages(this.url);
    },
    /**
     *
     */
    async prevPage() {
      this.pokemonData =[];
      // console.log("New url previous:", await this.prevUrl);
      this.url = await this.prevUrl;
      // console.log("url: ", this.url);
      this.pokemonList = await getData(this.url);
      await this.getPokemons();
      // console.log("New pokemonList[]: ", this.pokemonList);
      this.getPages(this.url);
      // this.pokemonList = await getData(this.url);
      // console.log("new pokemonList[]: ", this.pokemonList);
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
        <div
          id="poke-container"
          class="text-center my-2 p-2"
        >
          <!-- Pokémon Renderer -->
          <pokemon-cards :array-pokemon="pokemonData"></pokemon-cards>
        </div>
        <!-- Pagination -->
        <div
          class="flex border-solid border-zinc-400 border-2 p-2 justify-center gap-4 text-zinc-900"
        >
          <button @click="prevPage" class="underline hover:text-rose-600">
            Previous
          </button>
          <button @click="nextPage" class="underline hover:text-rose-600">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
