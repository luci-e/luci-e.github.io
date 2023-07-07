import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './header/header-brick.js';
import './body/bio/bio-brick.js';
import './body/publications/publication-brick.js';
let PersonalPage = class PersonalPage extends LitElement {
    constructor() {
        super(...arguments);
        this.header = 'My app';
    }
    render() {
        return html `
      <header-brick></header-brick>
      <div class='content'>
        <bio-brick></bio-brick>
        <publication-brick></publication-brick>
      </div>
    `;
    }
};
PersonalPage.styles = css `
    :host {
      min-height:100vh;
      height: 100%;
      width: 70%;
      min-width: 20cm;
      max-width: 25cm;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: solid;
      border-color: var(--color-border);
      border-width: 0 2px 0 2px;
      background: var(--color-content-bg);
    }

    .content{
      height: 100%;
      width: 100%;
      transform: translate(0, 50px);
    }

    @media screen and (max-width: 20cm){
      :host {
        width: 100%;
        min-width: 0;
      }
    }

  `;
__decorate([
    property({ type: String })
], PersonalPage.prototype, "header", void 0);
PersonalPage = __decorate([
    customElement('personal-page')
], PersonalPage);
export { PersonalPage };
//# sourceMappingURL=personal-page.js.map