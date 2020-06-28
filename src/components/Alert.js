import React from 'react'

export const Alert = ({ warning }) => {
    return(
        <div className="alert alert-success" role="alert">
            {warning}
        </div>
    )
}