<template>
  <label class="search" :class="classIsFocused">
    <img src="~/assets/images/search.svg" class="search__icon" />
    <input
      v-bind="$attrs"
      :value="value"
      :placeholder="$attrs.placeholder || 'Поиск'"
      class="search__input"
      @input="changeValue($event.target.value)"
      @focus="focus"
      @blur="blur"
    />
  </label>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class Search extends Vue {
  @Prop({ required: true, type: String }) readonly value!: string;

  isFocused: boolean = false;

  get classIsFocused() {
    return this.isFocused && 'search_focused';
  }

  focus() {
    this.isFocused = true;
  }

  blur() {
    this.isFocused = false;
  }

  @Emit('input')
  changeValue(value: string) {
    return value;
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  max-width: 210px;
  height: 38px;
  padding: 0 10px;
  border: 1px solid $color-grey-lighter;
  border-radius: 4px;
  transition: border-color 0.3s;

  &_focused {
    border-color: $color-primary;
  }

  &__input {
    width: 100%;
    font-weight: inherit;
    border: none;
  }

  &__icon {
    margin-right: 8px;
  }
}
</style>
