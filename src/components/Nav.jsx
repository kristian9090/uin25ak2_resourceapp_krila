import React from 'react';
import { resources } from '../resources/ressurser.js';

export default function Nav() {
    return (
        <nav>
            {resources.map((resource, index) => (
                <button key={index} className="button">
                    {resource.title}
                </button>
            ))}
        </nav>
    )
}