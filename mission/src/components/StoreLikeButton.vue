<template>
  <div v-if="this.isLiked === true">
    <img class="img-storeLike" src="../assets/storeLikeIcon.svg" alt="" @click="onLikeClick" />
  </div>
  <div v-else>
    <img class="img-storeLike" src="../assets/storeLikedIcon.svg" alt="" @click="onLikeClick" />
  </div>
</template>

<script>
export default {
  name: 'storeLike',
  props: {
    like: Boolean,
  },
  data() {
    return {
      isLiked: this.like,
    };
  },

  methods: {
    onLikeClick() {
      this.isLiked = !this.isLiked;
    },
  },
};
</script>
<style lang="scss">
@import '../assets/style/StoreLikeButton.scss';
</style>
