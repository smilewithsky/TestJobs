import React from 'react';
import Heading from '../../../Components/Common/Heading';
import { DescriptionWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun , faFireFlameSimple , faHandsBubbles , faGem } from '@fortawesome/free-solid-svg-icons'
function Description(){
    return (
        <DescriptionWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto offset-md-3">
                        <div className='list-text '>
                            <li className='list-text__item'>Description</li>
                            <li className='list-text__item'>Additional information</li>
                            <li className='list-text__item'>Reviews</li>
                        </div>
                    </div>
                </div>
                <div className="row mbt-11">
                    <div className="col-6 offset-3">
                        <Heading className="text-center" desc="Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et." />
                    </div>
                </div>

                <div className="row mbt-11">
                    <div className="col-12 col-lg-4 offset-lg-2">
                        <div className="item-desc item-desc__friendly">
                            <h3 className="title">
                                ENVIRONMENTALLY FRIENDLY
                            </h3>
                            <div className="list-icon">
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faSun} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faSun} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faSun} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faSun} />
                                </li>
                            </div>
                        </div>
                        <div className="item-desc item-desc__washing">
                            <h3 className="title">
                                WASHING
                            </h3>
                            <div className="list-icon">
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faHandsBubbles} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faHandsBubbles} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faHandsBubbles} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item" icon={faHandsBubbles} />
                                </li>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="item-desc item-desc__warmness">
                            <h3 className="title">
                                WARMNESS
                            </h3>
                            <div className="list-icon">
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faFireFlameSimple} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faFireFlameSimple} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faFireFlameSimple} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item" icon={faFireFlameSimple} />
                                </li>
                            </div>
                        </div>
                        <div className="item-desc item-desc__durability">
                            <h3 className="title">
                                DURABILITY
                            </h3>
                            <div className="list-icon">
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faGem} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item active" icon={faGem} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item" icon={faGem} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon-item" icon={faGem} />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DescriptionWrapper>
    )
}

export default Description;
