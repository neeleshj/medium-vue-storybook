//index.ts

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { TileInterface } from '@/components/Tile.stories';
import { BoardEmptyData } from '@/components/Board.stories';
import { DefaultText } from '@/components/InfoText.stories';

@Module({
  namespaced: true,
})
export default class State extends VuexModule {
  //State
  boardState: Array<TileInterface> = BoardEmptyData;
  infoText: string = DefaultText;
  currentPlayer: boolean = true;

  //Getters
  get getBoardState() {
    return this.boardState;
  }

  get getInfoText() {
    return this.infoText;
  }

  get getCurrentPlayer() {
    return this.currentPlayer;
  }

  //Mutations
  @Mutation
  setBoardState(state: Array<TileInterface>) {
    this.boardState = state;
  }

  @Mutation
  setInfoText(text: string) {
    this.infoText = text;
  }

  @Mutation
  setCurrentPlayer(state: boolean) {
    this.currentPlayer = state;
  }

  //Actions
  @Action({ commit: 'setBoardState' })
  retBoardState(state: Array<TileInterface>) {
    return state;
  }

  @Action({ commit: 'setInfoText' })
  retInfoText(text: string) {
    return text;
  }

  @Action({ commit: 'setCurrentPlayer' })
  retCurrentPlayer(state: boolean) {
    return state;
  }
}
