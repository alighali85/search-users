import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from '../AppHeader';


describe('App header component', () => {

    it ('renders correctly', () => {
        const {getByTestId} = render(<AppHeader/>)
        expect(getByTestId('app-header-test-id')).toBeInTheDocument()
    })
})