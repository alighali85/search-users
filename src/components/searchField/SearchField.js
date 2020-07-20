import React from 'react'
/**
 * inline style here, all we needed is one property 
 */

export default function SearchField ({onChange}) {
return (
<div data-testid='search-field-test-id' style={{marginTop: 16, marginBottom: 16}}>
    <input className='input-primary input-md' placeholder='Search by name' onChange={onChange}/>
</div>
)
}