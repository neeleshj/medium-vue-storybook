//Game.vue
<template>
  <div class="game">
    <InfoText class="margin-bottom-4" :data="text" />
    <Board :data="board" @selectBoardTile="onTileSelected" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Board from '@/components/Board.vue';
import InfoText from '@/components/InfoText.vue';
import { mapGetters } from 'vuex';
import { TileInterface, TileState } from '../components/Tile.stories';

@Component({
  components: {
    Board,
    InfoText,
  },
  computed: {
    ...mapGetters({
      board: 'State/getBoardState',
      text: 'State/getInfoText',
      currentPlayer: 'State/getCurrentPlayer',
    }),
  },
})
export default class Game extends Vue {
  /*
   *  Naughts and Crosses
   *  currentPlayer will be true initially - this will be the 'Naught' player
   */

  board!: Array<TileInterface>;
  currentPlayer!: boolean;

  mount(){
    
  }

  checkForWinnder() {
    // Check for winning combinations
    // Check if the board is full!
  }

  onTileSelected(tile: TileInterface) {
    if (tile.state == TileState.EMPTY) {
      // Update the tile data
      let newTile = {
        ...tile,
        state: this.currentPlayer ? TileState.NAUGHT : TileState.CROSS,
        updatedAt: Date.now(),
      };
      // Update the board
      let newBoard = this.board.map((t: TileInterface) => {
        if (t.id == tile.id) t = tile;
      });
      // Send new board data to the store
    } else {
      alert('Tile already selected');
    }
  }
}
</script>

<style scoped lang="scss">
.game {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.margin-bottom-4 {
  margin-bottom: 4rem;
}
</style>
