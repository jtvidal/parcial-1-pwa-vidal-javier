<script>
import PokemonCards from "@/components/PokemonCards.vue";
import HeaderTwo from "../components/headers/HeaderTwo.vue";

export default {
  name: "PokeHistory",
  components: { HeaderTwo, PokemonCards},
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
};
</script>
<template>
  <div>
    <div>
      <HeaderTwo>POKéMON HISTORY VIEW</HeaderTwo>
    </div>
    <div>
      <pokemon-cards :array-pokemon="billPc"></pokemon-cards>
    </div>
  </div>
</template>
