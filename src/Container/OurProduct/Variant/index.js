import React from 'react';
import { VariantWrapper } from './styled'
import { v4 as uuidv4 } from 'uuid';
function Variant() {
    const arr = [
        {
            id: 1,
            color: "#ebc989",
            name: "Variant 1",
            title: "Vitae adipiscing turpis. Aenean ligulamolestie id vivide.",
            arr: [
                10,
                "Lorem lipsum",
                "○",
                "Morbi accumsan",
                "○"
            ]
        },
        {
            color: "#59616d",
            id: 2,
            name: "Variant 2",
            title: "Aenean lobortis mauris mattis adipiscing",
            arr: [
                20,
                "Lorem lipsum",
                "○",
                "Morbi accumsan",
                "●"
            ]

        },
        {
            id: 3,
            color: "#b5aca0",
            name: "Variant 3",
            title: "Maecenas facilisis, quam nibh eu ipsum dolor vel tortor.",
            arr: [
                30,
                "Lorem lipsum",
                "●",
                "Morbi accumsan",
                "●"
            ]
        },
    ]

    return (
        <VariantWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 ">
                        <div className="row">
                            {arr.map(item => (
                                <div className="col-12 col-md-4">
                                    <div className="variant-item" key={uuidv4()}  >
                                        <div className="order" style={{backgroundColor: item.color}} >
                                            {item.id}
                                        </div>
                                        <h3 className='name'>{item.name}</h3>
                                        <p className="title">{item.title}</p>
                                        {item.arr.map(item => (
                                            <p key={uuidv4()} className="arr-item">
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </VariantWrapper>
    )
}

export default Variant;