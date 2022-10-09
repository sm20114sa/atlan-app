<template>
  <div
    class="tw-h-full tw-overflow-y-auto tw-scroll-m-2 tw-w-full tw-px-2 tw-py-2 tw-border tw-border-solid tw-border-gray-200 tw-rounded-lg tw-bg-white tw-text-left tw-items-center"
  >
    <h1 class="tw-text-gray-600 tw-font-semibold" v-if="getResultCardData">
      Results for {{ searchKeyword }}
    </h1>
    <result-card :length="getResultCardData">
      <span
        v-if="!getResultCardData"
        class="tw-text-center tw-w-full tw-text-gray-400"
      >
        Please enter a search keyword or select from the list of existing
        queries
      </span>
    </result-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ResultCard from "./ResultCard.vue";
export default {
  name: "ResultsSection",
  props: {},
  data: () => ({}),

  computed: {
    ...mapGetters(["getSelectedQuery"]),
    searchKeyword() {
      return this.$store.getters.getSelectedQuery;
    },
    getResultCardData() {
      return this.searchKeyword.length;
    },
  },
  components: {
    ResultCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
