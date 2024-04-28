<script>
export default {
  name: "RangeSearch",
  data() {
    return {
      amount: Number,
    };
  },
};
</script>
<template>
  <div>
    <form
      id="range-search"
      action="#"
      method="get"
      enctype="multipart/form-data"
      class="bg-slate-100 p-2"
    >
      <label class="flex gap-2 justify-center" for="poke_amount"
        ><p>Cantidad a buscar:</p>
        <input
          type="number"
          id="poke_amount"
          min="1"
          max="100"
          class="border-green-200"
          v-model="amount"
        />
        <span>(máximo 100)</span>
      </label>
    </form>
  </div>
</template>
