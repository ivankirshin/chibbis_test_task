<template>
  <div class="page-restaurants">
    <Header class="page-restaurants__header" />
    <div class="page-restaurants__main">
      <Filters class="page-restaurants__filters" />
      <div class="page-restaurants__content">
        <AllRestaurants class="page-restaurants__section" />
        <Hits class="page-restaurants__section" />
        <Comments class="page-restaurants__section" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AllRestaurants from '~/components/restaurants/AllRestaurants.vue';
import Comments from '~/components/restaurants/Reviews.vue';
import Filters from '~/components/restaurants/Filters.vue';
import Header from '~/components/restaurants/Header.vue';
import Hits from '~/components/restaurants/Hits.vue';

@Component({
  components: {
    Header,
    Filters,
    AllRestaurants,
    Hits,
    Comments,
  },
})
export default class Restaurants extends Vue {}
</script>

<style lang="scss" scoped>
.page-restaurants {
  padding: 20px 0;

  &__header {
    margin-bottom: 20px;
  }

  &__main {
    display: flex;

    @media (max-width: $screen-md-max) {
      flex-direction: column;
    }
  }

  &__filters {
    width: 300px;
    margin-right: 20px;

    @media (max-width: $screen-md-max) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  &__content {
    flex: 1;
  }

  &__section:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
