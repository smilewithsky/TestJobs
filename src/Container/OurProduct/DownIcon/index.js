import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { DownIconWrapper } from './styled'
function DownIcon(){
    return (
        <DownIconWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <FontAwesomeIcon icon={faAngleDown} className="icon" />
                    </div>
                </div>
            </div>
        </DownIconWrapper>
    )
}

export default DownIcon;
