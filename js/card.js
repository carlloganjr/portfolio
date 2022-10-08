/* 
================================================================
    Title: card.js
    Author: Carl Logan
    Date: 9/6/2022
    Description: A custom web component to display a card.
================================================================
*/

// CardComponent will be used to create a link to projects
class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.anchor_href = "";
    this.img_src = "";
    this.brief = "";
  }

  // return the attributes that can be modified
  static get observedAttributes() {
    return ['anchor_href', 'img_src', 'title', 'brief'];
  }

  // check the attributes for changes
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

  // setup the typical card element
  connectedCallback() {
    this.innerHTML = `
    <style>
      .card {
        width: 400px;
        height: 400px;
        border-top: 3px solid var(--secondary-color);
        text-align: center;
        font-size: .8em;
        color: var(--primary-color);
        margin: 10%;
        cursor: pointer;
      }

      .card img {
        width: 70%;
      }

      .card h2, .card p {
        margin: 15px 0 10px 0;
      }

      .card:hover {
        border-top: 3px solid var(--tertiary-color);
      }

      @media screen and (min-width: 481px) and (max-width: 770px) {
        .card {
          width: 475px;
          height: 475px;
        }
      }

      @media screen and (min-width: 771px) and (max-width: 880px) {
        .card {
          width: 300px;
          height: 300px;
        }
      }

      @media screen and (min-width: 881px) and (max-width: 1080px) {
        .card {
          width: 400px;
          height: 400px;
        }
      }

      @media screen and (min-width: 1081px) and (max-width: 1280px) {
        .card {
          width: 500px;
          height: 500px;
          margin: 10% 0;
        }
      }
    </style>
    
    <div class="card">
      <a href="${this.anchor_href}" target="_blank">
        <h2>${this.title}</h2>
        <img src="${this.img_src}" alt=""></img>
        <p>${this.brief}</p>
      </a>
    </div>
    `; 
  }
}

// define the custom element for use in the html
customElements.define('card-component', CardComponent);