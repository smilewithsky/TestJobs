import React from 'react';
import { TypeItemWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
function TypeItem({typeItem}){
    return (
        <TypeItemWrapper>
            <div className="contain">
                <p>
                    {typeItem} <br />
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </p>
            </div>
        </TypeItemWrapper>
    )
}

export default TypeItem;
