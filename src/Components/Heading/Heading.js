import React from 'react'

function Heading({title}) {

    return (
        <div >
            <h3 style={{backgroundColor:"#DC3545"}} className='border p-2 mt-4 text-light rounded-4 fw-bold'>{title}</h3>
        </div>
    )
}

export default Heading
