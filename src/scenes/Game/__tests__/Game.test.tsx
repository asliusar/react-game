import React from 'react';
import {render} from '@testing-library/react';
import {Game} from "../index"

describe('test Game component', () => {
    test('should render the table', () => {
        const {getAllByTestId} = render(
            <Game
                isPaused={false}
                toggleCell={jest.fn}
                cells={[
                    [0,0,0],
                    [0,1,0],
                    [0,0,0],
                ]}
            />
        );

        expect(getAllByTestId("game-table-tr").length).toBe(3);
        expect(getAllByTestId("game-table-td").length).toBe(9);
    });
})
