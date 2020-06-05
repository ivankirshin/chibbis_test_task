<template>
  <Section title="Хиты продаж" class="hits">
    <div v-if="products.length" class="hits__products">
      <Product v-for="product of products" :key="product.id" :product="product" class="hits__product" />
    </div>
    <div v-else class="hits__no-items">Нет ресторанов</div>
  </Section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Product from '~/components/cards/product/Product.vue';
import Section from '~/components/common/blocks/Section.vue';
import { StoreProducts } from '~/utils/storeAccessor';

@Component({
  components: {
    Section,
    Product,
  },
})
export default class Hits extends Vue {
  get products() {
    return StoreProducts.hits;
  }

  async fetch() {
    await StoreProducts.fetchHits();
  }
}
</script>

<style lang="scss" scoped>
.hits {
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 260px));
    gap: 20px;
    justify-content: space-around;
  }

  &__no-items {
    color: $color-grey;
    font-size: $size-md;
  }
}
</style>
