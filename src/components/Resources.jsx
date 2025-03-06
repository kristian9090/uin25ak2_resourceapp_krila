import React from "react";
import { resources } from '../resources/ressurser.js';

export default function Resources({ category }) {
    const filteredResources = resources.filter(res => res.category === category);

    if (filteredResources.length === 0) {
        return <p>Ingen ressurser funnet for {category}</p>;
    }

    return (
        <section>
            <h3>Ressurser for {category}</h3>
            <ul>
                {filteredResources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.url} target="_blank">
                            {resource.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}