import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom';
import { changeFooter } from '../helpers/changeFooter';
import {works} from '../shared';

import '../css/workPage.css';
function WorkPage({ footerRef }) {

    let { id } = useParams();
    const [work, setwork] = useState(works.filter(item=> item.id===id)[0])

    useEffect(() => {
        changeFooter(footerRef);
        return () => {
            changeFooter(footerRef)
        }
    }, [footerRef])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </React.Fragment>

    )
}

export default WorkPage
