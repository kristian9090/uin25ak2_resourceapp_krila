import React from 'react';
import { resources } from '../resources/ressurser.js';
import { Link } from 'react-router-dom';

export default function Nav({ category }) {
    const showInfo = (category) => {
        const resource = resources.find(res => res.category === category);
        if (resource) {
            alert(`Category: ${resource.category}\nDescription: ${resource.description}`);
        } else {
            alert('Category not found');
        }
    };

    return (
        <nav>
            <button className="button">
                <Link to="/html">HTML</Link>
            </button>
            <button className="button">
                <Link to="/css">CSS</Link>
            </button>
            <button className="button">
                <Link to="/javascript">JavaScript</Link>
            </button>
            <button className="button">
                <Link to="/react">React</Link>
            </button>
            <button className="button">
                <Link to="/sanity">Sanity and headless CMS</Link>
            </button>

        </nav>
    )
}