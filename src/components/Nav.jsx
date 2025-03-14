import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import { useState } from 'react';
import '../styles/nav.scss';
import { useEffect } from 'react';
import { resources } from '../resources/ressurser';



export default function Nav({ category }) {
    
    // activeCategory brukes til å sjekke om knappen er valgt
    // setcategory brukes til å oppdatere activeCategory
    const [activeCategory, setCategory] = useState('')

    // her lages funkjsonen handleButtonClick finner category og oppdaterer activeCategory
    const handleButtonClick = (category) => {
        setCategory(category)
    }

    useEffect(() => {
        // her finner den ut hvilken kategori som er valgt med å bruke location.pathname
        // https://api.reactrouter.com/v7/functions/react_router.useLocation.html
        // substring fjerner / fra path
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
        const categoryStart = location.pathname.substring(1)
        setCategory(categoryStart || resources.category || 'html'); // Standard til HTML
    }, [location.pathname]);


    return (
        <nav>
            {/* linker til riktig kategori altså html */}
            <Link to="/html">
            {/* her sender handleButtonClick med riktig parameter */}
                <button className={`button ${activeCategory === 'html' ? 'active' : ''}`} onClick={() => handleButtonClick('html')}>
                    HTML
                </button>
            </Link>
            <Link to="/css">
                <button className={`button ${activeCategory === 'css' ? 'active' : ''}`} onClick={() => handleButtonClick('css')}>
                    CSS
                </button>
            </Link>
            <Link to="/javascript">
                <button className={`button ${activeCategory === 'javascript' ? 'active' : ''}`} onClick={() => handleButtonClick('javascript')}>
                    JavaScript
                </button>
            </Link>
            <Link to="/react">
                <button className={`button ${activeCategory === 'react' ? 'active' : ''}`} onClick={() => handleButtonClick('react')}>
                    React
                </button>
            </Link>
            <Link to="/headless-cms">
                <button className={`button ${activeCategory === 'headless-cms' ? 'active' : ''}`} onClick={() => handleButtonClick('headless-cms')}>
                    Sanity and headless CMS
                </button>
            </Link>
        </nav>
    )
}