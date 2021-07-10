import React from 'react'

function SingleSkill({skill}) {
    return (
        <React.Fragment>
            <div className="pill d-inline-block px-3 py-1 my-2 mr-3">{skill}</div>
        </React.Fragment>
    )
}

export default SingleSkill
