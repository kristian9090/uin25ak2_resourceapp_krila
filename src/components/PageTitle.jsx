import React from "react";
import { resources } from '../resources/ressurser.js';
import '../styles/pageTitle.scss';

// importerer category fra Layout
export default function PageTitle({ category }) {
    return (
        //  setter category inn i h3
        <h3>Ressurser for {category}</h3>
    );

}