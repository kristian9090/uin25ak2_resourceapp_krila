import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';

export default function Nav({ category }) {
    

    return (
        <>
        <PageTitle/>
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
                <Link to="/headless-cms">Sanity and headless CMS</Link>
            </button>

        </nav>
        </>
    )
}