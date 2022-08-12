import React from 'react';
import { ListItemScrollWrapper } from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp , faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function ListItemScroll(){
    const [isShow , setIsShow] = useState(false)
    // const [scroll , setScroll] = useState(window.innerHeight)

    // console.log( "scroll ",scroll);

    useEffect( () => {
        window.addEventListener( "scroll" , (e)=> {
            if(window.innerHeight > 500){
                setIsShow(true)
            }else{
                setIsShow(false)
            }
        } )

    })
    
    const Up = useRef()
    
    return (
        <ListItemScrollWrapper>
            { <div className="list-icon">
                <FontAwesomeIcon onClick={ () => {
                    window.scrollTo(0,0)
                } } icon={faAngleUp} />
                <FontAwesomeIcon icon={faQuestion} />
            </div>}
        </ListItemScrollWrapper>
    )
}

export default ListItemScroll;
