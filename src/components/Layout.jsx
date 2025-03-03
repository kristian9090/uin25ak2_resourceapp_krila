import React from 'react';
import "../resources/ressurser.js";
export default function Layout({ resources }) {
    return (
        <article>
            <h3>{resources.title}</h3>
            <p>{resources.url}</p>
            <p>{resources.category}</p>
        </article>
    )
}