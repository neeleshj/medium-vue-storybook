// Tile.vue
<template>
  <div class="tile">{{data.state}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TileInterface } from './Tile.stories';

@Component
export default class Tile extends Vue {
  @Prop() private data!: TileInterface | null;
}
</script>

<style scoped lang="scss">
.tile {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: blue; //This is just temporary
  color: white; //So is this
}
</style>
