<template>
  <div v-if="this.isLiked === true">
    <img class="img-like-button" src="../assets/likeIcon.svg" alt="" @click="onLikeClick" />
  </div>
  <div v-else>
    <img class="img-like-button" src="../assets/likedIcon.svg" alt="" @click="onLikeClick" />
  </div>
</template>

<script>
export default {
  name: 'like',
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
@import '../assets/style/LikeButton.scss';
</style>
