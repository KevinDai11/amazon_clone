import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PinDrop from "@material-ui/icons/PinDrop";

import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {

    const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className = "header">
      <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "amazon logo"/>
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
            <div className = "header__option">
                <span className = "header__optionLineOne">Hello Unknown</span>
                <span className = "header__optionLineTwo">Sign In</span>
            </div>
        

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
