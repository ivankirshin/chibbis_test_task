<template>
  <Section title="Рестораны" class="restaurants">
    <div v-if="isLoading" class="restaurants__loading">Загрузка...</div>
    <div v-else-if="isError" class="restaurants__error">Ошибка при выполнении запроса</div>
    <template v-else>
      <template v-if="restaurantsLimited.length">
        <Restaurant
          v-for="restaurant of restaurantsLimited"
          :key="restaurant.id"
          :restaurant="restaurant"
          class="restaurants__place"
        />
      </template>
      <div v-else-if="searchValue || isActiveCategoryFilters" class="restaurants__no-items">
        Нет результатов поиска
      </div>
      <div v-else class="restaurants__no-items">Нет ресторанов</div>

      <button v-if="itemsToShow < restaurantsFiltered.length" class="restaurants__btn-show-more" @click="showMore">
        Показать еще
      </button>
    </template>
  </Section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Restaurant from '~/components/cards/restaurant/Restaurant.vue';
import Section from '~/components/common/blocks/Section.vue';
import { Categories } from '~/store/filters';
import { StoreFilters, StoreRestaurants } from '~/utils/storeAccessor';

const ITEMS_TO_SHOW = 2;

@Component({
  components: {
    Section,
    Restaurant,
  },
})
export default class AllRestaurants extends Vue {
  itemsToShow: number = ITEMS_TO_SHOW;
  isError: boolean = false;
  isLoading: boolean = false;

  get searchValue() {
    const { search } = this.$route.query;
    if (search && typeof search === 'string') {
      return search;
    }
    return '';
  }

  get isFreeDelivery() {
    return StoreFilters.isFreeDelivery;
  }

  get categoryFilters() {
    return StoreFilters.categories;
  }

  get isActiveCategoryFilters() {
    return Object.values(StoreFilters.categories).some(Boolean);
  }

  get restaurants() {
    return StoreRestaurants.restaurants;
  }

  get restaurantsFiltered() {
    this.resetItemsToShow();

    if (this.isActiveCategoryFilters) {
      return this.restaurants.filter(({ title, categories, delivery: { cost } }) => {
        if (!this.checkBySearch(title) || !this.checkByFreeDelivery(cost)) return false;
        return categories.some(category => this.categoryFilters[category as Categories]);
      });
    }

    return this.restaurants.filter(
      ({ title, delivery: { cost } }) => this.checkBySearch(title) && this.checkByFreeDelivery(cost),
    );
  }

  get restaurantsLimited() {
    return this.restaurantsFiltered.slice(0, this.itemsToShow);
  }

  checkBySearch(title: string) {
    return this.searchValue ? title.toLowerCase().includes(this.searchValue.toLowerCase()) : true;
  }

  checkByFreeDelivery(deliveryPrice: number) {
    return this.isFreeDelivery ? !deliveryPrice : true;
  }

  showMore() {
    this.itemsToShow = this.itemsToShow + 2;
  }

  resetItemsToShow() {
    this.itemsToShow = ITEMS_TO_SHOW;
  }

  async fetch() {
    try {
      this.isLoading = true;
      await StoreRestaurants.fetchRestaurants();
    } catch (e) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.restaurants {
  &__place:not(:last-child) {
    margin-bottom: 20px;
  }

  &__no-items {
    color: $color-grey;
    font-size: $size-md;
  }

  &__btn-show-more {
    display: block;
    margin: 0 auto;
    padding: 10px;
    color: $color-primary;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: $color-grey-lightest;
    }
  }

  &__error {
    color: $color-error;
  }
}
</style>
