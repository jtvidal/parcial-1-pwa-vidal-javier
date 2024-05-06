<script>
import PokemonCards from "@/components/PokemonCards.vue";
import HeaderTwo from "../components/headers/HeaderTwo.vue";

export default {
  name: "PokeHistory",
  components: { HeaderTwo, PokemonCards },
  props: { arrayPokemon: Array },
  data() {
    return {
      billPc: [],
    };
  },
  mounted() {
    if (localStorage.data) {
      this.billPc = JSON.parse(localStorage.getItem("data"));
      console.log(this.billPc);
    }
  },
  methods: {
    clearStorage() {
      localStorage.clear();
      window.location.reload();
    },
  },
};
</script>
<template>
  <div>
    <div>
      <HeaderTwo>POKéMON HISTORY VIEW</HeaderTwo>
    </div>
    <div class="w-8/12 sm:w-2/6 flex justify-center mx-auto">
      <button @click="clearStorage" class="bg-rose-700 font-pokemon w-full p-2 text-zinc-100 cursor-pointer rounded-lg hover:bg-rose-500">Clear</button>
    </div>
    <div>
      <pokemon-cards :array-pokemon="billPc"></pokemon-cards>
    </div>
  </div>
</template>
