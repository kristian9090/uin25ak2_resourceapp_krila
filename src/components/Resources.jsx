import React from "react";
import { resources } from '../resources/ressurser.js';
import PageTitle from "./PageTitle.jsx";

export default function Resources({ category, setTitle }) {
    const filteredResources = resources.filter(res => res.category === category);


    return (
        <section>
            <h3>Ressurser for <PageTitle/></h3>
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