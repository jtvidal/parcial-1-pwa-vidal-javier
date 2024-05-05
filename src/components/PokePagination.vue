<script>
import { getUrl } from "@/services/pokemon";

export default {
  name: "PokePagination",
  data() {
    return {
      initialUrl: null,
      next: null,
      previous:null
    };
  },
  mounted() {
    this.initialUrl = this.$attrs['initial-url'];
    console.log("URL to Pagination: ", this.initialUrl);
  },
  methods: {
    // /**
    //  * 
    //  * @param url 
    //  */
    // async getPages(url) {
    //   const data = getUrl(url);
    //   const rawData = await data;
    //   // console.log("response: ", rawData);
    //   this.next = await rawData.next;
    //   console.log("next: ", this.next);
    //   this.previous = await rawData.previous;
    //   console.log("previous:", this.previous);
    // },
    /**
     * @next-page emits value of property next of url response.
     */
    pageForward() {
      // //EMIT
      // this.$emit("next-page", this.next);
      // console.log('page emited: ', this.next);
    },
    /**
     * @previous-page emits value of property previous of url response.
     */
    pageBackwards() {
      // //EMIT
      // this.$emit("previous-page", this.previous);
      // console.log('page emited', this.previous);
    },
  },
};
</script>

<template>
  <div class="flex justify-center p-4 gap-4 w-full">
    <button class="hover:text-red-600 underline">
      Previous
    </button>
    <button class="hover:text-red-600 underline">
      Next
    </button>
  </div>
</template>
