import React, { useState, useEffect } from 'react'
import UsersList from '../../components/usersList'
import './users.css'
import SearchField from '../../components/searchField'
import useFetchUsers from '../../api/useFetchUsers'
import UserDetails from '../../components/userDetails'
import Modal from '../../components/modal/Modal'


export default function Users() {
    const [filteredUsers, setFilteredUsers] = useState(null)
    const [users, loading] = useFetchUsers(filteredUsers)
    const [ userDetails, setUserDetails]= useState(null)


    const handleOnSearch = (e) => {
        // don't try to search while loading.
        if(loading) {
            return
        }
        const {target} = e
        const searchValue = target.value.toLowerCase()
        const filterResult = users.filter(user => user.name.toLowerCase().includes(searchValue))
        setFilteredUsers(filterResult)
    }

    const toggleUserDetails = (e) => {
        // if the event is false, toggle modal off
        if(!e) {
            setUserDetails(null)
            return
        }
        e.preventDefault()
        const {title} = e.target
        const user = users.filter(item => item.name === title)[0]
        setUserDetails(user)
    }

    return (
        <div>
            <div data-testid='users-test-id' className='users-container shadow-01dp'>
            <h5>Search</h5>
            <SearchField onChange={handleOnSearch}/> <br/>
            <h5>Results</h5>
            {filteredUsers?.length === 0 && <span className="highlighted">No results</span>}
            {loading ? <p>Loading ...</p> : <UsersList onItemClick={toggleUserDetails} users={filteredUsers || users}/>}
        </div>
            {userDetails && <Modal onClose={() => toggleUserDetails(false)}>
                <UserDetails user={userDetails}/>
                </Modal>}
        </div>
    )
}