import React from 'react';
import {render} from '@testing-library/react';
import {Controls} from "../index"

describe('test Controls', () => {
    test('should render Pause controls', () => {
        const {getByText} = render(
            <Controls
                isPaused={true}
                startCellMutation={jest.fn}
                stopCellMutation={jest.fn}
            />
        );
        const linkElement = getByText('Resume');

        expect(linkElement).toBeInTheDocument();
    });

    test('should render Resume controls', () => {
        const {getByText} = render(
            <Controls
                isPaused={false}
                startCellMutation={jest.fn}
                stopCellMutation={jest.fn}
            />
        );
        const linkElement = getByText('Pause');

        expect(linkElement).toBeInTheDocument();
    });
})
