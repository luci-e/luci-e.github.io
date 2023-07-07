import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { lorem } from 'txtgen';

@customElement('bio-brick')
export class BioBrick extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        display: flex;
        flex-direction: row;
        z-index: 1;
        padding: 10px;
        box-sizing: border-box;
        font-size: calc(10px + 1vmin);
      }

      .pic_and_links {
        width: calc(400 * 0.7px);
        flex-direction: column;
        display:flex;
      }

      .pic {
        width: calc(400 * 0.7px);
        height: calc(300 * 0.7px);
        overflow: hidden;
      }

      .pic img {
        transform: scale(0.35);
        margin: -748% 0% 0% -336%;
      }

      .links{
        width:100%;
        padding-top:10px;
        /* overflow-wrap:normal; */
      }

      .description {
        height: 100%;
        width: 70%;
        padding: 10px;
        padding-top: 0;
        display: flex;
        flex-direction: column;
      }

      a{
        color: var(--color-link);
      }

      p {
        font-size: calc(10px + 1vmin);
      }

      @media screen and (max-width: 20cm) {
        :host {
          flex-direction: column;
          align-items: center;
        }

        .description {
          width: 100%;
        }
      }
    `,
  ];

  render() {
    return html`
      <link rel="stylesheet" href="./src/pageroot/common.css" />

      <div class="pic_and_links">
        <div class="pic">
          <img
            src="./src/pageroot/body/bio/my_photo.jpg"
            alt="hey look it's-a me"
          />
        </div>
        <div class="links">
            <a href="https://github.com/luci-e">[GitHub]</a><br>
            <a href="mailto:&#101;&#108;&#117;&#099;&#105;&#064;&#109;&#112;&#105;&#045;&#105;&#110;&#102;&#046;&#109;&#112;&#103;&#046;&#100;&#101;">[eluci@mpi-inf.mpg.de]</a><br>
            Campus E1 7<br>
            66123 Saarbrücken
            Deutschland
        </div>
      </div>

      <div class="description">
        <span id="anchor-bio"><b>About me</b></span>
        <p>
        I am a second-year PhD student at <a href="https://www.mpi-inf.mpg.de/home">MPI-INF</a> where I'm working in the <a href="https://aidam.mpi-inf.mpg.de/">AIDAM Group</a> in the field of digital fabrication. Before that I obtained my B.S. and M.S. from the CS Department at <a href="https://web.uniroma1.it/i3s/"> Università di Roma La Sapienza</a> working in embedded systems and wireless communications for the IoT. My main research interests are in inverse design problem with a focus on vision based approaches and physical simulation. 
  </p> 
    </div>
    `;
  }
}
