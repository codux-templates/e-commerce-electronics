import { createBoard } from '@wixc3/react-board';
import { MoreInfo } from '../../../src/components/more-info/more-info';

export default createBoard({
    name: 'MoreInfo',
    Board: () => <MoreInfo />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
