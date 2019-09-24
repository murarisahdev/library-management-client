import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {
  bookId: any;
  bookContent: any;
  totalPages: any;
  pageReadPercent: any;
  currentPage = 1;
  pdfSrc = '../../../assets/praying.pdf';
  isLoaded: boolean;
  userId: number;
  readData: any;
  currentReadPercent: any;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.bookService.bookDetail(this.bookId).subscribe(data => this.bookContent = data);
  }

  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
    this.isLoaded = true;
    this.pageReadPercent = 100 / this.totalPages;
  }

  nextPage() {
    this.currentPage += 1;
    this.currentReadPercent = Math.floor(this.currentPage * this.pageReadPercent);
    this.userId = Number(localStorage.getItem('Alias'));
    this.readData = { reader: this.userId, book: this.bookId, percent: this.currentReadPercent };
    this.bookService.readBook(this.readData).subscribe();
  }

  previousPage() {
    this.currentPage -= 1;
  }

}
