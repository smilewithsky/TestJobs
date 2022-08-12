import React, { useEffect, useState } from 'react';
import { CountingWrapper } from './styled'
function Counting({children}){
    const [count , setCount] = useState(0)
    console.log("children" , parseFloat(children));
    useEffect( () => {
        // const checkCount = setInterval( () => {
        //     if(count < parseInt(children)){
        //         setCount( prev => prev + 1 )
        //     }
        // } , 100 )

        return () => {
            // clearInterval(checkCount)
        }
    } , [count] )
    
    return (
        <CountingWrapper>
            {count}
        </CountingWrapper>
    )
}

export default Counting;
