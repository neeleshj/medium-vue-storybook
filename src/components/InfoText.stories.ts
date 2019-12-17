//Text.stories.ts

import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import InfoText from './InfoText.vue';

export const DefaultText = 'Get Ready To Play';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { InfoText },
    props: {
      largeText: {
        default: boolean('Large Text', false),
      },
      data: {
        default: text('Text', DefaultText),
      },
    },
    template: '<InfoText :data="data" :largeText="largeText"  /> ',
  }));
