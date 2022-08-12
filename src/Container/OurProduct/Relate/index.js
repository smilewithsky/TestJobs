import React from 'react';
import { RelateWrapper } from './styled'
import { useSelector } from 'react-redux'
import { listProductRelate } from './../selector'
import ProductItem from '../../Common/Product';
function Relate(){
    const listRelate = useSelector(listProductRelate);

    return (
        <RelateWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className='title'>
                            Related products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {listRelate.map( item => (
                        <div className="col-6 col-lg-3">
                            <ProductItem productItem={item} />
                        </div>
                    ) )}
                </div>
            </div>
        </RelateWrapper>
    )
}

export default Relate;
