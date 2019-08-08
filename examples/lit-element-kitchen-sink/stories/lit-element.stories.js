import { html } from 'lit-element';
import '../components/test-component';
import '../components/test2-component';
import '../components/simple-greeting';

export default {
  title: 'Whatuppppppppppppp',
};

export const testOne = () =>
  html`
    <h1>Hello World ???</h1>
  `;
export const testTwo = () =>
  `
    <my-element foo="holly"></my-element>
  `;
export const testThree = () =>
  `
    <custom-button foo="holly"></custom-button>
  `;
export const testFour = () => `<simple-greeting></simple-greeting>`;
