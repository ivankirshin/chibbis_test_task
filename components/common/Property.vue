<template>
  <div class="property">
    <span class="property__title"
      >{{ title }}
      <span class="property__divider">:</span>
    </span>
    <span class="property__value">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Property extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string;
  @Prop({ required: true, type: String }) readonly value!: string;
}
</script>

<style lang="scss" scoped>
.property {
  white-space: nowrap;

  &__title {
    margin-right: 10px;
  }

  &__divider {
    color: $color-primary;
  }

  &__value {
    color: $color-grey-light;
  }
}
</style>
