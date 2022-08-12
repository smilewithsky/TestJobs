import React from 'react';
import { useState } from 'react';
import { SaleWrapper } from './styled'
function SaleImage(){
    const [Time , setTime] = useState(0)
    return (
        <SaleWrapper>
            <div className="contain">
                <div className="contain-content">
                    <p className='contain-content__title'>
                        LIMITED OFFER
                    </p>
                    <p className='sale-number'>
                        50%
                    </p>
                    <p className="event">
                        Holiday <br />
                        Sale    
                    </p>
                </div>
                <div className="countdown">
                    <div className="row">
                        <div className="col-4 day">
                            00 <br />
                            <span>days</span>
                        </div>
                        <div className="col-4 hour">
                            00 <br />
                            <span>days</span>
                        </div>
                        <div className="col-4 minutes">
                            00 <br />
                            <span>days</span>
                        </div>
                    </div>
                </div>
            </div>
        </SaleWrapper>
    )
}

export default SaleImage;
