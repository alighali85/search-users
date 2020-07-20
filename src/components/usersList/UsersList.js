import React from 'react'
import './users-list.css'
import { CSSTransition, TransitionGroup} from 'react-transition-group'


export default function UsersList ({users, onItemClick}) {
    return (
        <div data-testid='users-list-test-id' className='users-list'>
            <ul className='green-blue-list'>
                <TransitionGroup >
                    {users.map((user, i) => <CSSTransition
                    key={user.name}
                    timeout={500}
                    classNames="item">
                        <li className='green-blue-list-item user-list-item'
                        title={user.name}
                        id={user.id}
                        onClick={onItemClick}>
                            {user.name}
                            </li>
                            </CSSTransition>)}
                </TransitionGroup>
            </ul>
        </div>
    )
}