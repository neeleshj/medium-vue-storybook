//Game.vue
<template>
  <div class="game">
    <InfoText class="margin-bottom-4" :data="text" />
    <!-- this will cause the snapshot to fail -->
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

  // References to the getters
  board!: Array<TileInterface>;
  currentPlayer!: boolean;

  winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Lifecycle hook - when component is mounted
  mounted() {
    // Update the text at the start of the game
    this.$store.dispatch('State/retInfoText', "Player One's Turn");
  }

  updateBoard(tile: TileInterface) {
    // Update the tile data
    let newTile = {
      ...tile,
      state: this.currentPlayer ? TileState.NAUGHT : TileState.CROSS,
      updatedAt: Date.now(),
    };
    // Update the board
    let newBoard = this.board.map((t: TileInterface) => {
      if (t.id == tile.id) return newTile;
      return t;
    });
    return newBoard;
  }

  onTileSelected(tile: TileInterface) {
    if (tile.state == TileState.EMPTY) {
      let winner = false;

      // Update board
      let newBoard = this.updateBoard(tile);
      this.$store.dispatch('State/retBoardState', newBoard);

      // Check for winner
      for (let i = 0; i < this.winningLines.length; i++) {
        const [a, b, c] = this.winningLines[i];
        console.log(a, b, c);
        console.log(newBoard[a].state, newBoard[b].state, newBoard[c].state);
        if (
          newBoard[a].state &&
          newBoard[a].state === newBoard[b].state &&
          newBoard[a].state === newBoard[c].state
        ) {
          winner = true;
        }
      }

      // If we have a winner, show the user
      if (winner) {
        this.$store.dispatch(
          'State/retInfoText',
          `Player ${this.currentPlayer ? 'One' : 'Two'} has Won!`
        );
      } else {
        // and if not, next turn
        this.$store.dispatch(
          'State/retInfoText',
          `Player ${this.currentPlayer ? 'One' : 'Two'}'s Turn`
        );
        this.$store.dispatch('State/retCurrentPlayer', !this.currentPlayer);
      }
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
