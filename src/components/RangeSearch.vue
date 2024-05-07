<script>
export default {
  name: "RangeSearch",
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    /**
     * $emit amount property value to parent PokemonView component
     */
    setAmount() {
      console.log(this.amount);
      this.$emit("limit-value", this.amount);
    },
  },
};
</script>
<template>
  <div
    class="w-full xsm:w-2/4 border-double border-slate-950 border-[1rem] rounded-lg"
  >
    <form
      id="range-search"
      @submit.prevent="setAmount()"
      action="#"
      method="get"
      enctype="multipart/form-data"
      class="flex flex-col xxsm:flex gap-4 justify-center border-solid border-4 border-slate-950  p-2 xsm:flex-col"
    >
      <label
        class="flex xsm:flex-col gap-2 items-center"
        for="poke_amount"
        ><p>Search amount:</p>
        <input
          type="number"
          id="poke_amount"
          min="1"
          max="100"
          class="text-center border-slate-300 border-2 ps-2"
          v-model="amount"
        />
        <span>(máx 100)</span>
      </label>
      <input
        type="submit"
        value="Search"
        class=" bg-rose-500 p-2 text-slate-100 hover:bg-rose-400 cursor-pointer"
      />
    </form>
  </div>
</template>
