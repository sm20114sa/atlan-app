<template>
  <div class="result-card tw-h-full tw-flex tw-items-center">
    <span v-if="length" class="tw-text-center tw-w-full">
      The length of search query is : {{ length }}
    </span>
    <slot> </slot>
  </div>
</template>

<script>
// import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "ResultCard",
  props: {
    length: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({}),

  computed: {
    // ...mapGetters(search),
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
