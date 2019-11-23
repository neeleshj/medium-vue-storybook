import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';


import Tile from './Tile.vue';

export enum TileState {
    EMPTY = -1,
    NAUGHT = 0,
    CROSS = 1
}

export interface TileInterface {
    id: number;
    updatedAt: Date;
    state: TileState;
}

export const data: TileInterface = {
    id: 0,
    updatedAt: new Date('1-12-2019'),
    state: TileState.EMPTY
}

export const methods = {
    onSelectTile: action('onSelectTile')
}

storiesOf('Board Tile', module)
    .add('Empty Tile', () => ({
        components: { Tile },
        template: `<Tile :data="data" @selectTile="onSelectTile" />`,
        data: () => ({ data }),
        methods
    }))
    .add('X Tile', () => ({
        components: { Tile },
        template: `<Tile :data="data" @selectTile="onSelectTile" />`,
        data: () => ({ data : {...data, state: TileState.CROSS} }),
        methods
    }))
    .add('O Tile', () => ({
        components: { Tile },
        template: `<Tile :data="data" @selectTile="onSelectTile" />`,
        data: () => ({ data: { ...data, state: TileState.NAUGHT } }),
        methods
    }))