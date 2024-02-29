import React from 'react'

function CurrentWork({sentence: sentence}) {
    return (
        <React.Fragment>
            <div className="pill d-inline-block px-3 py-1 my-2 mr-3">{sentence}</div>
        </React.Fragment>
    )
}

export default CurrentWork

