import React from 'react';
import AppCSS from './App.module.css';

const App = () => {

    return (
        <div>
            <h1 className={AppCSS.h1}>Hello World!</h1>
            <img src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_960_720.jpg" alt="" />
        </div>
    )
}

export default App;