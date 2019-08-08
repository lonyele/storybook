// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { customElements } from 'global';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get properties() {
    return {
      foo: { type: String },
    };
  }
  // @property()
  // foo = 'foo';

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <p>A paragraph what about? holly test1- ${this.foo}</p>
    `;
  }
}

// Register the new element with the browser.
customElements.define('my-element', MyElement);
