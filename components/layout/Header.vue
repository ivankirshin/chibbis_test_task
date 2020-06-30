<template>
  <header class="header">
    <div class="header__content">
      <div class="header__container">
        <nuxt-link to="/">
          <img src="@/assets/images/logo.png" />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
console.warn('bbb 4');
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  background-color: $color-default;

  &__content {
    width: 100%;
    background-color: white;
  }

  &__container {
    display: flex;
    align-items: center;
    max-width: $container-width-xl;
    margin: auto;
    padding: 5px 20px;

    @media (max-width: $screen-md-max) {
      justify-content: center;
      padding: 5px 10px;
    }
  }
}
</style>
