import React from 'react';
import { render } from '@testing-library/react';
import UserDetails from '../UserDetails';


const userData = {
    name: 'name',
    username: 'user name',
    email: 'user@email.com',
    website: 'www.user.com'
}
describe('User details component', () => {

    it ('renders correctly', () => {
        const {getByTestId} = render(<UserDetails user={userData}/>)
        const usersListWrapper = getByTestId('user-details-test-id')
        expect(usersListWrapper).toBeInTheDocument()
    })

    it ('show user details', () => {
        const { name, username, email, website} = userData
        const {getByText} = render(<UserDetails user={userData}/>)
        expect(getByText(`Name: ${name}`)).toBeInTheDocument()
        expect(getByText(`User name: ${username}`)).toBeInTheDocument()
        expect(getByText(`Email: ${email}`)).toBeInTheDocument()
        expect(getByText(`Website: ${website}`)).toBeInTheDocument()
    })
})