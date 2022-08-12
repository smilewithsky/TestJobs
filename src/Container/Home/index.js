import React, { useState } from 'react';
import Button from '../../Components/Common/Button';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { HomeWrapper } from './styled'
import { v4 as uuidv4 } from 'uuid';
import { brands , brandsFooter , typeList } from './data'
import BrandItem from './BrandItem';
import BackGroundInstalGram from './../Images/babyshop-instagram.webp'
import BrandFooterItem from './BrandFooterItem';
import TypeItem from './TypeItem';

import { useSelector , useDispatch } from 'react-redux'
import { listProductSelector, listProductSeller } from './Selector'
import ProductItem from '../Common/Product';
import Heading from '../../Components/Common/Heading';
import Separate from '../../Components/Common/Separate';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SaleImage from './SaleImage';
import SaleSlider from './SaleSlider';
import Benefits from './Benefits';
import Banner from './Banner';
import TextHover from '../Common/TextHover';
import HomeBanner from './HomeBanner';
import PopUp from '../Common/Product/PopUp';

function Home(){
    const listProduct = useSelector(listProductSelector);
    const listSeller = useSelector(listProductSeller)
    // console.log("listSeller ",listSeller);
    
    const separateType = ["Welcome in our child's world.", "All our products are made", "from generations with passion."]
    
    useState( () => {
        window.scrollTo(0,0)
    } , [])

    return (
        <HomeWrapper backGround = {BackGroundInstalGram}>
            <HomeBanner />

            <div className="type">
                <div className="container">
                    <div className="row">
                        {typeList.map( typeItem => (
                            <div className='col-md-12 col-lg-3' key={uuidv4()}>
                                <TypeItem typeItem={typeItem}>
                                </TypeItem>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>

            <div className='separate'>
                <Separate align="center" text={separateType} />
            </div>

            <div className="product">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Heading align="center" heading="Product's Catalog" />
                        </div>
                    </div>

                    <div className="row">
                        {listProduct.map( productItem => (
                            <div className='col-12 col-md-6 col-lg-3' key={uuidv4()}>
                                <ProductItem productItem={productItem}></ProductItem>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="list-button">
                            <Button>GO TO SHOP</Button>
                            <Button className="btn-overwrite" backGround="#ececec" color="#626262" >SEE PROMOTIONS</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sale'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <SaleImage />
                        </div>
                        <div className="col-12 col-lg-6">
                            <SaleSlider />
                        </div>
                    </div>
                </div>
            </div>

            <div className="benefits">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Heading align="center" heading="What are benefits of choosing us?" desc="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum." />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                            <Benefits></Benefits>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <Button className="">SEE ALL FEATURES</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner">
                <Banner />
            </div>

            <div className="bestseller">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Heading align="center" heading="Our bestsellers" />
                        </div>
                    </div>
                    <div className="row">
                        {listSeller.map(itemProduct => <div key={uuidv4()} className='col-6 col-lg-3'>
                            <ProductItem productItem={itemProduct}></ProductItem>
                        </div> )}
                    </div>
                </div>
            </div>

            <div className="brands">
                <div className="container">
                    <div className="row">
                        {brands.map( brandItem => (
                            <div key={uuidv4()} className="col-12 col-lg-3" >
                                <BrandItem brandItem={brandItem} />
                            </div>
                        ) )}
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='brand-image'  BackGroundInstalGram = {BackGroundInstalGram}>
                                <Button backGround="var(--hover-color)" color="" icon={faInstagram}>Instagram</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container brandFooter">
                    <div className="row">
                        {brandsFooter.map( brandsFooterItem => (
                            <div className='col-12 col-lg-3'>
                                <BrandFooterItem brandFooterItem={brandsFooterItem}></BrandFooterItem>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home;
