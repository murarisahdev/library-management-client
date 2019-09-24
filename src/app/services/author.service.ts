import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { strictEqual } from 'assert';

@Injectable()
export class AuthorService {
    BASE_URL: string;

    constructor(private http: HttpClient) {
        this.BASE_URL = 'http://awesomeblog.in/api/';
    }

    allAuthors(): Observable<any> {
        return this.http.get(this.BASE_URL + 'author/');
    }

    authorDetail(authorId): Observable<any> {
        return this.http.get(this.BASE_URL + 'author/' + authorId + '/');
    }

    authorBooks(authorId): Observable<any> {
        return this.http.get(this.BASE_URL + 'author/books/' + authorId + '/');
    }

    createAuthor(createAuthorData) {
        return this.http.post(this.BASE_URL + 'author/', createAuthorData);
    }

    updateAuthor(updateAuthorData, authorId) {
        return this.http.put(this.BASE_URL + 'author/' + authorId + '/', updateAuthorData);
    }

    deleteAuthor(authorId) {
        return this.http.delete(this.BASE_URL + 'author/' + authorId + '/');
    }

}
