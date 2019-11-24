// Tile.vue
<template>
  <button
    class="tile"
    :class="{
      'tile--blue' : data.state == states.NAUGHT,
      'tile--red' : data.state == states.CROSS
      }"
    @click="selectTile"
  >{{data.state}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TileInterface, TileState } from "./Tile.stories";

@Component
export default class Tile extends Vue {
  @Prop() private data!: TileInterface | null;

  states = TileState;

  selectTile() {
    this.$emit("selectTile", true);
  }
}
</script>

<style scoped lang="scss">
.tile {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  border: 2px #888 solid;
  font-size: 4rem;

  &--blue {
    color: blue;
  }

  &--red {
    color: red;
  }
}
</style>
