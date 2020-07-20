import React from 'react'
import './user-details.css'


export default function UsersDetails({user}) {
    const { name, username, email, website} = user
    return (
        <div data-testid='user-details-test-id' className='user-details'>
            <h5>User Details</h5>
            <ul className='green-blue-list'>
                <li className='green-blue-list-item'><span className='listing'>Name:</span> {name}</li>
                <li className='green-blue-list-item'><span className='listing'>Username:</span> {username}</li>
                <li className='green-blue-list-item'><span className='listing'>Email:</span> {email}</li>
                <li className='green-blue-list-item'><span className='listing'>
                    Website:</span><a href={`https://www.${website}`}>{website}</a
                ></li>
            </ul>
        </div>
    )
}