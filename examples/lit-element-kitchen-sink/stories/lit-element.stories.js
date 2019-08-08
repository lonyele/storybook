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
  html`
    <my-element foo="holly crap???? yooo no???"></my-element>
  `;
export const testThree = () =>
  html`
    <custom-button foo="holly crap???? what the?"></custom-button>
  `;
export const testFour = () => `<simple-greeting></simple-greeting>`;
