import React from "react";
import Nav from "./Nav";
import Resources from "./Resources";
import PageTitle  from "./PageTitle"; 

export default function Layout({  }) {
    return (
    <>
        <header>
                <PageTitle />
                <Nav />
        </header>
        <main>
            <Resources />
        </main>
    </>
    );
}