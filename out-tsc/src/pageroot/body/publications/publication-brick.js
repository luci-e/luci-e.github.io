import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let PublicationBrick = class PublicationBrick extends LitElement {
    render() {
        return html ` <link rel="stylesheet" href="./src/pageroot/common.css" />

      <div class="publications_list">
        <span id="anchor-publications"><b>Publications</b></span>
      </div>`;
    }
};
PublicationBrick.styles = [
    css `
      :host {
        display: block;
        font-size: calc(10px + 1vmin);
      }

      .publications_list {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
      }
    `,
];
PublicationBrick = __decorate([
    customElement('publication-brick')
], PublicationBrick);
export { PublicationBrick };
//# sourceMappingURL=publication-brick.js.map