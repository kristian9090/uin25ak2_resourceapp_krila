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
        <>
        <nav>
            <button className={`button ${activeCategory === 'html' ? 'active' : ''}`} onClick={() => handleButtonClick('html')}>
                <Link to="/html">HTML</Link>
            </button>
            <button className={`button ${activeCategory === 'css' ? 'active' : ''}`} onClick={() => handleButtonClick('css')}>
                <Link to="/css">CSS</Link>
            </button>
            <button className={`button ${activeCategory === 'javascript' ? 'active' : ''}`} onClick={() => handleButtonClick('javascript')}>
                <Link to="/javascript">JavaScript</Link>
            </button>
            <button className={`button ${activeCategory === 'react' ? 'active' : ''}`} onClick={() => handleButtonClick('react')}>
                <Link to="/react">React</Link>
            </button>
            <button className={`button ${activeCategory === 'headless-cms' ? 'active' : ''}`} onClick={() => handleButtonClick('headless-cms')}>
                <Link to="/headless-cms">Sanity and headless CMS</Link>
            </button>
        </nav>
        </>
    )
}