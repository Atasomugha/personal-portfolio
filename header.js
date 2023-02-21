/*
Title: header.js
Author: Professor Krasso
Date: 20 February 2023
Modified By: Anachebe Asomugha
Description: JavaScript module for WEB 330 Personal Portfolio assignment
*/

class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="app-header full-width">From The Portfolio Of Anachebe Asomugha</header>

        <nav>
            <a href="index.html">Home</a>&#160; &#160; 
            <a href="about.html">About</a>&#160; &#160;
            <a href="resume.html">Resume</a>&#160; &#160;
            <a href="projects.html">Projects</a>&#160; &#160;
            <a href="database-diagrams.html">Database</a>&#160; &#160;
            <a href="api-tests.html">API-Tests</a>&#160; &#160;
            <a href="bucket-list.html">Bucket List</a>
        </nav> 
        `;
    }
}

customElements.define("header-component", Header);