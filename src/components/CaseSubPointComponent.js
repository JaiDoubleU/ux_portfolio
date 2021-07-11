import React,{useEffect}from 'react'

function CaseSubPoint({caseSubPoint}) {
    useEffect(() => {
        console.log(caseSubPoint)

    }, )

    return (
        <div className='subPoint-container'>
            {/* <h1>{caseSubPoint.heading}</h1> */}
        </div>
    )
}

export default CaseSubPoint
