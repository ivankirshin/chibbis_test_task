<template>
  <div class="review">
    <div class="review__info">
      <img src="@/assets/images/like.png" class="review__status" :class="classDislike" />
      <div class="review__wrapper-name">
        <span class="review__name">{{ review.username }}</span>
        о ресторане
        <nuxt-link to="/" class="review__restaurant">{{ review.restaurant }}</nuxt-link>
      </div>
    </div>
    <div class="review__message">{{ review.message }}</div>
    <div class="review__date">
      {{ date }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import ReviewModel from '~/models/Review';

@Component
export default class Review extends Vue {
  @Prop({ type: Object, required: true }) review!: ReviewModel;

  get classDislike() {
    return !this.review.isPositive && 'review__status_dislike';
  }

  get date() {
    return this.review.date.toLocaleString('ru', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
</script>

<style lang="scss" scoped>
.review {
  padding: 10px;
  overflow: hidden;
  border: 1px solid $color-grey-light;
  border-radius: 5px;

  &__info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__restaurant {
    color: $color-primary;

    &:hover {
      color: $color-primary-hover;
    }
  }

  &__status {
    height: 30px;
    margin-right: 10px;

    &_dislike {
      transform: scaleY(-1);
    }
  }

  &__message {
    margin-bottom: 10px;
    overflow: hidden;
    line-height: 1.4;
    text-overflow: ellipsis;
  }

  &__date {
    color: $color-grey;
    font-size: $size-xs;
  }
}
</style>
