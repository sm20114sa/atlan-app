<template>
  <div class="container tw-overflow-hidden tw-w-full tw-bg-gray-100 tw-p-10">
    <search-box ref="search-box" />
    <div class="tw-py-4"></div>
    <div
      class="queries-results-section tw-flex tw-items-center tw-justify-between"
    >
      <div class="tw-h-full tw-w-80 tw-mr-4">
        <search-queries @refresh-search="refreshSearch" />
      </div>
      <div class="tw-h-full tw-w-full">
        <results-section />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "../components/SearchBox.vue";
import SearchQueries from "../components/SearchQueries.vue";
import ResultsSection from "../components/ResultsSection.vue";

export default {
  name: "AtlanHome",
  components: {
    SearchBox,
    SearchQueries,
    ResultsSection,
  },
  methods: {
    refreshSearch(query) {
      this.$refs["search-box"].searchKeyword = query;
    },
  },
};
</script>

<style>
.container {
  height: 100vh;
}
.queries-results-section {
  height: calc(100% - 72px);
}
</style>
