import { createBoard } from '@wixc3/react-board';
import { BrowseBy } from '../../../src/components/browse-by/browse-by';

export default createBoard({
    name: 'BrowseBy',
    Board: () => <BrowseBy />,
});
