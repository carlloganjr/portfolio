/* 
================================================================
    Title: card.js
    Author: Carl Logan
    Date: 9/6/2022
    Description: A custom web component to display a card.
================================================================
*/

class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.anchor_src = "";
    this.img_src = "";
    this.brief = "";
  }

  static get observedAttributes() {
    return ['anchor_src', 'img_src', 'title', 'brief'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .card {
        width: 400px;
        height: 400px;
        border-bottom: 3px solid var(--secondary-color);
        //border-right: 2px solid var(--secondary-color);
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
        margin: 5px 0 0 0;
      }

      .card:hover {
        border-bottom: 3px solid var(--tertiary-color);
      }
    </style>
    
    <div src="${this.anchor_src}" class="card">
      <h2>${this.title}Title</h2>
      <img src="${this.img_src}" alt=""></img>
      <p>${this.brief}Words to describe</p>
    </div>
    `; 
  }
}

customElements.define('card-component', CardComponent);