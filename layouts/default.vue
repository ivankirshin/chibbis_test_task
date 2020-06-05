<template>
  <div class="layout-default">
    <Header />
    <main class="layout-default__main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
    width: 100%;
    max-width: $container-width-xl;
    margin: auto;
    padding: 0 20px;

    @media (max-width: $screen-md-max) {
      padding: 0 10px;
    }
  }
}
</style>
