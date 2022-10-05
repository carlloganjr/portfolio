/* 
================================================================
    Title: nav.js
    Author: Carl Logan
    Date: 9/10/2022
    Description: A custom web component to display a navigation element.
================================================================
*/

// This class will establish the nav web component for use on all pages
class NavComponent extends HTMLElement {
  constructor() {
    super();
  }

  // The method call to connect the web component to the custom nav tag
  connectedCallback() {

    // HTML tags and CSS styling for the custom web component
    this.innerHTML = `
      <style>
        .nav-change {
          width: 100%;
          border-bottom: 2px solid var(--secondary-color);
          display: inline-flex;
          justify-content: center;
          font-family: 'Fraunces', serif;
        }

        .nav-change a {
          padding: 10px 20px;
          font-size: 1.2em;
        }

        .nav-change a:hover {
          background-color: var(--tertiary-color);
        }

        @media screen and (max-width: 480px) {
          .nav-change a {
            padding: 10px 7px;
            font-size: .6em;
          }
        }

        @media screen and (min-width: 480px) and (max-width: 1080px) {
          .nav-change a {
            padding: 10px;
            font-size: .7em;
          }
        }
      </style>

      <nav class="nav-change">
        <a href="./index.html">HOME</a>  
        <a href="./projects.html">PROJECTS</a>    
        <a href="database.html">DATABASE DIAGRAMS</a>  
        <a href="api.html">API UNIT TESTS</a>  
        <a href="./about.html">ABOUT</a>  
        <a href="./resume.html">RESUME</a>  
        <a href="./bucket-list.html">BUCKET LIST</a>    
      </nav>
    `;
  }
}

// define the custom web component for use in the html
customElements.define('nav-component', NavComponent);