import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('header-brick')
export class HeaderBrick extends LitElement {
  static styles = [
    css`
      :host {
        height: 50px;
        width: 100vw;
        top: 0;
        left: 0;
        display: flex;
        position: fixed;
        flex-direction: row;
        justify-content: center;
        box-sizing: border-box;
        font-size: calc(10px + 1vmin);
      }

      .header_bar {
        max-width: 25cm;
        min-width: 20cm;
        width: 70%;
        height: 50px;
        z-index: 9999;
        display: flex;
        flex-direction: row;
        background-color: var(--color-header-bg);
        justify-content: space-between;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;
        box-sizing: border-box;
      }

      @media screen and (max-width: 20cm) {
        .header_bar {
          width: 100%;
          min-width: 0;
        }
      }

      dark-mode-toggle {
        --dark-mode-toggle-remember-font: 0.75rem 'Helvetica';
        --dark-mode-toggle-legend-font: bold 0.85rem 'Helvetica';
        --dark-mode-toggle-label-font: 0.85rem 'Helvetica';
        --dark-mode-toggle-color: var(--text-color);
        --dark-mode-toggle-background-color: none;
      }

      #dark-mode-toggle-2 {
        --dark-mode-toggle-dark-icon: url('./assets/icons/sun.svg');
        --dark-mode-toggle-light-icon: url('./assets/icons/moon.svg');
        --dark-mode-toggle-icon-size: 2rem;
        --dark-mode-toggle-icon-filter: invert(100%);
      }

      .cv:link,
      .cv:hover,
      .cv:visited,
      .cv:active {
        color: inherit;
        text-decoration: none;
      }

      a {
      }
    `,
  ];

  render() {
    return html`
      <link rel="stylesheet" href="./assets/common.css" />
      <div class="header_bar">
        <div><b>Emiliano Luci</b></div>
        <div><a href="#anchor-bio">Bio</a></div>
        <div><a href="#anchor-publications">Publications</a></div>
        <div>
          <a class="cv" target="_blank" href="./assets/CV_emi.pdf">CV</a>
        </div>
        <dark-mode-toggle
          id="dark-mode-toggle-2"
          appearance="toggle"
          permanent
        ></dark-mode-toggle>
      </div>
    `;
  }
}
