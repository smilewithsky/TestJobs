import React from 'react';
import { AdditionalWrapper } from './styled'
function Additional(){
    const array = [
        {
            text: "Weight",
            content: "0.75kg"
        },
        {
            text: "Dimensions",
            content: "25 × 40 × 80 cm"
        },
        {
            text: "Height",
            content: "50, 54, 58, 62, 68, 74, 82"
        },
        {
            text: "Age",
            content: "0 – 2 years"
        },
        {
            text: "Color",
            content: "Red, Violet, Yellow"
        }
    ]


    return (
        <AdditionalWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h3 className='heading'>
                            Additional information
                        </h3>
                        <div className='status'>
                            {array.map( item => (
                                <div className='status-item'>
                                    <div className='status-item__name'>
                                        {item.text}
                                    </div>
                                    <div className='status-item__info'>
                                        {item.content}
                                    </div>
                                </div>
                            ) )}
                        </div>
                    </div>
                </div>
            </div>
        </AdditionalWrapper>
    )
}

export default Additional;
