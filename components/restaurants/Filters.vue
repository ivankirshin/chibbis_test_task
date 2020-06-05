<template>
  <div class="filters">
    <h4 class="filters__title">Фильтры</h4>
    <Checkbox v-model="isFreeDelivery" class="filters__checkbox">Бесплатная доставка</Checkbox>
    <Checkbox
      v-for="([category, value], index) of categories"
      :key="index"
      :checked="value"
      class="filters__checkbox"
      @change="setCategoryFilter(category, $event)"
      >{{ category }}</Checkbox
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Checkbox from '~/components/switchers/Checkbox.vue';
import { Categories } from '~/store/filters';
import { StoreFilters } from '~/utils/storeAccessor';

@Component({
  components: {
    Checkbox,
  },
})
export default class Filters extends Vue {
  value: boolean = false;

  get isFreeDelivery() {
    return StoreFilters.isFreeDelivery;
  }

  set isFreeDelivery(value) {
    StoreFilters.setFreeDelivery(value);
  }

  get categories() {
    return Object.entries(StoreFilters.categories);
  }

  setCategoryFilter(category: Categories, value: boolean) {
    StoreFilters.setCategory({ category, value });
  }
}
</script>

<style lang="scss" scoped>
.filters {
  padding: 20px;
  border: 1px solid $color-grey-light;
  border-radius: 5px;

  &__title {
    margin-bottom: 20px;
    font-size: $size-md;
  }

  &__checkbox {
    margin-bottom: 10px;
  }
}
</style>
