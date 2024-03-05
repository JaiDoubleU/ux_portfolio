import React from 'react'

function CaseTopic({heading}) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-10 offset-1 topic">
                    <div className="d-flex heading">
                        {/* <span className="dash black"></span> */}
                        <h4>{heading}</h4>
                        {/* <span className="dash black"></span> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CaseTopic
