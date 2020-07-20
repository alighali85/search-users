import React from 'react'
import Users from './containers/users'
import AppHeader from './components/appHeader'
import './app.css'


function App() {
    return <div className = "App">
        <AppHeader />
        <div className='search-container'>
            <h2 className="search-container__title">Find a user by name</h2>
            <Users />
        </div>
    </div>
}

export default App;