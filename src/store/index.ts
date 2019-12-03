import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { TileInterface } from '@/components/Tile.stories';
import { emptyData } from '@/components/Board.stories'
import { defaultText } from '@/components/InfoText.stories'

@Module
export default class SimpleStore extends VuexModule {

  //State
  boardState: Array<TileInterface> = emptyData;
  infoText: string = defaultText;

  //Getters
  get getBoardState() {
    return this.boardState;
  }

  get getInfoText() {
    return this.infoText
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


  //Actions
  @Action({ commit: 'setBoardState' })
  retBoardState(state: Array<TileInterface>) {
    return state;
  }

  @Action({ commit: 'setInfoText' })
  retInfoText(text: string) {
    return text;
  }
}