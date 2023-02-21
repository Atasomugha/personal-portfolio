/*
Title: footer.js
Author: Professor Krasso
Date: 20 February 2023
Modified By: Anachebe Asomugha
Description: JavaScript module for WEB 330 Personal Portfolio assignment
*/

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
        <p style="text-align: center;">&copy; Anachebe Asomugha &nbsp; 2023
        </p></footer>
        `;
    }
}

customElements.define("footer-component", Footer);