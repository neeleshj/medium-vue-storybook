//Game.vue
<template>
  <div class="game">
    <InfoText class="margin-bottom-4" :data="text" />
    <Board :data="board" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Board from '@/components/Board.vue';
import InfoText from '@/components/InfoText.vue';
import { mapGetters } from 'vuex';

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
export default class Game extends Vue {}
</script>

<style scoped lang="scss">
.game {
  // width: 100%;
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
}

.margin-bottom-4 {
  margin-bottom: 4rem;
}
</style>
