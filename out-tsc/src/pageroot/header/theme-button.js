import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ThemeButton = class ThemeButton extends LitElement {
    constructor() {
        super();
        this.theme = false;
    }
    render() {
        return html `
        
        `;
    }
};
ThemeButton.styles = [
    css `
            :host {
                display: block;
            }
        `
];
__decorate([
    property({ type: Boolean })
], ThemeButton.prototype, "theme", void 0);
ThemeButton = __decorate([
    customElement('theme-button')
], ThemeButton);
export { ThemeButton };
//# sourceMappingURL=theme-button.js.map