<template>
  <div class="header">
    <Search v-model="searchValue" placeholder="Поиск заведения" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Search from '~/components/inputs/Search.vue';

@Component({
  components: {
    Search,
  },
})
export default class extends Vue {
  // В данном случае привязал значение инпута к гет параметрам
  // Конечно, можно было бы использовать и vuex. Вопрос, нужно значение в ссылке или нет
  get searchValue() {
    return (this.$route.query.search as string) ?? '';
  }

  set searchValue(value: string) {
    this.$router.replace({ query: { search: value || undefined } });
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  border: 1px solid $color-grey-light;
  border-radius: 5px;
}
</style>
