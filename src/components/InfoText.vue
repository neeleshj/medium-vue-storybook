//Text.vue
<template>
  <div class="text" :class="{'text--large' : largeText}">{{data || 'No Data'}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class InfoText extends Vue {
  @Prop() data!: string;
  @Prop() largeText: boolean = false;
}
</script>

<style scoped lang="scss">
.text {
  width: 400px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 1.5rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: center;

  &--large {
    font-size: 2.5rem;
  }
}
</style>
