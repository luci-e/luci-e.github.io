import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('publication-brick')
export class PublicationBrick extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-size: calc(10px + 1vmin);
            }

            .publications_list{
                width: 100%;
                display: flex;
                flex-direction:column;
                padding: 10px;
            }
        `
    ];

    render() {
        return html`
              <link rel="stylesheet" href="./src/pageroot/common.css" />

        <div class="publications_list">
        <span id="anchor-publications"><b>Publications</b></span>

    </div>`;
    }
}
