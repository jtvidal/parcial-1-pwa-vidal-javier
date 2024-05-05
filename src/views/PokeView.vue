<script>
import { getData, getUrl } from "../services/pokemon";
import HeaderTwo from "../components/headers/HeaderTwo.vue";
import PokemonCard from "../components/PokemonCard.vue";
import RangeSearch from "../components/RangeSearch.vue";
import NameSearch from "@/components/NameSearch.vue";

export default {
  name: "PokeView",
  components: {
    HeaderTwo,
    PokemonCard,
    RangeSearch,
    NameSearch,
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
    await this.getPages(this.url);
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

    async nextPage() {
      console.log("New url next:", await this.nextUrl);
      this.url = this.nextUrl
      console.log('url: ', this.url);
      this.pokemonList = await getData(this.url);
      console.log("New pokemonList[]: ", this.pokemonList);
      this.getPages(this.url);
    },
    async prevPage() {
      console.log("New url previous:", await this.prevUrl);
      this.url = await this.prevUrl;
      console.log('url: ',this.url);
      this.pokemonList = await getData(this.url);
      console.log("New pokemonList[]: ", this.pokemonList);
      this.getPages(this.url);
      // this.pokemonList = await getData(this.url);
      // console.log("new pokemonList[]: ", this.pokemonList);
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
          class="text-center border-solid border-2 border-zinc-400 my-2 p-2"
        >
          <!-- Pokémon Renderer -->
          <pokemon-card
            v-for="poke in pokemonList"
            :object-pokemon="poke"
          ></pokemon-card>
        </div>
        <!-- Pagination -->
        <div
          class="flex border-solid border-zinc-400 border-2 p-2 justify-center gap-4 text-zinc-900"
        >
          <button @click="prevPage" class="underline hover:text-rose-600">Previous</button>
          <button @click="nextPage" class="underline hover:text-rose-600">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
