<template>
  <div class="div-review-wrapper" v-for="review in reviewData" :key="review.id">
    <div class="div-review">
      <div class="div-review-left">
        <div class="div-review-left-top">
          <div class="div-reviewer">
            {{ review.reviewer.userName }}
          </div>
          <div class="div-created">{{ review.createdDate }}</div>
        </div>
        <div v-if="review.isSatisfied === true">
          <div class="div-review-satisfaction">만족해요</div>
        </div>
        <div v-else>
          <div class="div-review-satisfaction">별로예요</div>
        </div>
        <div class="div-review-content">{{ review.content }}</div>
      </div>
      <img :src="review.ImageUrl" class="img-review" />
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
        // 리뷰 날짜
        this.reviewData[i].createdDate = this.reviewData[i].createdDate.slice(0, 10);
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
