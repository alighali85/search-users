import React from 'react'
import './modal.css'


export default function Modal({children, onClose}) {
    return (
        <div data-testid='modal-test-it' className='user-details-modal'>
            <div className='modal-content'>
                {children}
           <button className='btn-outline btn-md' onClick={onClose}>Close</button>
            </div>
        </div>
    )
}