import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useEffect} from 'react';
import Header from './Header'
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import ProductPage from './ProductPage';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {onAuthStateChanged} from 'firebase/auth';



function App() {


  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth,(authUser) => {
      
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path ="/login" element = {<Login/>}/>
            <Route exact path="/" element={<><Header/><Home/></>}/>
            <Route exact path ="/productpage" element = {<><Header/><ProductPage/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
