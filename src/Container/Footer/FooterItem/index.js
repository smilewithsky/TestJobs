import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterItemWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FooterItem({ data }) {
    // console.log("data ",data);
    const { heading, listLink, listItem } = data

    // console.log("listLink" , listLink);
    // console.log("listItem" , listItem);

    return (
        <FooterItemWrapper>
            <div className="contain">
                <h3 className='footer-item__heading'>
                    {heading}
                </h3>
                <ul className='footer-item__list'>
                    {listLink ? listLink.map(item => (
                        <li>
                            <NavLink to={item.link}>{item.item}</NavLink>
                        </li>
                    )) : ""}

                    {listItem ? listItem.map(item => (
                        <li>
                            <NavLink className="phone-link" to="/"><FontAwesomeIcon icon={item.icon} /> {item.item}</NavLink>
                        </li>
                    )) : ""}
                </ul>
            </div>
        </FooterItemWrapper>
    )
}

export default FooterItem;
