import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { publication } from './publication.js'
import { author } from './author.js';

import publicationsData from '../../publications.json' assert {type: "json"};
import authorsData from '../../authors.json' assert {type: "json"};

@customElement('publication-brick')
export class PublicationBrick extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        font-size: calc(10px + .75vmin);
      }

      .publications_list {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
      }
    `,
  ];

  constructor(){
    super();

    for( const pub of publicationsData){
      const authorList : Array<author> = [];

      const pubAuthors = pub.authors;
      
      for( const auth of pubAuthors ){
        const authKey = auth as keyof typeof authorsData;
        authorList.push( <author>authorsData[authKey]);
      }

      const newPub = new publication(pub.title, pub.year, authorList, pub.venue, pub.bib, pub.pdf);

      this.publications.push( newPub);
    }
  }

  @state()
  publications : Array<publication> = [];

  render_publication( pub: publication ){
    return html`
      <div>
      <b>${pub.title}</b><br>
      ${pub.authors.map((auth) => html`<a href=${auth.link} target="_blank">${auth.name}  </a>`)}<br>
      ${pub.venue} ${pub.year} <a href=${pub.pdf} target="_blank">[pdf]</a>
      </div>
      <hr>
    `;

  }

  render() {
    return html` <link rel="stylesheet" href="./assets/common.css" />

      <div class="publications_list">
        <span class='title' id="anchor-publications"><b>Publications</b></span><br>
        ${this.publications.map( (pub) => this.render_publication(pub) )}
      </div>`;
  }
}
