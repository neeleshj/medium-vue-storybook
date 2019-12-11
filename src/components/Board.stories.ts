import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Board from './Board.vue';
import { TileInterface, TileState, TileData } from './Tile.stories';

export const BoardEmptyData: Array<TileInterface> = [
  { ...TileData, id: 0 },
  { ...TileData, id: 1 },
  { ...TileData, id: 2 },
  { ...TileData, id: 3 },
  { ...TileData, id: 4 },
  { ...TileData, id: 5 },
  { ...TileData, id: 6 },
  { ...TileData, id: 7 },
  { ...TileData, id: 8 },
];

export const BoardWithSelectedData: Array<TileInterface> = [
  { ...TileData, id: 0, state: TileState.CROSS },
  { ...TileData, id: 1 },
  { ...TileData, id: 2 },
  { ...TileData, id: 3, state: TileState.NAUGHT },
  { ...TileData, id: 4, state: TileState.CROSS },
  { ...TileData, id: 5 },
  { ...TileData, id: 6 },
  { ...TileData, id: 7, state: TileState.CROSS },
  { ...TileData, id: 8 },
];
export const methods = {
  onSelectTile: action('onSelectTile'),
};

storiesOf('Board', module)
  .add('Empty Board', () => ({
    components: { Board },
    template: '<Board :data="emptyData" @selectBoardTile="onSelectTile" />',
    data: () => ({ BoardEmptyData }),
    methods,
  }))
  .add('Not an empty Board', () => ({
    components: { Board },
    template: '<Board :data="data" @selectBoardTile="onSelectTile" />',
    data: () => ({ BoardWithSelectedData }),
    methods,
  }));
