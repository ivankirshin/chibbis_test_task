<template>
  <div class="likes">
    <img src="@/assets/images/like.png" class="likes__icon" />
    {{ positivePercent }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class LikesPercent extends Vue {
  @Prop({ type: Number, required: true }) totalMarks!: number;
  @Prop({ type: Number, required: true }) positiveMarks!: number;

  get positivePercent() {
    const percent = (this.positiveMarks / this.totalMarks) * 100;
    return percent <= 100 ? `${percent.toFixed()}%` : 'Данные с ошибкой';
  }
}
</script>

<style lang="scss" scoped>
.likes {
  display: flex;
  align-items: center;

  &__icon {
    height: 24px;
    margin-right: 7px;
  }
}
</style>
