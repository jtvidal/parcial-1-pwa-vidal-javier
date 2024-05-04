<script>
import { getUrl } from "@/services/pokemon";
export default {
  name: "PokemonCard",
  props: { objectPokemon: Object },
  data() {
    return {
      pokemon: Object,
      url: this.objectPokemon.url,
      name: this.objectPokemon.name,
      sprites: null,
      types: null,
      abilities: null,
    };
  },
  async mounted() {
    this.pokemon = await getUrl(this.url);
    this.types = await this.pokemon.types;
    this.abilities = await this.pokemon.abilities;
    this.sprites = await this.pokemon.sprites;
    // console.log('Types: ', this.types);
    // console.log('Abilities: ', this.abilities);
    // console.log('Sprites: ', this.sprites );
  },
  methods: {

  },
};
</script>
<template>
  <div>
    <h3>Pokemon: {{ name }}</h3>
    
    <!-- <div class="image">
      <img :src="avatar" alt="Pokemon Image" />
    </div> -->
  </div>
</template>
