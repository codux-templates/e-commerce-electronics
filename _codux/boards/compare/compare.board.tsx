import { createBoard } from '@wixc3/react-board';
import { Compare } from '../../../src/components/compare/compare';

export default createBoard({
    name: 'Compare',
    Board: () => <Compare />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
