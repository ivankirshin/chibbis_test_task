import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { Theme } from '~/types/layout';

// Хотел сделать переключение тем, но не успел
@Module({ name: 'layout', stateFactory: true, namespaced: true })
export default class Layout extends VuexModule {
  theme: Theme = Theme.LIGHT;

  @Mutation
  public setTheme(theme: Theme) {
    this.theme = theme;
  }
}
