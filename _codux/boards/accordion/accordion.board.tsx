import { createBoard } from '@wixc3/react-board';
import { Accordion } from '../../../src/components/accordion/accordion';

export default createBoard({
    name: 'Accordion',
    Board: () => (
        <Accordion
            items={[
                { header: 'Section 1', content: 'Content for section 1' },
                { header: 'Section 2', content: 'Content for section 2' },
            ]}
            initialOpenItemIndex={0}
            className="custom-accordion"
            small={false}
        />
    ),
});
