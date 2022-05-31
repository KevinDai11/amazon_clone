import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useEffect} from 'react';
import Header from './Header'
import Login from './Login';
import Home from './Home';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {onAuthStateChanged} from 'firebase/auth';



function App() {


  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth,(authUser) => {
      console.log("[USER] ", authUser);
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
            <Route exact path ="/login" element = {<Login/>}/>
            <Route exact path="/" element={<><Header/><Home/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
