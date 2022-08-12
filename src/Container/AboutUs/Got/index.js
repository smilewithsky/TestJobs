import React from 'react';
import CheckIcon from './../../Images/AboutUs/babyshop-about-icon2.webp'

import { GotWrapper } from './styled'
function Got() {
    const array = [
        {
            id: 1 ,
            title: "LOREM IPSUM",
            desc: "Morbi pede. In quis lacus vestibulum ligula. Ut sit amet, consectetuer tortor. Vestibulum egestas turpis."
        },
        {
            id: 2 ,
            title: "NULLAM ALIQUET",
            desc: "Magnacus lectus, viverra quistre, convallis non, leo. Nulla facilisis at, pretium eget, dui. Ut lobortis convallis"
        },
        {
            id: 3 ,
            title: "ETIAM COMMODO",
            desc: "Nullam imperdiet vel, dignissim enim vehicula dignissim. Etiam turpis. Sed nonummy diam sodales nibh"
        },
        {
            id: 4 ,
            title: "MORBI SIT",
            desc: "Dui tellus, eleifend tincidunt, nonummy laoreet, nulla in dui. Maecenas eget pede turpis egestas"
        },
    ]

    return (
        <GotWrapper>
            <div className="container">
                <div className="row">
                    {array.map( item => (
                        <div className="col-12 col-lg-3">
                            <div className="got-item">
                                <div className="contain">
                                    <img src={CheckIcon} alt="" />
                                    <h4 className="title">
                                        {item.title}
                                    </h4>
                                    <p className="desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </GotWrapper>
    )
}

export default Got;
