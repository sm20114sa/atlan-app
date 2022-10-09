<template>
  <div
    class="tw-h-full tw-overflow-y-auto tw-scroll-m-2 tw-w-full tw-text-center tw-border tw-border-solid tw-border-gray-200 tw-rounded-lg tw-bg-white"
  >
    <div
      class="tw-px-2 tw-border-solid tw-border-b tw-border-gray-200 tw-flex tw-items-center tw-cursor-pointer"
      :class="index === getSelectedQueryIndex ? 'tw-bg-blue-100' : ''"
      v-for="(query, index) in items"
      :key="index"
      @click="selectQuery(query, index)"
    >
      {{ query }}
    </div>
    <div v-if="!items.length" class="tw-h-full tw-flex tw-items-center">
      <span class="tw-w-full tw-mx-auto tw-text-gray-400">
        Nothing searched yet
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchQueries",
  props: {},
  data: () => ({}),

  computed: {
    ...mapGetters(["getQueries", "getSelectedQuery", "getSelectedQueryIndex"]),
    items() {
      return this.$store.getters.getQueries;
    },
  },
  methods: {
    ...mapActions(["setSelectedQuery, setSelectedQueryIndexm updateQueries"]),
    selectQuery(query, index) {
      if (
        index !== this.$store.getters.getSelectedQueryIndex &&
        query !== this.$store.getters.getSelectedQuery
      ) {
        this.$store.dispatch("setSelectedQuery", query);
        this.$store.dispatch("setSelectedQueryIndex", index);
        this.$emit("refreshSearch", query);
        if (!this.$store.getters.getQueries.includes(query))
          this.$store.dispatch("updateQueries", query);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
