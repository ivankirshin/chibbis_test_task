<template>
  <div class="product">
    <img :src="product.image" alt="Изображение не найдено" class="product__image" />
    <div class="product__about">
      <div class="product__wrapper-title">
        <nuxt-link to="/" class="product__title">{{ product.name }}</nuxt-link>
      </div>
      <Ingredients :ingredients="product.ingredients" class="product__ingredients" />
      <div class="product__weight">{{ weight }}</div>
      <div class="product__price">{{ product.price }} ₽</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Ingredients from '~/components/cards/product/components/Ingredients.vue';
import ProductModel from '~/models/Product';

@Component({
  components: {
    Ingredients,
  },
})
export default class Product extends Vue {
  @Prop({ type: Object, required: true }) product!: ProductModel;

  get weight() {
    const { weight } = this.product;
    return weight ? `${weight} гр.` : 'Вес не указан';
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid $color-grey-light;
  border-radius: 5px;

  &__image {
    width: 100%;
    min-width: 100%;
    height: 200px;
    min-height: 200px;
    margin-bottom: 15px;
    object-fit: cover;
  }

  &__about {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px;
  }

  &__wrapper-title {
    margin-bottom: 10px;
  }

  &__title {
    font-weight: $weight-semi-bold;
    font-size: $size-md;
  }

  &__ingredients {
    margin-bottom: 10px;
  }

  &__weight {
    margin-bottom: 10px;
  }

  &__price {
    margin-top: auto;
    color: $color-primary;
    font-weight: $weight-semi-bold;
  }
}
</style>
