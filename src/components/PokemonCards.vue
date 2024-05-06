<script>
export default {
  name: "PokemonCards",
  props: {
    arrayPokemon: Array,
  },
  data() {
    return {
    };
  },
  async mounted() {
    console.log("array in PokemonCards", this.arrayPokemon);

  },
  methods: {
  },
};
</script>
<template>
  <div class="flex flex-col items-center">
    <div
      class="flex flex-col w-full xxsm:w-11/12 xsm:w-8/12 sm:w-2/5 items-center border-4 border-zinc-800 rounded-lg my-2 p-4 gap-2"
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
      <!-- <div v-for="a in pokemon.abilities">
      <p class=" text-zinc-500">{{ a.ability.name }}</p>  
    </div> -->
      <div class="bg-rose-700 px-2 py-1 rounded-md hover:bg-rose-500 w-2/6">
        <button class="text-slate-100">Info</button>
      </div>
    </div>
  </div>
</template>
