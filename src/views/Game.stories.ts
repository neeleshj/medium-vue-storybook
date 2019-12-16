import { storiesOf } from '@storybook/vue';

import Game from './Game.vue';

import Vue from 'vue';
import Vuex from 'vuex';
import { BoardWithSelectedData } from '@/components/Board.stories';
import { DefaultText } from '@/components/InfoText.stories';

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    State: {
      namespaced: true,
      state: {
        boardState: BoardWithSelectedData,
        infoText: DefaultText,
      },
      getters: {
        getBoardState: (state) => {
          return state.boardState;
        },
        getInfoText: (state) => {
          return state.infoText;
        },
      },
    },
  },
});

storiesOf('GameView', module).add('Default', () => ({
  components: { Game },
  template: '<Game  />',
  store,
}));
