import {Author} from './author.js';

export class Publications {
    title: string;

    author_list: Array<Author>

    constructor(title: string, authorList: Array<Author>){
        this.title = title;
        this.author_list = authorList;
    }
}

