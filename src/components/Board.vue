<template>
  <div class="board">
    <div class="board__row">
      <Tile v-for="tile in data" :key="tile.id" :data="tile" @selectTile="onSelectTile(tile)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TileInterface, TileState } from "./Tile.stories";
import Tile from "./Tile.vue";

@Component({
  components: {
    Tile
  }
})
export default class Board extends Vue {
  @Prop() data!: Array<TileInterface>;

  states = TileState;

  onSelectTile(tile: TileInterface) {
    this.$emit("selectBoardTile", tile);
  }
}
</script>

<style scoped lang="scss">
.board {
  &__row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 365px;
  }
}
</style>
