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
      pokeId: null,
      pokemon: null,
      limit: 0,
      last: false,
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
    getId(id) {
      this.pokeId = id;
      this.pokemon = this.modalPokemon(this.pokeId);
      console.log(this.pokeId);
    },
    /**
     *Gets each pokemon info from the fetched pokemonList
     * into a new Array pokemonData.
     * // Filters pokemon's id to set last:true when #id 100 is found.
     */
    async getPokemons() {
      this.pokemonList.forEach(async (pokemon) => {
        const poke = await getUrl(pokemon.url);
        console.log(poke.id);
        poke.id === 100 ? (this.last = true) : "";
        this.last == true ? console.log("Last Card in View") : "";
        this.pokemonData.push(poke);
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
     *Empties [pokemonData]
     *Enters new list into [pokemonList]
     *Fills [pokemonData] with the new list
     *Disables button 'Next' if Pokemons amount reach 100.
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
      this.last == true ? (this.last = false) : "";
      this.pokemonData = [];
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

    modalPokemon(id) {
      let poke = null;
      this.pokemonData.forEach((pokemon) => {
        pokemon.id == id ? (poke = pokemon) : "";
      });
      console.log("Pokemon a modal: ", poke);
      return poke;
    },
  },
};
</script>

<!-- TEMPLATE -->
<template>
  <div>
    <!-- Search components -->
    <div class="flex flex-col xsm:flex-row xsm:flex gap-2 p-2">
      <name-search></name-search>
      <range-search @limit-value="getLimit"> </range-search>
    </div>
    <div>
      <HeaderTwo>POKéDEX</HeaderTwo>
      <div class="border-t-2 border-zinc-200">
        <!-- Pokémon Container -->
        <div id="poke-container" class="text-center my-2 p-2">
          <!-- Pokémon Renderer -->
          <pokemon-cards
            :array-pokemon="pokemonData"
            @pokemon-id="getId"
          ></pokemon-cards>
        </div>
        <!-- Pagination -->
        <div
          class="flex border-zinc-200 border-t-2 p-2 justify-center gap-4 text-zinc-900"
        >
          <button
            :disabled="prevUrl === null"
            @click="prevPage"
            class="disabled:text-zinc-400 underline hover:text-rose-600"
          >
            Previous
          </button>
          <button
            :disabled="last"
            @click="nextPage"
            class="disabled:text-zinc-400 underline hover:text-rose-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <!-- MODAL -->
    <div v-if="pokeId !== null">
      <div>
        <button @click="this.pokeId = null">close</button>
        <p>Modal of: {{ pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>
