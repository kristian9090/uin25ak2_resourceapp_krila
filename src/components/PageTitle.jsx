import React from "react";
import { resources } from '../resources/ressurser.js';
import '../styles/pageTitle.scss';


export default function PageTitle({ category }) {
    return (
        <h3>Ressurser for {category}</h3>
    );

}