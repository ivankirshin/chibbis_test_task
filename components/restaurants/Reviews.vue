<template>
  <Section title="Хиты продаж" class="reviews">
    <template v-if="reviews.length">
      <Review v-for="review of reviews" :key="review.id" :review="review" class="reviews__item" />
    </template>
    <div v-else class="reviews__no-items">Нет ресторанов</div>
  </Section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Section from '~/components/common/blocks/Section.vue';
import Review from '~/components/cards/Review.vue';
import { StoreReviews } from '~/utils/storeAccessor';

@Component({
  components: {
    Section,
    Review,
  },
})
export default class Reviews extends Vue {
  get reviews() {
    return StoreReviews.reviews;
  }

  async fetch() {
    await StoreReviews.fetchReviews();
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  &__item:not(:last-child) {
    margin-bottom: 20px;
  }

  &__no-items {
    color: $color-grey;
    font-size: $size-md;
  }
}
</style>
