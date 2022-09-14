import React from 'react';

function ErrorPage({product}) {
    return (
        <div className="error">
         <p>Please! Search by location in one word.
             <br/> Otherwise, we cannot find an apartment with <strong>{product}</strong> description</p>   
        </div>
    )
}

export default ErrorPage
