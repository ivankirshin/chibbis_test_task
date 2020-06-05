<template>
  <footer class="footer">
    <div class="footer__container">
      Chibbis test task by Ivan Kirshin
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px 0;
  color: white;
  background-color: $color-default;

  &__container {
    display: flex;
    justify-content: center;
    max-width: $container-width-xl;
    margin: auto;
  }
}
</style>
