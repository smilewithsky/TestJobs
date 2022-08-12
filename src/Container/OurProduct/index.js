import React, { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../Components/Common/Button';
import { OurProductWrapper } from './styled'
import { selectListProduct } from './selector'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch , useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Detail from './Detail';
import Description from './Description';
import DownIcon from './DownIcon';
import Heading from '../../Components/Common/Heading';
import Content from './Content';
import Relate from './Relate';
import Compare from './Compare';
import Variant from './Variant';
import Separate from '../../Components/Common/Separate';
import Additional from './Additional';
import Review from './Review';
import Bottom from './Bottom';
import { useEffect } from 'react';
function OurProduct(){
    const [ count , setCount ] = useState(0)

    useEffect( () => {
        window.scrollTo(0,0)
    } , [])

    useEffect( () => {
        window.scrollTo(0,0)
    } )

    const param = useParams()
    console.log("params ",param);
    const listProduct = useSelector(selectListProduct);
    // console.log("listProduct" , listProduct);
    const newItem = listProduct.find( item => item.idProduct == param.id )
    console.log("newItem ", newItem);
    const item = listProduct[0];
    console.log("item ",item);
    return (
        <OurProductWrapper>
            <Detail item={newItem} />
            <DownIcon />
            <Description />
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                    <Heading className="text-center" desc="Ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus lorem ipsum fermentum in, dolor." />
                    <Heading className="mbt-11 text-center" desc="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor" />
                    </div>
                </div>
            </div>
            <Content />
            <Compare />
            <Variant />
            <Separate />
            <Additional />
            <Separate />
            <Review />
            <Separate />
            <Relate />
            <Bottom />
        </OurProductWrapper>
    )
}

export default memo(OurProduct);
