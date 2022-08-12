import React, { useEffect, useState } from 'react';
import { DetailWrapper } from './styled'
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../Components/Common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import SliderDetail from './Slider';
import { useDispatch } from 'react-redux';
import { addToCart } from './Actions';
function Detail({ item }) {
    const [count, setCount] = useState(1)
    const [ heightChoosen , setHeightChoosen ] = useState()
    const [ colorChoosen , setColorChoosen ] = useState()
    const [ ageChoosen , setAgeChoosen ] = useState("")
    if (count < 1) {
        setCount(1)
    }

    useEffect( () => {
        // setHeightChoosen()
        // setColorChoosen()
        // setAgeChoosen()
    }  )

    
    useEffect( () => {
        console.log("re-render");
    } , [] )
    
    useEffect( () => {
        console.log("re-render");
    } )

    // console.log("boolean" , Boolean(heightChoosen) , Boolean(colorChoosen) , Boolean(ageChoosen));
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        // console.log("item ",item);
        const formData = {
            idCartItem: uuidv4() ,
            name: item.nameProduct,
            id: idProduct ,
            image: item.imageProduct[0],
            age: ageChoosen,
            color: item.ListColor[colorChoosen],
            height: height[heightChoosen],
            price: item.currentPriceProduct,
            quantity: count,
            sumPrice: item.currentPriceProduct * count,
        }

        // console.log("formData ",formData);
        dispatch(addToCart(formData))
    }

    const {
        ListColor,
        SKU,
        Tags,
        age,
        categories,
        composition,
        currentPriceProduct,
        description,
        descriptionTitle,
        height,
        idProduct,
        imageProduct,
        isSale,
        nameProduct,
        salePriceProduct,
        size
    } = item

    const handleChangeHeight = (index) => {
        console.log("index" , index);
        setHeightChoosen(index)
    }

    const handleChangeValueAge = (e) => {
        setAgeChoosen(e.target.value)
    }

    const handleChangeColorProduct = (index) => {
        setColorChoosen(index)
    }
    return (
        <DetailWrapper>
            <div className="detail">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="detail-info">
                                <h3 className='detail-info__name'>{nameProduct}</h3>
                                <p className='detail-info__desc'>{descriptionTitle}</p>
                                <ul className='detail-info__description'>
                                    {description.map(item => (
                                        <li key={uuidv4()} className='detail-info__description-item'>{item}</li>
                                    ))}
                                </ul>
                                <li className='detail-info__description-item detail-info__description-item-composition'>{composition}</li>
                                <p className='detail-info__size'>
                                    <FontAwesomeIcon icon={faRulerCombined} />
                                    Sizes chart
                                </p>
                                <div className="detail-info__price">
                                    {salePriceProduct && <p className='detail-info__price-oldPrice'>${salePriceProduct}</p>}
                                    <p className='detail-info__price-currentPrice'>${currentPriceProduct}</p>
                                </div>

                                <div className='detail-info__height'>
                                    <span className='detail-info-t-title'>Height:</span>
                                    <div className='detail-info__height-list'>
                                        {height.map((item , index) => (
                                            <li key={uuidv4()} onClick={() => handleChangeHeight(index)} className={`detail-info__height-list-item ${heightChoosen === index ? "detail-info__height-list-item-active" : ""} `}>
                                                {item}
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className='detail-info__color'>
                                    <span className='detail-info-t-title'>Color</span>
                                    <div className='detail-info__color-list'>
                                        {ListColor.map((item , index) => (
                                            <div className={`detail-info__color-contain ${ colorChoosen === index ? "active" : ""}`}>
                                                <li key={uuidv4()} className='detail-info__color-list-item' onClick={ () => handleChangeColorProduct(index)} style={{backgroundColor: item.color}}></li>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className='detail-info__age'>
                                    <span className='detail-info-t-title'>Age</span>
                                    <div className='detail-info__age-list'>
                                        <select name="" id="" value={ageChoosen} onChange={ (e) => handleChangeValueAge(e)} >
                                            <option value="">Chosen an option</option>
                                            {age.map(item => (
                                                <option key={uuidv4()} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="list-add">
                                    <div className='quantity-product'>
                                        <Button className="btn-overwrite" onClick={() => setCount(prev => prev - 1)}>-</Button>
                                        <span>{count}</span>
                                        <Button className="btn-overwrite" onClick={() => setCount(prev => prev + 1)}>+</Button>
                                    </div>
                                    <Button className="btn-overwrite" disabled={heightChoosen && colorChoosen && ageChoosen ? false : true } onClick={ () => handleAddToCart(item) } >Add To Cart</Button>
                                </div>

                                <div className='detail-info__sep'>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="detail-info__sep-item detail-info__sep-item__tags">
                                                <span className='detail-info__sep-title'>Tags:</span>
                                                <ul className='detail-info__sep-tags-list'>
                                                    {Tags.map(item => (
                                                        <li className='detail-info__sep-tags-list__item' key={uuidv4()} >{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        
                                        </div>
                                        <div className="col-4">
                                            <div className="detail-info__sep-item detail-info__sep-item__category">
                                                <span className='detail-info__sep-title'>Category:</span>
                                                <ul className='detail-info__sep-category-list'>
                                                    {categories.map(item => (
                                                        <li className='detail-info__sep-category-list__item' key={uuidv4()} >{item} ,</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="detail-info__sep-item detail-info__sep-item__sku">
                                                <span className='detail-info__sep-title'>SKU:</span>
                                                <ul className='detail-info__sep-sku-list'>
                                                    <li className='detail-info__sep-sku-list__item'>{SKU}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <SliderDetail listImage={imageProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </DetailWrapper>
    )
}

export default Detail;
