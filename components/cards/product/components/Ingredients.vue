<template>
  <div class="ingredients">
    <span v-for="(ingredient, index) of ingredients" :key="index" class="ingredients__item">{{ ingredient }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Ingredients extends Vue {
  @Prop({ type: Array, required: true }) ingredients!: string[];
}
</script>

<style lang="scss" scoped>
.ingredients {
  color: $color-grey;
  line-height: 1.3;
  &__item {
    &:not(:last-child) {
      &::after {
        content: ' - ';
      }
    }
  }
}
</style>
