import React from 'react';
import Logo from './../Images/Logo.png'
import { NavLink } from 'react-router-dom'
import FooterItem from './FooterItem';
import { service , delivery , help , links } from './dataFooter'
import { v4 as uuidv4 } from 'uuid';
import footerImage from './../Images/babyshop-footer-pic1.png'
import { FooterWrapper } from './styled'
import Button from '../../Components/Common/Button';
function Footer(){
    return (
        <FooterWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <div className="footer-item">
                            <img src={Logo} alt="" />
                            <p>In the BeFriends Club you can take advantage of attractive offers</p>
                            <Button className="btn-overwrite" backGround="#ebc989" color="#fff">JOIN NOW</Button>
                            <div className='bank'>
                                <img src={footerImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3"><FooterItem data={links} /> <FooterItem data={delivery} /></div>
                    <div className="col-12 col-lg-3"><FooterItem data={service} /></div>
                    <div className="col-12 col-lg-3">
                        <FooterItem data={help} />
                        <div className="open">
                            <h3>
                                Opening hours:
                            </h3>
                            <ul>
                                <li>
                                    <span>Monday - Friday: </span>8am - 5pm
                                </li>
                                <li>
                                    <span>Saturday - Sunday: </span>8am - 5pm
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </FooterWrapper>
    )
}

export default Footer;
