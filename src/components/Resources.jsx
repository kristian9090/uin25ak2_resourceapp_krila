import React from "react";
import { resources } from '../resources/ressurser.js';

export default function Resources({ category }) {
    const resourceFilter = resources.find(res => res.category === category);

    if (!resourceFilter) {
        return <p>Ingen ressurser funnet for {category}</p>;
    }

    return (
        <section>
            <h3>{resourceFilter.category}</h3>
            <p>{resourceFilter.text}</p>
            <ul>
                {resourceFilter.sources.map((source, index) => (
                    <li key={index}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}