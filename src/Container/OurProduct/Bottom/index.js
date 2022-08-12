import React from 'react';
import Button from '../../../Components/Common/Button';
import BrandFooterItem from '../../Home/BrandFooterItem';
import { brandsFooter } from '../../Home/data';
import { BottomWrapper } from './styled'
function Bottom(){
    return (
        <BottomWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Button className="btn-overwrite">
                            <span>
                                Not for you ? 
                            </span>
                            <u>
                                - Back for product list
                            </u>
                        </Button>
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
        </BottomWrapper>
    )
}

export default Bottom;
