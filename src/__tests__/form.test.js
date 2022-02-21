import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form/index';

describe('Testing form component.', () => {

    it('should execute callback onSubmit', () => {

        const callback = jest.fn();

        render(<Form onSubmit={callback}/>);

        let urlInput = screen.getByTestId('url-input');
        let methodBtn = screen.getByTestId('get-btn');
        let submitBtn = screen.getByTestId('submit-btn')


        fireEvent.change(urlInput, {target: {value: 'http://test.com'}});
        fireEvent.click(methodBtn);
        fireEvent.click(submitBtn);

        expect(callback).toHaveBeenCalledWith({url: 'http://test.com', method: 'GET'});

    })

})