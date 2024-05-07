<script>
export default {
  name: "NameSearch",
  data(){
    return{
      name:'',
    }
  },
  methods:{

  }
};
</script>

<template>
  <div
    class="pointer-events-none border-double border-slate-400 border-[1rem] rounded-lg w-full xsm:w-2/4"
  >
    <form
    @submit.prevent=""
      class=" flex flex-col gap-4 justify-between border-solid border-4 border-slate-400 h-full p-2"
      action="#"
      method="get"
      enctype="multipart/form-data"
    >
      <label class="flex flex-col gap-2 items-center text-slate-400" for="poke_name"
        ><p>Search by name</p>
        <input
          class="text-zinc-800 focus:border-rose-600 focus:outline-none w-11/12 border-2 border-gray-300 bg-gray-300 ps-2"
          type="search"
          id="poke_name"
          name="poke_name"
          v-model="name"
        />
      </label>

      <input
        type="submit"
        value="Coming soon..."
        class=" bg-slate-800 p-2 text-slate-100 hover:bg-rose-400 cursor-pointer"
      />
    </form>
  </div>
</template>
