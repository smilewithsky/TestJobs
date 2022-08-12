import React from 'react';
import { ContentWrapper } from './styled'
import Image1 from './../../Images/OurProduct1 (1).webp'
import Image2 from './../../Images/OurProduct2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Content(){
    return (
        <ContentWrapper>
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-12 col-lg-6">
                        <div className="content-item">
                            <img src={Image2} alt="" />
                            <div className="sep"></div>
                            <div className="content-item__content">
                                <p className='content-item__content-name'>BIBENDUM NETUS</p>
                                <h2 className='content-item__content-title'>Vestibulum bibendum nulla torquent semper</h2>
                                <p className='content-item__content-desc'>Tristique nisi rutrum porta magna pharetra aenean proin rutrum nostra eu curabitur consequat dolor molestie auctor porta et lacus porta fusce vulputate non dui quis.</p>
                            </div>

                        </div>
                        <div className="sep"></div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="content-item">
                            <div className="content-item__content">
                                <p className='content-item__content-name'>PHASELLUS TORTOR</p>
                                <h2 className='content-item__content-title'>Ultricies porta urna laoreet enim</h2>
                                <p className='content-item__content-desc'>Inceptos aliquam lectus nullam eget mi sapien luctus praesent habitant porttitor tempor proin tempor gravida massa at lectus nam praesent sociosqu aenean quis.</p>
                                <ul className='content-item__content-list'>
                                    <li className='content-item__content-list__item'> <span><FontAwesomeIcon icon={faStar} /></span> Suspendisse a pellentesque.</li>
                                    <li className='content-item__content-list__item'> <span><FontAwesomeIcon icon={faStar} /></span> Quisque lorem tortor fringilla.</li>
                                    <li className='content-item__content-list__item'> <span><FontAwesomeIcon icon={faStar} /></span> Quisque cursus et, porttitor.</li>
                                    <li className='content-item__content-list__item'> <span><FontAwesomeIcon icon={faStar} /></span> Nulla ipsum dolor lacus.</li>
                                </ul>
                            </div>

                            <div className="sep"></div>

                            <img src={Image1} alt="" />
                        </div>

                        <div className="sep"></div>
                    </div>
                    
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Content;
