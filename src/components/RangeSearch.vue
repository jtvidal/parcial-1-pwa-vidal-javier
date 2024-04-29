<script>
export default {
  name: "RangeSearch",
  data() {
    return {
      amount: 0,
    };
  },
  methods:{
    /**
     * $emit amount property value to parent PokemonView component 
     */
    setAmount(){
      console.log(this.amount);
      this.$emit('limit-value',this.amount);
    }
  }
};
</script>
<template>
  <div class="border-double border-slate-950 border-[1rem] rounded-lg mx-4">
    <form
      id="range-search"
      @submit.prevent="setAmount()"
      action="#"
      method="get"
      enctype="multipart/form-data"
      class="flex gap-4 p-2 justify-center border-solid border-4 border-black"
    >
      <label class="flex gap-2 justify-center items-center" for="poke_amount"
        ><p>Cantidad a buscar:</p>
        <input
          type="number"
          id="poke_amount"
          min="1"
          max="100"
          class="border-slate-300 border-2 ps-2"
          v-model="amount"
        />
        <span>(máximo 100)</span>
      </label>
      <input type="submit" value="Search" class="bg-red-500 p-2 text-slate-100">
    </form>
  </div>
</template>
