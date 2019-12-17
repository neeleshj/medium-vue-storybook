import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Tile from './Tile.vue';

export enum TileState {
  EMPTY = '',
  NAUGHT = '0',
  CROSS = 'X',
}

export interface TileInterface {
  id: number;
  updatedAt: Date | Number;
  state: TileState;
}

export const TileData: TileInterface = {
  id: 0,
  updatedAt: new Date('1-12-2019'),
  state: TileState.EMPTY,
};

export const methods = {
  onSelectTile: action('onSelectTile'),
};

storiesOf('Board Tile', module)
  .add('Empty Tile', () => ({
    components: { Tile },
    template: `<Tile :data="TileData" @selectTile="onSelectTile" />`,
    data: () => ({ TileData }),
    methods,
  }))
  .add('X Tile', () => ({
    components: { Tile },
    template: `<Tile :data="data" @selectTile="onSelectTile" />`,
    data: () => ({ data: { ...TileData, state: TileState.CROSS } }),
    methods,
  }))
  .add('O Tile', () => ({
    components: { Tile },
    template: `<Tile :data="data" @selectTile="onSelectTile" />`,
    data: () => ({ data: { ...TileData, state: TileState.NAUGHT } }),
    methods,
  }));
