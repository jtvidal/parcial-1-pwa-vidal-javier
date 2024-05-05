<script>
export default {
  name: "PokemonCard",
  props: {
    objectPokemon: Object,
  },
  data() {
    return {
    };
  },
  async mounted() {
    
    // console.log("PokemonCard name: ", await this.name);
    // this.types = await this.objectPokemon.types;
    // this.abilities = await this.objectPokemon.abilities;
    // this.sprites = await this.objectPokemon.sprites;
    // console.log('Types: ', this.types);
    // console.log('Abilities: ', this.abilities);
    // console.log('Sprites: ', this.sprites );
  },
  methods: {},
};
</script>
<template>
  <div>
    <h3 class="uppercase">{{ this.objectPokemon.name }}</h3>

    <!-- <div class="image">
      <img :src="avatar" alt="Pokemon Image" />
    </div> -->
  </div>
</template>
