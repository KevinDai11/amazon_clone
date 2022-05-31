import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PinDrop from "@material-ui/icons/PinDrop";

import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {

    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };


  return (
    <div className = "header">
        
        <Link to = "/">
            <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "amazon logo"/>
        </Link>

        <div className = "header__nav">
            <div className = "header__option2">
                <span className = "header__optionLineOne">Deliver to Unknown</span>
                <span className = "header__optionLineTwo"><PinDrop/> City, Zip</span>
            </div>
        </div>

        {/*Search Bar*/}
      <div className = "header__search">
          <input className = "header__searchInput" type = "text" />
            <SearchIcon className = "header__searchIcon"/>
        </div>


        {/*Nagivation Bar, includes sign in/account, return & orders, prime, and shopping cart*/}
        <div className = "header__nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className = "header__option">
                    <div className = "header__option">
                        <span className = "header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                        <span className = "header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </div>
            </Link>
        

            <div className = "header__option">
                <span className = "header__optionLineOne">Returns</span>
                <span className = "header__optionLineTwo">& Orders</span>
            </div>

            <div className = "header__option">
                <span className = "header__optionLineOne">Your</span>
                <span className = "header__optionLineTwo">Prime</span>
            </div>

            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className = "header__optionLineTwo header__basketCount">{cart.length}</span>
            </div>
        </div>
    </div>
  );
}

export default Header
