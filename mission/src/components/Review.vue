<template>
  <div class="div-review-wrapper" v-for="review in reviewData" :key="review.id">
    <div class="div-review">
      <div class="div-review-list-review">
        <div class="div-review-list-reviewer">
          <div class="div-reviewer">
            {{ review.reviewer.userName }}
          </div>
          <div class="div-created">{{ review.createdDate }}</div>
        </div>
        <div class="div-review-satisfaction">{{ review.title }}만족해요</div>
        <div class="div-review-content">{{ review.content }}</div>
      </div>
      <img
        :src="review.ImageUrl"
        class="div-review-list-review_img"
        style="width: 100%; height: 100%; max-width: 64px; max-height: 64px"
      />
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import review from '@/data/review';

export default {
  name: 'Review',
  props: {
    itemId: Number,
  },
  data() {
    return {
      reviewData: [{}],
    };
  },

  methods: {
    blindReviewerName() {
      this.reviewData = review;
      for (let i = 0; i < this.reviewData.length; i += 1) {
        // 유저 이름 블라인드 처리
        this.reviewData[i].reviewer.userName = `${this.reviewData[i].reviewer.userName[0]}**`;
      }
    },
  },
  created() {
    this.blindReviewerName();
  },
};
</script>

<style lang="scss">
@import '../assets/style/Review.scss';
</style>
