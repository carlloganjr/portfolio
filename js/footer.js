/* 
================================================================
    Title: footer.js
    Author: Carl Logan
    Date: 9/10/2022
    Description: A custom web component to display a footer.
================================================================
*/

// This class will establish the footer web component for use on all pages
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  // The method call to connect the web component to the custom footer tag
  connectedCallback() {

    // HTML tags and CSS styling for the custom web component
    this.innerHTML = `
      <style>
        footer {
          width: 100%;
          border-top: 2px solid var(--secondary-color);
          margin-top: 2em;
          display: inline-flex;
        }

        footer div p {
          padding: 0 25px;
          font-size: 1em;
          width: 70%;
          font-weight: 700;
        }

        footer div p a:hover {
          background-color: var(--tertiary-color);
        }

        footer .links {
          width: 75%;
        }

        footer .back-to-top {
          width: 25%;
          text-align: right;
        }

        @media screen and (max-width: 480px) {
          footer {
            height: 3em;
          }

          footer div p {
            font-size: .7em;
          }

          footer .links {
            width: 70%;
          }
  
          footer .back-to-top {
            width: 30%;
          }
        }

        @media screen and (min-width: 480px) and (max-width: 1080px) {
          footer {
            height: 3em;
          }

          footer div p {
            font-size: .8em;
          }

          footer .links p {
            padding: 5px 25px;
          }

          footer .links {
            width: 70%;
          }
  
          footer .back-to-top {
            width: 30%;
          }
        }
      </style>

      <footer>
        <div class="links">
            <p><a style="border: 1px solid var(--secondary-color); padding: 5px;" href="https://github.com/carlloganjr/portfolio">Github</a></p>
          <p><a style="border: 1px solid var(--secondary-color); padding: 5px;" class="footer-links" href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">
          Bellevue Web Dev Degree</a></p>
          <p><a style="border: 1px solid var(--secondary-color); padding: 5px;" class="footer-links" href="https://www.youtube.com/c/bellevueuniversity">
          Bellevue Youtube</a></p>
          <p><a style="border: 1px solid var(--secondary-color); padding: 5px;" class="footer-links" href="https://github.com/buwebdev">Bellevue Github</a></p>
        </div>
        <div class="back-to-top">
          <p><a style="border: 1px solid var(--secondary-color); padding: 5px;" href="#header">Back to Top</a></p>
        </div>
      </footer>
    `;
  }
}

// define the custom web component for use in the html
customElements.define('footer-component', FooterComponent);