import React from 'react';
import { StatusWrapper } from './styled'
function Status(){
    const array = [
        {
            number: "35",
            title: "Curabitur et ligula"
        },
        {
            number: "124",
            title: "Donec con enectus"
        },
        {
            number: "89",
            title: "Quis feugiat maecenas"
        },
        {
            number: "17",
            title: "Etiam ni senectus"
        },
        {
            number: "64",
            title: "Cras posuere tellus"
        },
    ]

    return (
        <StatusWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="name">
                            A few facts about our clothes
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            {array.map( item => (
                                <div className="col-12 col-lg-4">
                                    <h3 className="number">{item.number}</h3>
                                    <p className='title'>
                                        {item.title}
                                    </p>
                                </div>
                            ) )}
                        </div>
                    </div>
                </div>
            </div>
        </StatusWrapper>
    )
}

export default Status;
