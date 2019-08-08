import { LitElement, html } from 'lit-element';
import { customElements } from 'global';

export class CustomButton extends LitElement {
  render() {
    return html`
      <button>🚀Rocket Science ???? what<slot></slot></button>
    `;
  }
}

// customElements.define('custom-button', CustomButton);
