import React from 'react';
import { render } from '@testing-library/react';
import UsersList from '../UsersList';


const usersData = [
    {name: 'user 1'},
    {name: 'user 2'},
    {name: 'user 3'},
    {name: 'user 4'},
    {name: 'user 5'},
]
describe('Users List component', () => {

    it ('renders correctly', () => {
        const {getByTestId} = render(<UsersList users={usersData}/>)
        const usersListWrapper = getByTestId('users-list-test-id')
        expect(usersListWrapper).toBeInTheDocument()
    })

    it ('show list of users', () => {
        const {getByTestId} = render(<UsersList users={usersData}/>)
        const usersListWrapper = getByTestId('users-list-test-id')
        const usersListItems = usersListWrapper.querySelectorAll('li')
        expect(usersListItems.length).toBe(usersData.length)
    })
})