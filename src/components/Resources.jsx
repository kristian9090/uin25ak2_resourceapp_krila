import React from "react";
import { resources } from '../resources/ressurser.js';
import PageTitle from "./PageTitle.jsx";
import '../styles/resources.scss';

export default function Resources({ category, setTitle }) {
    // filtrerer ut riktig kategori, der res er kort for resources og ser etter category i arrayet
    const displayResources = resources.filter(res => res.category === category);

    

    return (
        <section>
            {/* importerer pagetitle og tar med seg category */}
            <PageTitle category={category}/>
            <ul>
                {/* mapper ut rikitg kategori henter ut url og tittel, */}
                {displayResources.map((resource, index) => (
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