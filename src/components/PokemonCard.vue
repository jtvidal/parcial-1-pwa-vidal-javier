<script>
export default {
  name: "PokemonCard",
  props: { objectPokemon: Object },
  data() {
    return {
      // data: "",
      url: this.objectPokemon.url,
      name: this.objectPokemon.name,
      // avatar: "",
      // types: [],
      // icon: "",
    };
  },
  mounted() {},
  methods: {
    /**
     *
     */
    // getAvatar() {
    //   this.avatar = this.data.sprites.front_default;
    // },
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
