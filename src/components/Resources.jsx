import React from "react";
import { resources } from '../resources/ressurser';

export default function Resources({ category }) {
    if (!category) return <p>Velg en kategori</p>;  

    const filteredResources = resources.filter(resource => resource.category === category);

    return (
        <section>
            {filteredResources.length > 0 ? (
                filteredResources.map((resource, index) => (
                    <article key={index}>
                        <h3>{resource.title}</h3>
                        <p>{resource.url}</p>
                    </article>
                ))
            ) : (
                <p>Ingen ressurser funnet for {category}</p>
            )}
        </section>
    )
}