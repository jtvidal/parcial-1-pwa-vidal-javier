<script>
import { getPokemon } from "@/services/pokemon";
export default {
  name: "PokemonCard",
  props: { objectPokemon: Object },
  data() {
    return {
      pokemonData: Object,
      url: this.objectPokemon.url,
      name: this.objectPokemon.name,
      // avatar: "",
      // types: [],
      // icon: "",
    };
  },
  async mounted(){
    this.pokemonData = await getPokemon(this.url);
  },
  methods: {
    getAvatar() {

    },
    // /**
    //  *
    //  */
    // getType() {
    //   this.types = this.data.types;
    // },
  },
};
</script>
<template>
  <div>
    <h3>Pokemon: {{ name }}</h3>
    <p>Url: {{ url }}</p>
    <!-- <div class="image">
      <img :src="avatar" alt="Pokemon Image" />
    </div> -->
  </div>
</template>
