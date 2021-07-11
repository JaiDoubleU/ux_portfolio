import React from 'react'

function CaseTopic({heading}) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-10 offset-1 topic">
                    <div className="d-flex heading">
                        <p>{heading}</p>
                        <span className="dash black"></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CaseTopic
