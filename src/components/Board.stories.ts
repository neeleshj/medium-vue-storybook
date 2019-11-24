import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Board from './Board.vue';
import { TileInterface, TileState } from './Tile.stories';

export const emptyData: Array<TileInterface> = [
    {
        id: 0,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 1,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 2,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 3,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 4,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 5,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 6,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 7,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 8,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    }
]

export const data: Array<TileInterface> = [
    {
        id: 0,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 1,
        updatedAt: new Date('1-12-2019'),
        state: TileState.CROSS
    },
    {
        id: 2,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 3,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    },
    {
        id: 4,
        updatedAt: new Date('1-12-2019'),
        state: TileState.CROSS
    },
    {
        id: 5,
        updatedAt: new Date('1-12-2019'),
        state: TileState.CROSS
    },
    {
        id: 6,
        updatedAt: new Date('1-12-2019'),
        state: TileState.NAUGHT
    },
    {
        id: 7,
        updatedAt: new Date('1-12-2019'),
        state: TileState.NAUGHT
    },
    {
        id: 8,
        updatedAt: new Date('1-12-2019'),
        state: TileState.EMPTY
    }
]
export const methods = {
    onSelectTile: action('onSelectTile')
}



storiesOf('Board', module)
    .add('Empty Board', () => ({
        components: { Board },
        template: '<Board :data="emptyData" @selectBoardTile="onSelectTile" />',
        data: () => ({ emptyData }),
        methods
    }))
    .add('Not an empty Board', () => ({
        components: { Board },
        template: '<Board :data="data" @selectBoardTile="onSelectTile" />',
        data: () => ({ data }),
        methods
    }))