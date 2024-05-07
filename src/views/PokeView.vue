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
      savedPokemon:[],
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
    /**
     * 
     */
    getId(id) {
      this.pokeId = id;
      this.pokemon = this.modalPokemon(this.pokeId);
      this.pokemonStorage(this.pokemon);
    },
    /**
     * 
     * @param pokemon 
     */
    pokemonStorage(pokemon){
        if(localStorage.data){
          this.savedPokemon = JSON.parse(localStorage.getItem('data'));
        }
        this.savedPokemon.push(pokemon);
        localStorage.setItem('data', JSON.stringify(this.savedPokemon));
    },
    /**
     *Gets each pokemon info from the fetched pokemonList
     * into a new Array pokemonData.
     * // Filters pokemon's id to set last:true when #id 100 is found.
     */
    async getPokemons() {
      this.pokemonList.forEach(async (pokemon) => {
        const poke = await getUrl(pokemon.url);
        poke.id === 100 ? (this.last = true) : "";
        this.last == true ? console.log("Last Card in View") : "";
        this.pokemonData.push(poke);
      });
    },
    /**
     *Gets next and previous values of the fetched url.
     * @param url
     */
    async getPages(url) {
      const data = getUrl(url);
      const rawData = await data;
      this.nextUrl = await rawData.next;
      this.prevUrl = await rawData.previous;

    },

    /**
     *Empties [pokemonData]
     *Enters new list into [pokemonList]
     *Fills [pokemonData] with the new list
     *Disables button 'Next' if Pokemons amount reach 100.
     */
    async nextPage() {
      this.pokemonData = [];
      this.pokeId = null;
      this.url = await this.nextUrl;
      this.pokemonList = await getData(this.url);
      await this.getPokemons();
      this.getPages(this.url);
    },
    /**
     *
     */
    async prevPage() {
      this.last == true ? (this.last = false) : "";
      this.pokemonData = [];
      this.pokeId = null;
      this.url = await this.prevUrl;
      this.pokemonList = await getData(this.url);
      await this.getPokemons();
      this.getPages(this.url);
    },
    /**
     *
     * @param {} amount used to capture child's RangeSearch property 'amount' value.
     */
    async getLimit(amount) {
      this.pokemonData = [];
      this.limit = amount;
      this.url = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=0`;
      this.pokemonList = await getData(this.url);
      await this.getPokemons();
      console.log("Pokémon Search", this.pokemonList);
    },
    /**
     *
     * @param id
     */
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
  <div class="relative">

    <!-- Search components -->
    <div class="flex flex-col xsm:flex-row xsm:flex gap-2 p-2">
      <name-search></name-search>
      <range-search @limit-value="getLimit"> </range-search>
    </div>

    <div>
      <HeaderTwo>POKéDEX</HeaderTwo>
      <!-- Pokémon Container -->
      <div class="border-t-2 border-zinc-200">
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
    <div
      v-if="pokeId !== null"
      class="fixed top-0 bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-50"
    >
      <div
        class="flex flex-col justify-center items-center bg-zinc-100 border-4 border-zinc-900 rounded-lg mx-auto w-10/12 sm:w-2/4 p-4"
      >
        <div
          class="w-full flex justify-end p-2 border-b-2 border-zinc-300 mb-4"
        >
          <button @click="this.pokeId = null" class="hover:text-rose-600">
            Close
          </button>
        </div>
        <!-- Modal content -->
        <div class="flex flex-col self-center items-center">
          <!-- Name -->
          <h3 class="uppercase font-pokemon border-b-2 border-rose-500 mb-2">
            {{ pokemon.name }}
          </h3>
          <!-- Img Abilities and Types -->
          <div class="flex flex-col xsm:flex-row w-100">
            <div>
              <img
                class="w-[200px] self-center"
                :src="pokemon.sprites['front_default']"
                :alt="pokemon.name + ' Image'"
              />
            </div>
            <div class="flex xsm:flex-col justify-center">
              <!-- Abilities -->
              <div class="w-full">
                <h4 class="text-red-600 font-semibold">Abilities</h4>
                <p class="text-zinc-700" v-for="a in pokemon.abilities">
                  {{ a.ability.name }}
                </p>
              </div>
              <!-- Types -->
              <div class="w-full">
                <h4 class="text-rose-600 font-semibold">Types</h4>
                <p class="text-zinc-700" v-for="t in pokemon.types">
                  {{ t.type.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
