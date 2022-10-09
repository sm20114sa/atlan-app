<template>
  <div class="tw-flex tw-items-center tw-justify-between">
    <input
      class="tw-h-10 tw-w-full tw-px-4 tw-border tw-border-solid tw-border-gray-200 tw-rounded-lg tw-bg-white"
      type="text"
      v-model="searchKeyword"
      @keyup.enter="search"
      placeholder="Search query"
    />

    <div class="tw-mx-2"></div>
    <button
      class="tw-w-40 tw-h-10 tw-px-4 tw-py-2 tw-ml-auto tw-cursor-pointer tw-rounded-lg tw-bg-blue-600 tw-text-white tw-font-bold"
      @keyup.enter="search"
      @click="search"
    >
      <slot> Submit </slot>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchBox",
  props: {},
  data: () => ({
    searchKeyword: "",
  }),

  computed: {
    ...mapGetters(["getQueries", "getSelectedQuery", "getSelectedQueryIndex"]),
  },
  mounted() {
    if (this.$store.getters.getSelectedQueryIndex > -1)
      this.searchKeyword = this.$store.getters.getSelectedQuery;
  },
  methods: {
    ...mapActions([
      "setSelectedQuery",
      "setSelectedQueryIndex",
      "updateQueries",
    ]),
    search() {
      if (
        this.$store.getters.getSelectedQueryIndex < 0 ||
        this.$store.getters.getQueries !== this.searchKeyword
      ) {
        this.$store.dispatch("setSelectedQuery", this.searchKeyword);
        if (!this.$store.getters.getQueries.includes(this.searchKeyword)) {
          this.$store.dispatch("updateQueries", this.searchKeyword);
          this.$store.dispatch(
            "setSelectedQueryIndex",
            this.$store.getters.getQueries.length - 1
          );
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
