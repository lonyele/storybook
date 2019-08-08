import { LitElement, html, property, customElement } from 'lit-element';
import { customElements } from 'global';

// @customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }
  // @property() name = 'World';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
