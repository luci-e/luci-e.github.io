import { author } from './author.js';

export class publication {
  constructor(
    public title: string,
    public year: number,
    public authors: Array<author>,
    public venue: string,
    public bib: string,
    public pdf: string
  ) {}
}
