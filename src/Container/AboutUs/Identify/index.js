import React from 'react';
import Heading from '../../../Components/Common/Heading';
import Counting from './Counting';
import { IdentifyWrapper } from './styled'

import Image1 from './../../Images/AboutUs/identify/babyshop-wrap-bg2.webp'
import Image2 from './../../Images/AboutUs/identify/babyshop-wrap-bg3.webp'
import Image3 from './../../Images/AboutUs/identify/babyshop-wrap-bg4.webp'

function Identify() {
    const array = [
        {
            image: Image1,
            textLeft: "Inceptos ipsum varius",
            textRight: "Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus lorem ipsum",
            status: "30",
        },
        {
            image: Image2,
            textLeft: "Euismod eget eros",
            textRight: "Nec commodo rhoncus lacinia gravida dictum magna feugiat ullamcorper interdum mollis",
            status: "60",
        },
        {
            image: Image3,
            textLeft: "Lobortis erosi",
            textRight: "Quis ad eu enim imperdiet pellentesque sed suscipit ultricies habitasse interdum",
            status: "100",
        }
    ]

    return (
        <IdentifyWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <Heading align="center" title="ADVICE" heading="How to identify high quality clothes?" desc="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi." />
                    </div>
                </div>

                {array.map(item => (
                    <div className="item">
                        <div className="row mb-5 align-items-center">
                            <div className="col-12 col-lg-3 mb-3">
                                <p className="text-left">{item.textLeft}</p>
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                <div className="image-contain" style={{ backgroundImage: `url(${item.image})` , backgroundSize: "contain" , backgroundRepeat: "no-repeat" , backgroundPosition: "center top" , width: "100%" , height: "100%" }} >
                                    <span>{item.status}%</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 mb-3">
                                <p className="text-right">
                                    {item.textRight}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </IdentifyWrapper>
    )
}

export default Identify;
