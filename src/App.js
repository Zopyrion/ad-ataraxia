import React from 'react';
import NavBar from "./common/Navigation";
import Footer from "./common/Footer";
import Header from "./common/Header";
import './css/tufte.css';
import './common/Navigation.css';
import './fonts/fonts.css';
import './App.css';
import './components/FilterTag.css'
import './css/toggle.css'
import './components/MiniTag.css'
import './common/Footer.css'
import './common/Header.css'

function App() {

    return (

        <React.Fragment>


            <Header/>
            <NavBar/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;