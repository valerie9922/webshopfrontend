import React from 'react';
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser,AiOutlineSearch} from 'react-icons/ai';

require('./styles.css')
const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="level2-container">
                <div className="div-flex">
                    <div className="icon-font">
                        <p>The<span className="white-color">Shop</span></p>
                    </div>
                    <div className="link-search">
                        <ul className="nav-ul">
                            <li>Home</li>
                            <li>Products</li>
                            <li>Blog</li>
                            <li >Shop</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="searchBarContainer">

                    <input className="searchBar" /><AiOutlineSearch/>
                </div>
            </div>

            <div className="iconContainer">
                <ul className="nav-ul">
                    <li><a href="/#"><span className="white-color"><AiOutlineUser/></span></a></li>
                    <li><a href="/#"><span className="white-color"><AiOutlineShoppingCart/></span></a></li>
                    <li><a href="/#"><span className="white-color"><AiOutlineHeart/></span></a></li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;
