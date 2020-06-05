<template>
  <div class="section">
    <h4 class="section__title">{{ title }}</h4>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Section extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string;
}
</script>

<style lang="scss" scoped>
.section {
  padding: 20px;
  border: 1px solid $color-grey-light;
  border-radius: 5px;

  @media (max-width: $screen-lg-max) {
    padding: 10px;
  }

  &__title {
    margin-bottom: 30px;
    font-size: $size-md;

    @media (max-width: $screen-lg-max) {
      margin-bottom: 10px;
    }
  }
}
</style>
