<template>
  <div class="page-main">
    <nuxt-link to="/restaurants" class="page-main__link">Все рестораны</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.page-main {
  display: flex;
  justify-content: center;

  &__link {
    margin: 30px 0;
    font-size: $size-md;
    transition: color 0.3s;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
