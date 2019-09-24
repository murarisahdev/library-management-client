import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { strictEqual } from 'assert';

@Injectable()
export class BookService {
    BASE_URL: string;

    constructor(private http: HttpClient) {
        this.BASE_URL = 'http://awesomeblog.in/api/';
    }

    bookCatalogue(): Observable<any> {
        return this.http.get(this.BASE_URL + 'book-catalog/');
    }

    paginatedBooks(PAGEURL): Observable<any> {
        return this.http.get(PAGEURL);
    }

    allCategories(): Observable<any> {
        return this.http.get(this.BASE_URL + 'category/');
    }

    bookDetail(bookId): Observable<any> {
        return this.http.get(this.BASE_URL + 'book-catalog/' + bookId + '/');
    }

    categoryDetail(categoryId): Observable<any> {
        return this.http.get(this.BASE_URL + 'category/' + categoryId + '/');
    }

    categoryBooks(categoryId): Observable<any> {
        return this.http.get(this.BASE_URL + 'category/books/' + categoryId + '/');
    }

    bookReview(reviewData): Observable<any> {
        return this.http.post(this.BASE_URL + 'review/', reviewData);
    }

    readBook(readData): Observable<any> {
        return this.http.post(this.BASE_URL + 'track-readed-books/', readData);
    }

    createBook(createBookData): Observable<any> {
        return this.http.post(this.BASE_URL + 'book-catalog/', createBookData);
    }

    updateBook(updateBookData, bookId): Observable<any> {
        return this.http.patch(this.BASE_URL + 'book-catalog/' + bookId + '/', updateBookData);
    }

    deleteBook(bookId): Observable<any> {
        return this.http.delete(this.BASE_URL + 'book-catalog/' + bookId + '/');
    }

    createCategory(createCategoryData) {
        return this.http.post(this.BASE_URL + 'category/', createCategoryData);
    }

    updateCategory(updateCategoryData, categoryId) {
        return this.http.put(this.BASE_URL + 'category/' + categoryId + '/', updateCategoryData);
    }

    deleteCategory(categoryId) {
        return this.http.delete(this.BASE_URL + 'category/' + categoryId + '/');
    }

    readBookTracker(percentageTrackerData) {
        return this.http.post(this.BASE_URL + 'track-readed-books/', percentageTrackerData);
    }

}
