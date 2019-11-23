// Tile.vue
<template>
  <div class="tile">Here is the tile</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private state!: string | null;
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
