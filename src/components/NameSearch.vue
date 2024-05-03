<script>
export default {
  name: "NameSearch",
};
</script>

<template>
  <div
    class="border-double border-slate-950 border-[1rem] rounded-lg w-full xsm:w-2/4"
  >
    <form
      class="flex flex-col gap-4 justify-between border-solid border-4 border-slate-950 h-full p-2"
      action="#"
      method="get"
      enctype="multipart/form-data"
    >
      <label class="flex flex-col gap-2 items-center" for="poke_name"
        ><p>Search by name</p>
        <input
          class="w-11/12 border-2 border-gray-300 bg-gray-300 text-gray-100 ps-2"
          type="search"
          id="poke_name"
          name="poke_name"
        />
      </label>

      <input
        type="submit"
        value="Search"
        class="bg-rose-500 p-2 text-slate-100 hover:bg-rose-400 cursor-pointer"
      />
    </form>
  </div>
</template>
