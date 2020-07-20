import { useState, useEffect } from 'react'
import {USERS_ENDPOINT} from './endPoints.js'

/**
 * custom hook to fetch users
 * it's a shared resource, creating custom hooks can help to reuse it in many components
 */

export default function useFetchUsers(existingusers) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {
        console.log('fetch data hook')
        setUsers([])
        const getData = async () => {
            const response = await fetch(USERS_ENDPOINT)
            const data = await response.json()
            setUsers([...data].slice(0,5))
            setTimeout(setLoading, 300, false) //slow it down to see (Loading ...)
        }
         getData()

         return () => setUsers([])
    },[])

    return [users, loading]
}