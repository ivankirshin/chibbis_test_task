<template>
  <label class="checkbox" :class="classCheckboxSelected">
    <input :checked="checked" type="checkbox" class="checkbox__input" @change="changeValue($event.target.checked)" />
    <div class="checkbox__view"></div>
    <div v-if="$slots.default" class="checkbox__label">
      <slot />
    </div>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';

@Component({
  model: {
    prop: 'checked',
    event: 'change',
  },
})
export default class Checkbox extends Vue {
  @Prop({ type: Boolean, required: true }) readonly checked!: boolean;

  get classCheckboxSelected() {
    return this.checked && 'checkbox_selected';
  }

  @Emit('change')
  changeValue(value: boolean) {
    return value;
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__view {
    position: relative;
    display: inline-block;
    flex: none;
    width: 20px;
    height: 20px;
    margin-top: -1px;
    overflow: hidden;
    background-color: white;
    border: 1px solid $color-grey;
    border-radius: 2px;

    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $color-primary;
      transform: scale(0);
      transition: transform 0.3s;
      content: '';
    }

    .checkbox_selected & {
      &::after {
        background-image: url('~@/assets/images/selected.svg');
        background-repeat: no-repeat;
        background-position: center;
        transform: scale(1);
      }
    }
  }

  &__label {
    margin-left: 10px;
  }
}
</style>
