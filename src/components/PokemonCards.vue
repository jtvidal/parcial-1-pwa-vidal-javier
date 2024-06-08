<script>
export default {
  name: "PokemonCards",
  props: {
    arrayPokemon: Array,
  },
  data() {
    return {};
  },
  async mounted() {
    console.log("array in PokemonCards", this.arrayPokemon);
  },
  methods: {
    sendId(id) {
      console.log("@pokemon-id: ", id);
      this.$emit("pokemon-id", id);
    },
  },
};
</script>
<template>
  <div class="grid grid-cols-1 xsm:grid-cols-2 gap-2">
    <div
      class="flex flex-col m-auto w-10/12 items-center border-4 border-zinc-800 rounded-lg my-2 p-4 gap-2"
      v-for="pokemon in this.arrayPokemon"
    >
      <div>
        <img
          class="w-[200px]"
          :src="pokemon.sprites['front_default']"
          :alt="pokemon.name + ' Image'"
        />
      </div>
      <h3 class="uppercase font-bold">{{ pokemon.name }}</h3>
      <div class="w-2/6 xsm:w-2/4">
        <button
          @click="sendId(pokemon.id)"
          class="text-slate-100 bg-rose-700 px-2 py-1 rounded-md hover:bg-rose-500 w-full"
        >
        <img src="../assets/pokeball.png" alt="pokeball img">
          Info
        </button>
      </div>
    </div>
  </div>
</template>
