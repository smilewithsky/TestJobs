import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsOpenSearch, selectListProduct } from './selector';
import { SearchWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass , faXmark } from '@fortawesome/free-solid-svg-icons'
import { closeSearch } from '../Header/Actions';
function Search(){
    const [search , setSearch] = useState("")
    const listProduct = useSelector(selectListProduct)
    const data = listProduct.filter( item => item.nameProduct.toLowerCase().includes(search.toLowerCase()) )
    console.log("data ",data);

    const isOpenSearch = useSelector(selectIsOpenSearch);

    console.log('isOpenSearch ',isOpenSearch);

    const dispatch = useDispatch()

    const handleCloseSearch = () => {
        dispatch(closeSearch())
    }

    if(!isOpenSearch){
        return ""
    }

    return (
        <SearchWrapper>
            <div className="contain">
                <div className='search'>
                    <input type="text" placeholder='Enter your search' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <div className="list-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faXmark} onClick={handleCloseSearch} />
                    </div>
                </div>

                {search ?
                    <div className='list-search'>
                        <h3 className='search-title'>Product</h3>
                        {data.length ?
                            data.map( item => (
                                <div className="item-search">
                                <img src={item.imageProduct[0]} alt="" />
                                <div className='item-search__content'>
                                    <NavLink to="">
                                        {item.nameProduct}
                                    </NavLink>
                                    <p>
                                        {item.composition}
                                    </p>
                                </div>
                                <div className='item-search__list-price'>
                                    <p className='item-search__list-price-oldPrice'>$15.00</p>
                                    <p className='item-search__list-price-currentPrice'>$15.00</p>
                                </div>
                            </div>
                            ) )
                         : <p>No results</p>}
                    </div>
                 : ""}
            </div>
        </SearchWrapper>
    )
}

export default Search;
