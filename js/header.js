/* 
================================================================
    Title: header.js
    Author: Carl Logan
    Date: 9/6/2022
    Description: A custom web component to display a header.
================================================================
*/

// This class will establish the header web component for use on all pages
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  // The method call to connect the web component to the custom header tag
  connectedCallback() {

    // HTML tags and CSS styling for the custom web component
    this.innerHTML = `
      <style>
        header {
          width: 100%;
          height: 3.5em;
          border-bottom: 2px solid var(--secondary-color);
        }

        header .cl, header .bl {
          font-size: 1.5em;
          float: left;
          color: var(--primary-color);
          padding: 15px;
          margin: 0px;
        }

        header .bl {
          float: right;
        }

        header a:hover {
          color: var(--secondary-color);
        }

        @media screen and (max-width: 480px) {
          header {
            height: 2.8em;
          }

          header .cl, header .bl {
            font-size: 1em;
          }
        }
      </style>

      <header id="header">
        <h2 class="cl"><a href="./index.html">Carl Logan</a></h2>
        <h2 class="bl"><a href="./bucket-list.html">Bucket List</a></h2>
      </header>
    `;
  }
}

// define the custom web component for use in the html
customElements.define('header-component', HeaderComponent);