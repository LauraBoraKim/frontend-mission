<template>
  <div id="item-info-page">
    <div class="div-item-wrapper">
      <img class="img-item-main-image" :src="`${this.mainImageUrl}`" alt="상품이미지" />
      <div class="info-seller-wrapper">
        <!-- 셀러 -->
        <div class="div-bottom-main-image">
          <div class="div-seller-wrapper">
            <div v-if="this.seller.sellerImageUrl === 'null'">
              <img src="../assets/dafaultUserIcon.svg" alt="deafaultUserImg" />
            </div>
            <div v-else>
              <img :src="`${this.seller.sellerImageUrl}`" alt="sellerProfileImg" />
            </div>
            <div class="div-seller-info">
              <div class="div-seller-name">{{ this.seller.sellerName }}</div>
              <div class="div-seller-tag">{{ this.seller.tag }}</div>
              <div class="div-seller-satisfaction">
                마켓 만족도 {{ `${this.seller.satisfaction}` }}%
              </div>
            </div>
          </div>
          <div class="div-like-wrapper">
            <StoreLike :like="this.isStoreLiked" />
            <div class="div-like-count">9725</div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <!-- 상품 가격 정보-->
      <div class="div-item-main-wrapper">
        <div class="div-item-title">{{ this.title }}</div>
        <div v-if="this.isDiscount === false">
          <div class="div-item-price-wrapper">
            <div class="div-price">{{ priceWithComma }}</div>
          </div>
        </div>
        <div v-else>
          <div class="div-item-price-wrapper">
            <div class="div-discount-persent">{{ this.discountRate }}%</div>
            <div class="div-price">{{ purchaesePriceWithComma }}</div>
            <div class="div-won">원</div>
            <div class="div-prime-price">{{ priceWithComma }}원</div>
          </div>
        </div>
        <div class="div-coupon">최대 5,000원 할인 쿠폰받기</div>
      </div>
      <div class="divider" />
      <!-- 상품 리뷰 정보-->
      <div class="div-review-info-wrapper">
        <div class="div-num-of-reviews">리뷰 1,785개</div>
        <div class="div-rate-of-satisfationc">리뷰를 작성한 사람 중 96%가 만족한 상품이에요</div>
      </div>
      <!-- 상품 상세 정보-->
      <div class="div-item-info-wrapper">
        <div class="div-info-title">상품정보</div>

        <div class="divider" />

        <div class="info-content" v-html="this.itemDetail"></div>
      </div>
      <!-- 상품 리뷰 -->
      <div class="div-review-title">리뷰</div>
      <div class="divider"></div>
      <Review class="review" :itemId="this.id" />

      <div class="div-floating-buy-button">
        <Like :like="this.isItemLiked" />
        <div v-if="itemInfo[0].isDiscount === false">
          <div class="div-buy-button">{{ priceWithComma }} 원 구매</div>
        </div>
        <div v-else>
          <div class="div-buy-button">{{ purchaesePriceWithComma }} 원 구매</div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import itemInfo from '@/data/itemInfo';
import StoreLike from '@/components/StoreLikeButton.vue';
import Like from '@/components/LikeButton.vue';
import Review from '@/components/Review.vue';

export default {
  name: 'ItemInfoPage',
  components: {
    StoreLike,
    Like,
    Review,
  },
  data() {
    return {
      itemInfo,
      id: '',
      seller: {},
      mainImageUrl: '',
      title: '',
      itemDetail: '',
      price: 0,
      createdDate: '',
      modifiedDate: '',
      likeCount: 0,
      viewCount: 0,
      isItemLiked: '',
      isStoreLiked: '',
      isDiscount: '',
      discountRate: 0,
      discountPrice: 0,
      purchasePrice: 0,
    };
  },
  methods: {
    initData() {
      this.id = itemInfo[0].id;
      this.seller = itemInfo[0].seller;
      this.mainImageUrl = itemInfo[0].mainImageUrl;
      this.isStoreLiked = itemInfo[0].isStoreLiked;
      this.isItemLiked = itemInfo[0].isItemLiked;
      this.title = itemInfo[0].title;
      this.price = itemInfo[0].price;
      this.discountRate = itemInfo[0].discountRate;
      this.discountPrice = itemInfo[0].discountPrice;
      this.purchasePrice = itemInfo[0].purchasePrice;
      this.itemDetail = itemInfo[0].itemDetail;
    },
    priceToString(price) {
      return String(price).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  computed: {
    priceWithComma() {
      return this.priceToString(this.price);
    },
    discountPriceWithComma() {
      return this.priceToString(this.discountPrice);
    },
    purchaesePriceWithComma() {
      return this.priceToString(this.purchasePrice);
    },
  },
  created() {
    this.initData();
  },
};
</script>

<style lang="scss">
@import '../assets/style/ItemDetails.scss';
</style>
