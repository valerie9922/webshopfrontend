import React from 'react';
import './styles.css'
import {AiOutlineHeart, AiOutlineShoppingCart,AiFillTwitterCircle} from "react-icons/ai";
import {BsCurrencyEuro,BsFacebook,BsInstagram} from'react-icons/bs';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
const DetailsPage = () => {
    //get details data
    const [ product, setProduct ] = useState(null)

    //getting the id from the params
    const params = useParams();
    console.log(params.id);

    const fetchProduct = async () => {
        //replace the :id with the actual id (params.id)
        const response = await axios.get(`http://localhost:4000/products/${params.id}`)
        console.log(response.data)
        setProduct(response.data)

    }

    useEffect(() => {
        fetchProduct();
    }, [])
    if(product){
    return (

            <div>
                {<NavBar/>}
                <div className="detail-main-info-container">

                    <div className="product-detail-img-container">
                        <div className="product-detail-directory"><p>Home.Shop<span
                            className="red-font-color">.{product.title}</span></p></div>
                        <img className="product-img" src={product.mainImage} alt="product"/>
                    </div>
                    <div className="product-detail-info-container">
                        <div className="product-name">{product.title}</div>
                        <div><p>{product.rating}</p></div>
                        <div><p><BsCurrencyEuro/>{product.price}</p></div>
                        <div className="flex-display">
                            <div className="cart"><AiOutlineShoppingCart/>{'     '}Add to Cart</div>
                            <div className="fav"><AiOutlineHeart/>{'     '}Favorate</div>
                        </div>
                        <div><p>categories:{product.categoryId}</p></div>
                        <div><p>{product.title}</p></div>
                        <div className="margin10">share:<BsFacebook/><BsInstagram/><AiFillTwitterCircle/></div>

                    </div>
                </div>

                <div className="detail-desc-info-container">
                    <div className="detail-desc-button">
                        <p className="desc-detail">Description</p> {'     '}
                        <p className="desc-detail">Additional Info</p> {'     '}
                        <p className="desc-detail">Reviews</p>
                    </div>
                    <div className="desc-show">
                        <p>{product.description}</p>
                    </div>
                </div>

            </div>

        );}
};

export default DetailsPage;
