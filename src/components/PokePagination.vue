<script>
import { getUrl } from "@/services/pokemon";

export default {
  name: "PokePagination",
  props: { initialUrl: null },
  data() {
    return {
      next: "",
      previous: "",
    };
  },
  async mounted() {
    console.log("URL to Pagination: ", this.initialUrl);
    this.getPages(this.initialUrl);
  },
  methods: {
    /**
     * 
     * @param url 
     */
    async getPages(url) {
      const data = getUrl(url);
      const rawData = await data;
      // console.log("response: ", rawData);
      this.next = await rawData.next;
      console.log("next: ", this.next);
      this.previous = await rawData.previous;
      console.log("previous:", this.previous);
    },
    /**
     * @next-page emits value of property next of url response.
     */
    pageForward() {
      this.$emit("next-page", this.next);
      console.log('page emited: ', this.next);
      this.getPages(this.next);
    },
    /**
     * @previous-page emits value of property previous of url response.
     */
    pageBackwards() {
      this.$emit("previous-page", this.previous);
      console.log('page emited', this.previous);
      this.getPages(this.previous);
    },
  },
};
</script>

<template>
  <div class="flex justify-center p-4 gap-4 w-full">
    <button @click="pageBackwards" class="hover:text-red-600 underline">
      Previous
    </button>
    <button  @click="pageForward" class="hover:text-red-600 underline">
      Next
    </button>
  </div>
</template>
