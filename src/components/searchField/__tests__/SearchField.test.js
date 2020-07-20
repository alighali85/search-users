import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchField from '../SearchField';


const onChange = jest.fn()

describe('Search field component', () => {

    it ('renders correctly', () => {
        const {getByTestId} = render(<SearchField/>)
        const searchWrapper = getByTestId('search-field-test-id')
        expect(searchWrapper).toBeInTheDocument()
    })

    it ('search input field works', () => {
        const {getByTestId} = render(<SearchField onChange={onChange}/>)
        const searchWrapper = getByTestId('search-field-test-id')
        const inputField = searchWrapper.querySelector('input')
        fireEvent.change(inputField, { target: { value: 'user name' } })
        expect(onChange).toHaveBeenCalled()
        expect(inputField.value).toBe('user name')
    })
})