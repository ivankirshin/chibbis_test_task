<template>
  <div class="restaurant">
    <img :src="restaurant.logo" alt="Изображение не найдено" class="restaurant__image" />
    <nuxt-link to="/" class="restaurant__title restaurant__title_mobile">{{ restaurant.title }}</nuxt-link>
    <div class="restaurant__content">
      <div class="restaurant__about">
        <nuxt-link to="/" class="restaurant__title restaurant__title_desktop">{{ restaurant.title }}</nuxt-link>
        <LikesPercent
          :total-marks="restaurant.reviews.reviewsTotal"
          :positive-marks="restaurant.reviews.reviewsPositive"
          class="restaurant__likes"
        />

        <div class="restaurant__categories">
          <span v-for="(category, index) of restaurant.categories" :key="index" class="restaurant__category">
            {{ category }}
          </span>
        </div>
        <div class="restaurant__links">
          <nuxt-link to="/" class="restaurant__link">Меню</nuxt-link>
          <nuxt-link to="/" class="restaurant__link">Инфо</nuxt-link>
          <nuxt-link to="/" class="restaurant__link">
            Отзывы
            <template v-if="restaurant.reviews.reviewsTotal">({{ restaurant.reviews.reviewsTotal }})</template>
          </nuxt-link>
        </div>
      </div>
      <div class="restaurant__delivery">
        <Property class="restaurant__property" title="Мин. сумма заказа" :value="restaurant.delivery.minSum + ' ₽'" />
        <Property class="restaurant__property" title="Стоимость доставки" :value="restaurant.delivery.cost + ' ₽'" />
        <Property class="restaurant__property" title="Время доставки" :value="deliveryTime" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import LikesPercent from '~/components/cards/restaurant/components/LikesPercent.vue';
import Property from '~/components/common/Property.vue';
import RestaurantModel from '~/models/Restaurant';
import convertMinutesToTime from '~/utils/parseMinutesToTime';

@Component({
  components: {
    Property,
    LikesPercent,
  },
})
export default class Restaurant extends Vue {
  @Prop({ type: Object, required: true }) restaurant!: RestaurantModel;

  get deliveryTime() {
    const { hours, minutes } = convertMinutesToTime(this.restaurant.delivery.minutes);

    if (hours) {
      return minutes ? `${hours} ч ${minutes} м` : `${hours} ч`;
    }
    return `${minutes} м`;
  }
}
</script>

<style lang="scss" scoped>
.restaurant {
  display: flex;
  overflow: hidden;
  border: 1px solid $color-grey-light;
  border-radius: 5px;

  @media (max-width: $screen-xs-max) {
    flex-direction: column;
    align-items: center;
  }

  &__image {
    width: 170px;
    margin-right: 10px;
    object-fit: cover;

    @media (max-width: $screen-md-max + 50px) {
      object-fit: contain;
    }

    @media (max-width: $screen-xs-max) {
      width: 100%;
      height: 200px;
      margin-right: 0;
    }
  }

  &__content {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    @media (max-width: $screen-xs-max) {
      width: 100%;
      text-align: center;
    }
  }

  &__about {
    display: flex;
    flex: none;
    flex-direction: column;
  }

  &__title {
    font-weight: $weight-semi-bold;
    font-size: $size-md;

    &_desktop {
      display: none;
      margin-bottom: 20px;

      @media (min-width: $screen-sm) {
        display: flex;
      }
    }

    &_mobile {
      display: none;
      margin-top: 15px;

      @media (max-width: $screen-xs-max) {
        display: flex;
      }
    }
  }

  &__likes {
    margin-bottom: 20px;

    @media (max-width: $screen-xs-max) {
      justify-content: center;
    }
  }

  &__categories {
    margin-bottom: 20px;
  }

  &__category {
    &:not(:last-child)::after {
      color: $color-primary;
      content: '/';
    }
  }

  &__link {
    transition: color 0.3s;

    &:hover {
      color: $color-primary-hover;
    }
  }

  &__link:not(:last-child) {
    margin-right: 15px;
  }

  &__delivery {
    flex: none;
  }

  &__property:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
