import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import { useState } from 'react';
import '../styles/nav.scss';



export default function Nav({ category }) {
    
    const [activeCategory, setCategory] = useState('');

    const handleButtonClick = (category) => {
        setCategory(category);
    }

    return (
        <nav>
            <Link to="/html">
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