import { createBoard } from '@wixc3/react-board';
import { TestNewComponent } from '../../../src/components/test-new-component/test-new-component';

export default createBoard({
    name: 'TestNewComponent',
    Board: () => <TestNewComponent />,
});
