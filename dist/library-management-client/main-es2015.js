(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accountConfirmation/accountconfirmation.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/accountConfirmation/accountconfirmation.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <div>\n                <h1><strong>Account Confirmation</strong></h1><br>\n                <h4>Your account has been activated successfully !</h4><br>\n            </div>\n        </div>\n        <div class=\"col-md-6 login-form-2\">\n            <div>\n                <h1 class=\"text-xs-center\"><strong>Please Login To Continue</strong></h1><br>\n                <div class=\"form-group\">\n                    <a class=\"btn btnSubmit\" routerLink=\"/login\" routerLinkActive=\"active\"><span style=\"font-size: 20px;\">Login</span></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/author/author.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/author/author.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<!-- Admin Nav -->\n<div id=\"mySidenav\" class=\"sidenav\" *ngIf=\"isAdmin()\">\n    <a data-toggle=\"modal\" data-target=\"#createModal\" id=\"create\">Create</a>\n</div>\n\n<!-- Header -->\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>All Authors</strong>\n                </h1>\n                <button type=\"button\" class=\"btn topBadge\">\n                    Total Authors <span class=\"badge badge-light\">{{totalAuthors}}</span>\n                </button>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<!-- Content -->\n<div class=\"container\">\n    <div class=\"row mb-2\">\n        <div class=\"col-md-6\" *ngFor=\"let author of authorList\">\n            <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n                <div class=\"card-body d-flex flex-column align-items-start\">\n                    <strong class=\"d-inline-block mb-2 text-primary h2\">{{author.name}}</strong><br>\n                    <button type=\"button\" class=\"btn detailButton\" (click)=\"authorDetail(author.id)\">Author Details</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Create Modal (Admin) -->\n<div class=\"modal fade\" id=\"createModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create New Author</h5>\n                <button type=\"button\" class=\"close\" id=\"closeModal\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"createAuthorForm\" (ngSubmit)=\"createAuthorSubmit()\">\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Author Name: </span>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Author Name\" required />\n                    </div>\n\n                    <button type=\"submit\" class=\"btn detailButton\" [disabled]=\"!createAuthorForm.valid\">Create</button>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorDetail/authordetail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorDetail/authordetail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div id=\"mySidenav\" class=\"sidenav\" *ngIf=\"isAdmin()\">\n    <a data-toggle=\"modal\" data-target=\"#updateModal\" id=\"update\" (click)=updateAuthor(author?.id)>Update</a>\n    <a id=\"delete\" (click)=\"deleteAuthor(author?.id)\">Delete</a>\n</div>\n\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>{{author?.name}}</strong>\n                </h1>\n                <button type=\"button\" class=\"btn topBadge\">\n                    Total Books <span class=\"badge badge-light\">{{author?.book_count}}</span>\n                </button>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"authorBookList?.length > 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">Books By {{author?.name}}</h1>\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"authorBookList?.length === 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">No Books By This Author!</h1>\n            <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"container\">\n    <div class=\"row mb-2\">\n        <div class=\"col-md-6\" *ngFor=\"let authorBook of authorBookList\">\n            <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n                <div class=\"card-body d-flex flex-column align-items-start\">\n                    <strong class=\"d-inline-block mb-2 text-primary h1\">{{authorBook?.name}}</strong>\n                    <h3 class=\"mb-0\">\n                        <p class=\"text-dark\">Category: {{authorBook?.category.name}}</p>\n                    </h3>\n                    <div class=\"mb-1 text-muted\" *ngFor=\"let author of authorBook?.author\">Author: {{author.name}}</div>\n                    <p class=\"card-text mb-auto\">Description: {{authorBook?.description | slice:0:50}}</p>\n                    <button type=\"button\" class=\"btn detailButton\" (click)=bookDetail(authorBook?.id)>Book Details</button>\n                </div>\n                <img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Thumbnail [200x250]\" style=\"width: 200px; height: 250px;\" src=\"{{authorBook?.book_cover}}\" data-holder-rendered=\"true\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Author</h5>\n                <button type=\"button\" id=\"closeModal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"updateAuthorForm\" (ngSubmit)=\"updateAuthorSubmit(author?.id)\">\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Author Name: </span><br>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" required />\n                    </div>\n                    <button type=\"submit\" class=\"btn detailButton\">Update</button>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bookDetail/bookdetail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bookDetail/bookdetail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div id=\"mySidenav\" class=\"sidenav\" *ngIf=\"isAdmin()\">\n    <a data-toggle=\"modal\" data-target=\"#updateModal\" id=\"update\" (click)=updateBook(bookInfo?.id)>Update</a>\n    <a id=\"delete\" (click)=\"deleteBook(bookInfo?.id)\">Delete</a>\n    <a data-toggle=\"modal\" id=\"updateBookCover\" imageUpload data-target=\"#updateBookCoverModal\">Update Cover</a>\n    <a data-toggle=\"modal\" id=\"updateBookPdf\" imageUpload data-target=\"#updateBookPdfModal\">Update Pdf</a>\n</div>\n\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>{{bookInfo?.name}}</strong>\n                </h1>\n                <button type=\"button\" class=\"btn topBadge\" (click)=\"readBook(bookInfo?.id)\">Read Book</button>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid headerImg\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<div class=\"whole-wrap\">\n    <div class=\"container\">\n        <div class=\"section-top-border\">\n            <h3 class=\"mb-30\"></h3>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <img src=\"{{bookInfo?.book_cover}}\" alt=\"\" class=\"img-fluid bookImg\">\n                </div>\n                <div class=\"col-md-9 mt-sm-20\">\n                    <p class=\"card-title h4 text-success\"><strong>Category:</strong> {{bookInfo?.category.name}}</p><br>\n                    <div *ngFor=\"let author of bookInfo?.author\">\n                        <p class=\"card-title h4\"><strong>Author:</strong> {{author?.name}}</p><br>\n                    </div>\n                    <p class=\"card-text h4\"><strong>Description:</strong> {{bookInfo?.description}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-3\">\n            <div class=\"input-group\" *ngIf=\"canReviewBook()\">\n                <input type=\"text\" class=\"form-control\" name=\"review\" [(ngModel)]='reviewValue' id=\"review\" placeholder=\"Review\">&nbsp;&nbsp;\n                <button type=\"button\" class=\"btn detailButton\" (click)=\"reviewBook(reviewValue, bookInfo?.id)\">Review</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"section-top-border\">\n        <h3 class=\"mb-30\">Reviews</h3>\n        <div class=\"row\">\n            <div class=\"col-lg-12\" *ngFor=\"let peopleReview of bookInfo?.reviews\">\n                <blockquote class=\"generic-blockquote\">\n                    “{{peopleReview?.review}}”\n                </blockquote>\n            </div>\n            <div class=\"col-lg-12\" *ngIf=\"bookInfo?.reviews.length === 0\">\n                <blockquote class=\"generic-blockquote\">\n                    “No Reviews Yet”\n                </blockquote>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Book</h5>\n                <button type=\"button\" id=\"closeModalUpdate\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"updateBookForm\" (ngSubmit)=\"updateBookSubmit(bookInfo?.id)\">\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Name: </span><br>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Book Name\" required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Category: </span>\n                        <select class=\"custom-select\" formControlName=\"category\" id=\"inputGroupSelect01\" required>\n                                                <option *ngFor=\"let category of categoryList\" value={{category?.id}}>{{category?.name}}</option>\n                                        </select>\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Author: </span>\n                        <select class=\"custom-select\" formControlName=\"author\" id=\"inputGroupSelect01\" required>\n                                            <option *ngFor=\"let author of authorList\" value=\"{{author?.id}}\">{{author?.name}}</option>\n                                         </select>\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Description: </span><br>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Enter Book Description\" required />\n                    </div>\n                    <button type=\"submit\" class=\"btn detailButton\" id=\"btnUpdate\">Update</button>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateBookCoverModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Book Cover</h5>\n                <button type=\"button\" id=\"closeModal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"uploadBookCover\" (ngSubmit)=\"updateBookCover(bookInfo?.id)\">\n                    <input formControlName=\"book_cover\" class=\"form-control\" name=\"book_cover\" type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload a file...\" multiple/><br>\n                    <button type=\"submit\" [disabled]=\"!uploadBookCover.valid\" class=\"btn detailButton\" id=\"btnUpdate\">Update Book Cover</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateBookPdfModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Book Pdf</h5>\n                <button type=\"button\" id=\"closeModalPdf\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"uploadBookPdf\" (ngSubmit)=\"updatePdf(bookInfo?.id)\">\n                    <input formControlName=\"file\" class=\"form-control\" name=\"file\" type=\"file\" (change)=\"updatePdfEvent($event)\" placeholder=\"Upload a pdf...\" multiple/><br>\n                    <button type=\"submit\" [disabled]=\"!uploadBookPdf.valid\" class=\"btn detailButton\" id=\"btnUpdate\">Update Book Pdf</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div id=\"mySidenav\" class=\"sidenav\" *ngIf=\"isAdmin()\">\n    <a data-toggle=\"modal\" data-target=\"#createModal\" id=\"create\">Create</a>\n</div>\n\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>All Categories</strong>\n                </h1>\n                <button type=\"button\" class=\"btn topBadge\">\n                    Total Categories <span class=\"badge badge-light\">{{totalCategories}}</span>\n                </button>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<div class=\"container\">\n    <div class=\"row mb-2\">\n        <div class=\"col-md-6\" *ngFor=\"let category of categoryList\">\n            <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n                <div class=\"card-body d-flex flex-column align-items-start\">\n                    <strong class=\"d-inline-block mb-2 text-primary h2\">{{category.name}}</strong><br>\n                    <button type=\"button\" class=\"btn detailButton\" (click)=\"categoryDetail(category.id)\">Category Detail</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"createModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create New Category</h5>\n                <button type=\"button\" id=\"closeModal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"createCategoryForm\" (ngSubmit)=\"createCategorySubmit()\">\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Category Name: </span>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Category Name\" required />\n                    </div>\n\n                    <button type=\"submit\" [disabled]=\"!createCategoryForm.valid\" class=\"btn detailButton\">Create Category</button>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoryDetail/categorydetail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoryDetail/categorydetail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div id=\"mySidenav\" class=\"sidenav\" *ngIf=\"isAdmin()\">\n    <a data-toggle=\"modal\" data-target=\"#updateModal\" id=\"update\" (click)=updateCategory()>Update</a>\n    <a id=\"delete\" (click)=\"deleteCategory(category?.id)\">Delete</a>\n</div>\n\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>{{category?.name}}</strong>\n                </h1>\n                <button type=\"button\" class=\"btn topBadge\">\n                    Total Books <span class=\"badge badge-light\">{{category?.book_count}}</span>\n                </button>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"categoryBookList?.length > 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">Books In {{category?.name}}</h1>\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"categoryBookList?.length === 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">No Books In This Category!</h1>\n            <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"container\">\n    <div class=\"row mb-2\">\n        <div class=\"col-md-6\" *ngFor=\"let categoryBook of categoryBookList\">\n            <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n                <div class=\"card-body d-flex flex-column align-items-start\">\n                    <strong class=\"d-inline-block mb-2 text-primary h1\">{{categoryBook?.name}}</strong>\n                    <h3 class=\"mb-0\">\n                        <p class=\"text-dark\">Category: {{categoryBook?.category.name}}</p>\n                    </h3>\n                    <div class=\"mb-1 text-muted\" *ngFor=\"let author of categoryBook?.author\">Author: {{author.name}}</div>\n                    <p class=\"card-text mb-auto\">Description: {{categoryBook?.description | slice:0:50}}</p>\n                    <button type=\"button\" class=\"btn detailButton\" (click)=bookDetail(categoryBook?.id)>Book Details</button>\n                </div>\n                <img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Thumbnail [200x250]\" style=\"width: 200px; height: 250px;\" src=\"{{categoryBook?.book_cover}}\" data-holder-rendered=\"true\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Category</h5>\n                <button type=\"button\" id=\"closeModal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"updateCategoryForm\" (ngSubmit)=\"updateCategorySubmit(category?.id)\">\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Category Name: </span><br>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Category Name\" required />\n                    </div>\n\n                    <button type=\"submit\" class=\"btn detailButton\">Update Category</button>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<!-- Admin Navigation -->\n<div id=\"mySidenav\" class=\"sidenav\" *ngIf=\"isAdmin()\">\n    <a data-toggle=\"modal\" data-target=\"#createModal\" id=\"create\">Create</a>\n</div>\n\n<!-- Top Banner -->\n<section class=\"topbanner\" id=\"header\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>All Books</strong>\n                </h1>\n                <button type=\"button\" class=\"btn topBadge\">\n                    Total Books <span class=\"badge badge-light\">{{totalBooks}}</span>\n                </button>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<!-- Content -->\n<section id=\"content\">\n    <div class=\"container\">\n        <div class=\"row mb-2 price-area\">\n            <div class=\"col-md-6\" *ngFor=\"let book of bookList\">\n                <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n                    <div class=\"card-body d-flex flex-column align-items-start\">\n                        <strong class=\"d-inline-block mb-2 text-primary h2\">{{book?.name}}</strong>\n                        <h3 class=\"mb-0\">\n                            <p class=\"text-dark\">Category: {{book?.category.name}}</p>\n                        </h3>\n                        <div *ngFor=\"let author of book?.author\">\n                            <p class=\"text-dark\"></p>Author: {{author?.name}}\n                        </div>\n                        <p class=\"card-text mb-auto\">Description: {{book?.description | slice:0:50}}</p>\n                        <button type=\"button\" class=\"btn detailButton\" (click)=\"bookDetail(book?.id)\">Book Detail</button>\n                    </div>\n                    <img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Thumbnail [200x250]\" style=\"width: 200px; height: 250px;\" src=\"{{book?.book_cover}}\" data-holder-rendered=\"true\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Create Modal (Admin) -->\n<div class=\"modal fade\" id=\"createModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create New Book</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"closeModal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"createBookForm\" (ngSubmit)=\"createBookSubmit()\" enctype=\"multipart/form-data\">\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Name: </span>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Book Name\" required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Category: </span>\n                        <select class=\"custom-select\" formControlName=\"category\" id=\"inputGroupSelect01\" required>\n                                                <option *ngFor=\"let category of categoryList\" value={{category?.id}}>{{category?.name}}</option>\n                                        </select>\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Author: </span>\n                        <select class=\"custom-select\" formControlName=\"author\" id=\"inputGroupSelect01\" required>\n                                            <option *ngFor=\"let author of authorList\" value=\"{{author?.id}}\">{{author?.name}}</option>\n                                         </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <span class=\"input-group\">Book Cover: </span>\n                        <div class=\"col-md-9\">\n                            <input formControlName=\"book_cover\" class=\"form-control\" id=\"book_cover\" name=\"book_cover\" type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload an image...\" multiple/>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <span class=\"input-group\">Book Pdf: </span>\n                        <div class=\"col-md-9\">\n                            <input formControlName=\"file\" class=\"form-control\" id=\"file\" name=\"file\" type=\"file\" (change)=\"pdfUploadEvent($event)\" placeholder=\"Upload a pdf...\" multiple/>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <span class=\"input-group\">Book Description: </span>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Enter Book Description\" required />\n                    </div>\n\n                    <button type=\"submit\" id=\"btnCreate\" [disabled]=\"!createBookForm.valid\" class=\"btn detailButton\">Create</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Page NAvigation -->\n<nav aria-label=\"Page navigation\">\n    <ul class=\"pagination justify-content-end\">\n        <button class=\"btn topBadge\" (click)=\"previous()\" [disabled]=\"previousPage === null\">Previous</button>\n        <button class=\"btn topBadge\" (click)=\"next()\" [disabled]=\"nextPage === null\">Next</button>\n    </ul>\n</nav>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer-area\">\n    <div class=\"wrapper\">\n    </div>\n    <div><br></div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgetPassword/forgetpassword.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgetPassword/forgetpassword.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <div>\n                <h1><strong>Forget Password</strong></h1>\n                <h4>Enter Your Email</h4><br>\n                <form [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-id-card\"></i></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"email\" required />\n                    </div><br>\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!forgetPasswordForm.valid\" class=\"btn btnSubmit\"><span style=\"font-size: 20px;\">Submit</span></button>\n                    </div>\n                    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"statusMessage\">\n                        {{statusMessage}}\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-6 login-form-2\">\n            <div>\n                <h1 class=\"text-xs-center\"><strong>Info</strong></h1><br>\n                <div class=\"form-group\">\n                    <font size=\"4\">A password reset link will be sent to you on your registered email upon submitting this form.</font>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <div>\n                <h1><strong>Login</strong></h1>\n                <h4>Sign in to your Account</h4><br>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-user\"></i></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email_or_username\" placeholder=\"Enter Email or Username\" required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\" required />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btnSubmit\"><span style=\"font-size: 20px;\">Login</span></button>\n                        <a routerLink=\"/forgetpassword\" routerLinkActive=\"active\" class=\"ForgetPwd\" style=\"float:right;margin: 10px;\">Forget Password?</a>\n                    </div>\n                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">\n                        {{errorMessage}}\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-6 login-form-2\">\n            <div>\n                <h1 class=\"text-xs-center\"><strong>Sign Up</strong></h1>\n                <div class=\"form-group\">\n                    <font size=\"4\">Login with your registered e-mail, username and password.</font>\n                </div><br>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btnSubmit text-xs-center\" routerLink=\"/signup\" routerLinkActive=\"active\"><span style=\"font-size: 20px;\">Sign Up</span></button>&nbsp;&nbsp;\n                    <button type=\"submit\" class=\"google-button\" (click)=\"signInWithGoogle()\"><span style=\"font-size: 20px;\"><i class=\"fab fa-google\"></i> Google</span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/myReviews/myreviews.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/myReviews/myreviews.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>My Reviews</strong>\n                </h1>\n                <a class=\"btn topBadge\" routerLink=\"/profile\" routerLinkActive=\"active\">My Profile</a>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"myReviewList?.length === 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">No Reviews Yet!</h1>\n            <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">            \n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"myReviewList?.length > 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">Reviewed Books So Far!</h1>\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"section-top-border\" *ngFor=\"let myReview of myReviewList\">\n    <h3 class=\"mb-30\">{{myReview?.book_name}}</h3><br>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <blockquote class=\"generic-blockquote\">\n                “{{myReview?.review}}”\n                <input type=\"text\" class=\"form-control\" name=\"review\" [(ngModel)]='reviewValue' id=\"review\" placeholder=\"Update Review\"><br>&nbsp;&nbsp;\n                <button class=\"btn topBadge\" (click)=\"updateReview(reviewValue, myReview?.book, myReview?.id)\">Update</button>&nbsp;&nbsp;\n                <button class=\"btn deleteBadge\" (click)=\"deleteReview(myReview?.id)\">Delete</button>\n            </blockquote>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark sticky-top materialnav mycolor\" *ngIf=\"isLoggedIn()\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button> &nbsp;&nbsp;&nbsp;&nbsp;\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Books Catalogue</a>\n            </li>&nbsp;&nbsp;&nbsp;&nbsp;\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/categories\" routerLinkActive=\"active\">Categories</a>\n            </li>&nbsp;&nbsp;&nbsp;&nbsp;\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/authors\" routerLinkActive=\"active\">Authors</a>\n            </li>\n        </ul>\n\n        <ul class=\"justify-content-end navbar-nav\">\n            <li class=\"nav-item dropdown active\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <strong>{{getUser()}}</strong>&nbsp;&nbsp;<i class=\"fas fa-user-circle\"></i>\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <button class=\"dropdown-item\" (click)=\"logout()\">Logout</button>\n                    <div class=\"dropdown-divider\"></div>\n                    <button class=\"dropdown-item\" (click)=\"userProfile()\">My Profile</button>\n                    <button class=\"dropdown-item\" (click)=\"userReview()\">My Reviews</button>\n                </div>\n            </li>\n        </ul>\n\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/passwordReset/passwordreset.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/passwordReset/passwordreset.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <div>\n                <h1><strong>Password Reset</strong></h1>\n                <h4>Enter Your New Password</h4><br>\n                <form [formGroup]=\"passwordResetForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\" required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Enter Password Again\" required />\n                    </div><br>\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!passwordResetForm.valid\" class=\"btn btnSubmit\"><span style=\"font-size: 20px;\">Submit</span></button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-6 login-form-2\">\n            <div>\n                <h1 class=\"text-xs-center\"><strong>Tips !</strong></h1><br>\n                <div class=\"form-group\">\n                    <font size=\"4\">New Password Should Contain An Uppercase Letter, Lowercase Letter And A Number.</font>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>My Profile</strong>\n                </h1>\n                <a class=\"btn topBadge\" routerLink=\"/changepassword\" routerLinkActive=\"active\">Change Password</a>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"userBookList?.length === 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">Books You Read Will Appear Here!</h1>\n            <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"row d-flex justify-content-center\" *ngIf=\"userBookList?.length > 0\">\n    <div class=\"menu-content pb-60 col-lg-8\">\n        <div class=\"title text-center\">\n            <h1 class=\"mb-10\">Readed Books So Far!</h1>\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"container\">\n    <div class=\"row mb-2\">\n        <div class=\"col-md-6\" *ngFor=\"let userBook of userBookList\">\n            <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n                <div class=\"card-body d-flex flex-column align-items-start\">\n                    <strong class=\"d-inline-block mb-2 text-primary h1\">{{userBook?.book.name}}</strong>\n                    <h3 class=\"mb-0\">\n                        <p class=\"text-dark\">Category: {{userBook?.book.category.name}}</p>\n                    </h3>\n                    <div class=\"mb-1 text-muted\" *ngFor=\"let author of userBook?.book.author\">Author: {{author.name}}</div><br>\n                    <span class=\"badge badge-pill badge-warning\">Percent Readed {{userBook?.percent}}</span><br>\n                    <button type=\"button\" class=\"btn detailButton\" (click)=bookDetail(userBook?.book.id)>Book Details</button>\n                </div>\n                <img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Thumbnail [200x250]\" style=\"width: 200px; height: 250px;\" src=\"{{userBook?.book.book_cover}}\" data-holder-rendered=\"true\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/readBook/readbook.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/readBook/readbook.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<section class=\"topbanner\" id=\"dashboard\">\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"col-lg-7\">\n                <h1 class=\"text-uppercase display-4\">\n                    <strong>{{bookContent?.name}}</strong>\n                </h1>\n                <a class=\"btn topBadge\" routerLink=\"/bookdetail/{{bookContent?.id}}\" routerLinkActive=\"active\">Book Detail</a>\n            </div>\n            <div class=\"col-lg-5 banner-right\">\n                <img class=\"img-fluid\" src=\"../../../assets/img/header-img.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<br>\n\n<!-- Start PDF Area -->\n<section class=\"about-generic-area section-gap\">\n    <div class=\"container border-top-generic\">\n        <div class=\"justify-content-center container\">\n            <pdf-viewer [src]=\"bookContent?.file\" [render-text]=\"true\" (after-load-complete)=\"afterLoadComplete($event)\" [show-all]=\"false\" [page]=\"currentPage\" [original-size]=\"false\" style=\"display: block;\"></pdf-viewer>\n        </div>\n    </div>\n    <div class=\"col-md-12 text-center btn-group\" role=\"group\">\n        <button type=\"button\" (click)=\"previousPage()\" [disabled]=\"currentPage === 1\" class=\"btn topBadge\">\n      <<</button> <button type=\"button\" class=\"btn btn-detailButton\">{{ currentPage }} / {{ totalPages }}\n    </button>\n        <button type=\"button\" (click)=\"nextPage()\" [disabled]=\"totalPages === currentPage\" class=\"btn topBadge\">>></button>\n    </div>\n</section><br>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <div>\n                <h1><strong>Sign Up</strong></h1>\n                <h4>Sign Up For A New Account</h4><br>\n                <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-user icon\"></i></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-id-card\"></i></span>\n                        </div>\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\" required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Enter Password Again\" required />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!signUpForm.valid\" class=\"btnSubmit\"><span style=\"font-size: 20px;\">Sign Up</span></button>\n                    </div>\n                    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"statusMessage\">\n                        {{statusMessage}}\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-6 login-form-2\">\n            <div>\n                <h1 class=\"text-xs-center\">Login</h1>\n                <div class=\"form-group\">\n                    <font size=\"4\">Join us today to read your favorite books !</font>\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btnSubmit text-xs-center\" routerLink=\"/login\" routerLinkActive=\"active\"><span style=\"font-size: 20px;\">Login</span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/updatePassword/updatepassword.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/updatePassword/updatepassword.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 login-form-1\">\n            <div>\n                <h1><strong>Change Password</strong></h1>\n                <h4>Enter Your New Password</h4><br>\n                <form [formGroup]=\"passwordUpdateForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"current_password\" placeholder=\"Enter Current Password\"  required />\n                    </div>\n\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"new_password\" placeholder=\"Enter New Password\" required />\n                    </div>\n    \n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Enter Password Again\" required />\n                    </div><br>\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!passwordUpdateForm.valid\" class=\"btn btnSubmit\"><span style=\"font-size: 20px;\">Submit</span></button>\n                    </div>\n                    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"statusMessage\">\n                        {{statusMessage}}\n                      </div>                            \n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-6 login-form-2\">\n            <div>\n                <h1 class=\"text-xs-center\"><strong>Tips !</strong></h1><br>\n                <div class=\"form-group\">\n                    <font size=\"4\">New Password Should Contain An Uppercase Letter, Lowercase Letter And A Number.</font>\n                </div><br>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btnSubmit text-xs-center\" routerLink=\"/profile\" routerLinkActive=\"active\"><span style=\"font-size: 20px;\">My Profile</span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/can-activate-route.guard */ "./src/app/guards/can-activate-route.guard.ts");
/* harmony import */ var _components_bookDetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bookDetail/bookdetail.component */ "./src/app/components/bookDetail/bookdetail.component.ts");
/* harmony import */ var _components_author_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/author/author.component */ "./src/app/components/author/author.component.ts");
/* harmony import */ var _components_authorDetail_authordetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/authorDetail/authordetail.component */ "./src/app/components/authorDetail/authordetail.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_categoryDetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/categoryDetail/categorydetail.component */ "./src/app/components/categoryDetail/categorydetail.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_forgetPassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/forgetPassword/forgetpassword.component */ "./src/app/components/forgetPassword/forgetpassword.component.ts");
/* harmony import */ var _components_passwordReset_passwordreset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/passwordReset/passwordreset.component */ "./src/app/components/passwordReset/passwordreset.component.ts");
/* harmony import */ var _components_accountConfirmation_accountconfirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/accountConfirmation/accountconfirmation.component */ "./src/app/components/accountConfirmation/accountconfirmation.component.ts");
/* harmony import */ var _components_readBook_readbook_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/readBook/readbook.component */ "./src/app/components/readBook/readbook.component.ts");
/* harmony import */ var _components_updatePassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/updatePassword/updatepassword.component */ "./src/app/components/updatePassword/updatepassword.component.ts");
/* harmony import */ var _components_myReviews_myreviews_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/myReviews/myreviews.component */ "./src/app/components/myReviews/myreviews.component.ts");



















const routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'accountconfirmation', component: _components_accountConfirmation_accountconfirmation_component__WEBPACK_IMPORTED_MODULE_15__["AccountconfirmationComponent"] },
    { path: 'forgetpassword', component: _components_forgetPassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpasswordComponent"] },
    { path: 'passwordreset/:id', component: _components_passwordReset_passwordreset_component__WEBPACK_IMPORTED_MODULE_14__["PasswordresetComponent"] },
    { path: 'changepassword', component: _components_updatePassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_17__["UpdatepasswordComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'myreviews', component: _components_myReviews_myreviews_component__WEBPACK_IMPORTED_MODULE_18__["MyreviewsComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'bookdetail/:id', component: _components_bookDetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_7__["BookdetailComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'readbook/:id', component: _components_readBook_readbook_component__WEBPACK_IMPORTED_MODULE_16__["ReadbookComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'authors', component: _components_author_author_component__WEBPACK_IMPORTED_MODULE_8__["AuthorComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'authordetail/:id', component: _components_authorDetail_authordetail_component__WEBPACK_IMPORTED_MODULE_9__["AuthordetailComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'categories', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: 'categorydetail/:id', component: _components_categoryDetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_11__["CategorydetailComponent"], canActivate: [_guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateRouteGuard"]] },
    { path: '**', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'library-management-client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/can-activate-route.guard */ "./src/app/guards/can-activate-route.guard.ts");
/* harmony import */ var _shared_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptor */ "./src/app/shared/interceptor.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_bookDetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bookDetail/bookdetail.component */ "./src/app/components/bookDetail/bookdetail.component.ts");
/* harmony import */ var _components_author_author_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/author/author.component */ "./src/app/components/author/author.component.ts");
/* harmony import */ var _components_authorDetail_authordetail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/authorDetail/authordetail.component */ "./src/app/components/authorDetail/authordetail.component.ts");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _components_categoryDetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/categoryDetail/categorydetail.component */ "./src/app/components/categoryDetail/categorydetail.component.ts");
/* harmony import */ var _components_forgetPassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forgetPassword/forgetpassword.component */ "./src/app/components/forgetPassword/forgetpassword.component.ts");
/* harmony import */ var _components_passwordReset_passwordreset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/passwordReset/passwordreset.component */ "./src/app/components/passwordReset/passwordreset.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_accountConfirmation_accountconfirmation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/accountConfirmation/accountconfirmation.component */ "./src/app/components/accountConfirmation/accountconfirmation.component.ts");
/* harmony import */ var _components_readBook_readbook_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/readBook/readbook.component */ "./src/app/components/readBook/readbook.component.ts");
/* harmony import */ var _components_updatePassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/updatePassword/updatepassword.component */ "./src/app/components/updatePassword/updatepassword.component.ts");
/* harmony import */ var _components_myReviews_myreviews_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/myReviews/myreviews.component */ "./src/app/components/myReviews/myreviews.component.ts");
































const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"]('386064084837-c0106l6ne79veah90merfsi3mj66caac.apps.googleusercontent.com')
    }
]);
function provideConfig() {
    return config;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _components_bookDetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_18__["BookdetailComponent"],
            _components_author_author_component__WEBPACK_IMPORTED_MODULE_19__["AuthorComponent"],
            _components_authorDetail_authordetail_component__WEBPACK_IMPORTED_MODULE_20__["AuthordetailComponent"],
            _components_categoryDetail_categorydetail_component__WEBPACK_IMPORTED_MODULE_22__["CategorydetailComponent"],
            _components_forgetPassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_23__["ForgetpasswordComponent"],
            _components_passwordReset_passwordreset_component__WEBPACK_IMPORTED_MODULE_24__["PasswordresetComponent"],
            _components_category_category_component__WEBPACK_IMPORTED_MODULE_25__["CategoryComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
            _components_accountConfirmation_accountconfirmation_component__WEBPACK_IMPORTED_MODULE_27__["AccountconfirmationComponent"],
            _components_readBook_readbook_component__WEBPACK_IMPORTED_MODULE_28__["ReadbookComponent"],
            _components_updatePassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_29__["UpdatepasswordComponent"],
            _components_myReviews_myreviews_component__WEBPACK_IMPORTED_MODULE_30__["MyreviewsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialLoginModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfViewerModule"]
        ],
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _services_book_service__WEBPACK_IMPORTED_MODULE_15__["BookService"], _services_author_service__WEBPACK_IMPORTED_MODULE_21__["AuthorService"], _guards_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_13__["CanActivateRouteGuard"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _shared_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
                multi: true
            }, {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"],
                useFactory: provideConfig
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/accountConfirmation/accountconfirmation.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/accountConfirmation/accountconfirmation.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.login-form-1 {\n    padding: 4.5%;\n    height: 400px;\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-1 {\n    text-align: left;\n    color: #333;\n}\n\n.login-form-1 input[type=text],\ninput[type=password] {\n    height: 50px;\n}\n\n.login-form-2 {\n    padding: 4.5%;\n    height: 400px;\n    background-image: -webkit-linear-gradient(90deg, #007bff 0%, #28ADDA 100%);\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-2 {\n    text-align: center;\n    color: #FFFFFF;\n}\n\n/* .login-container form{\n    padding: 10%;\n} */\n\n.btnSubmit {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 2%;\n    border: none;\n    cursor: pointer;\n}\n\n.login-form-1 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-image: -webkit-linear-gradient(90deg, #007bff 0%, #28ADDA 100%);\n}\n\n.login-form-2 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-color: #1D8AB0;\n}\n\n.login-form-1 .ForgetPwd {\n    background-image: -webkit-linear-gradient(90deg, #007bff 0%, #28ADDA 100%);\n    font-weight: 600;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50Q29uZmlybWF0aW9uL2FjY291bnRjb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEVBQTBFO0lBQzFFLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUdBOztHQUVHOztBQUVIO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYiwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwRUFBMEU7SUFDMUUsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudENvbmZpcm1hdGlvbi9hY2NvdW50Y29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmxvZ2luLWZvcm0tMSB7XG4gICAgcGFkZGluZzogNC41JTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5sb2dpbi1mb3JtLTEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5sb2dpbi1mb3JtLTEgaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dpbi1mb3JtLTIge1xuICAgIHBhZGRpbmc6IDQuNSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwN2JmZiAwJSwgIzI4QUREQSAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubG9naW4tZm9ybS0yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cblxuLyogLmxvZ2luLWNvbnRhaW5lciBmb3Jte1xuICAgIHBhZGRpbmc6IDEwJTtcbn0gKi9cblxuLmJ0blN1Ym1pdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luLWZvcm0tMSAuYnRuU3VibWl0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYgMCUsICMyOEFEREEgMTAwJSk7XG59XG5cbi5sb2dpbi1mb3JtLTIgLmJ0blN1Ym1pdCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDhBQjA7XG59XG5cbi5sb2dpbi1mb3JtLTEgLkZvcmdldFB3ZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYgMCUsICMyOEFEREEgMTAwJSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/accountConfirmation/accountconfirmation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/accountConfirmation/accountconfirmation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountconfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountconfirmationComponent", function() { return AccountconfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountconfirmationComponent = class AccountconfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountconfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accountconfirmation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accountconfirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accountConfirmation/accountconfirmation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accountconfirmation.component.css */ "./src/app/components/accountConfirmation/accountconfirmation.component.css")).default]
    })
], AccountconfirmationComponent);



/***/ }),

/***/ "./src/app/components/author/author.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/author/author.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    max-width: 50%;\r\n    height: auto;\r\n}\r\n\r\n#mySidenav a {\r\n    position: fixed;\r\n    left: -80px;\r\n    transition: 0.3s;\r\n    padding: 15px;\r\n    width: 100px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: black;\r\n    border-radius: 0 5px 5px 0;\r\n}\r\n\r\n#mySidenav a:hover {\r\n    left: 0;\r\n}\r\n\r\n#create {\r\n    top: 60px;\r\n    background-color: #f4e700;\r\n}\r\n\r\n.detailButton {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n\r\n.topBadge {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyRUFBMkU7SUFDM0Usa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wYmFubmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jbXlTaWRlbmF2IGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTgwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG59XHJcblxyXG4jbXlTaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuI2NyZWF0ZSB7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlNzAwO1xyXG59XHJcblxyXG4uZGV0YWlsQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbi50b3BCYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZGQ5ODIgMTAwJSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/author/author.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/author/author.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AuthorComponent = class AuthorComponent {
    constructor(authorService, router, userService, formBuilder) {
        this.authorService = authorService;
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.createAuthorForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getAllAuthors();
    }
    getAllAuthors() {
        this.authorService.allAuthors().subscribe(data => {
            this.authorList = data;
            this.totalAuthors = this.authorList.length;
        });
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
    authorDetail(authorId) {
        this.router.navigate(['/authordetail/', authorId]);
    }
    createAuthorSubmit() {
        this.authorService.createAuthor(this.createAuthorForm.getRawValue()).subscribe(createSuccess => {
            document.getElementById('closeModal').click();
            this.getAllAuthors();
        });
    }
};
AuthorComponent.ctorParameters = () => [
    { type: _services_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
AuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-author',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./author.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/author/author.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./author.component.css */ "./src/app/components/author/author.component.css")).default]
    })
], AuthorComponent);



/***/ }),

/***/ "./src/app/components/authorDetail/authordetail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/authorDetail/authordetail.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    max-width: 50%;\r\n    height: auto;\r\n}\r\n\r\n#mySidenav a {\r\n    position: fixed;\r\n    left: -80px;\r\n    transition: 0.3s;\r\n    padding: 15px;\r\n    width: 100px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 0 5px 5px 0;\r\n}\r\n\r\n#mySidenav a:hover {\r\n    left: 0;\r\n}\r\n\r\n#update {\r\n    top: 120px;\r\n    background-color: #007bff;\r\n}\r\n\r\n#delete {\r\n    top: 180px;\r\n    background-color: #dc3545;\r\n}\r\n\r\n.detailButton {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n\r\n.topBadge {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JEZXRhaWwvYXV0aG9yZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyRUFBMkU7SUFDM0Usa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aG9yRGV0YWlsL2F1dGhvcmRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGJhbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuI215U2lkZW5hdiBhIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IC04MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxufVxyXG5cclxuI215U2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiN1cGRhdGUge1xyXG4gICAgdG9wOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbiNkZWxldGUge1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5kZXRhaWxCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLnRvcEJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZkZDk4MiAxMDAlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/authorDetail/authordetail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/authorDetail/authordetail.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthordetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthordetailComponent", function() { return AuthordetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let AuthordetailComponent = class AuthordetailComponent {
    constructor(authorService, route, userService, router, formBuilder) {
        this.authorService = authorService;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.updateAuthorForm = this.formBuilder.group({
            name: ['']
        });
    }
    ngOnInit() {
        this.getAuthorDetail();
    }
    getAuthorDetail() {
        this.subscription = this.route.params.subscribe(data => {
            this.authorId = data.id;
            this.authorService.authorDetail(this.authorId).subscribe(authorData => {
                this.author = authorData;
                this.authorService.authorBooks(this.authorId).subscribe(authorBooksdata => this.authorBookList = authorBooksdata);
            });
        });
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
    bookDetail(bookId) {
        this.router.navigate(['/bookdetail/', bookId]);
    }
    updateAuthor() {
        this.updateAuthorForm.patchValue({
            name: this.author.name
        });
    }
    updateAuthorSubmit(authorId) {
        this.authorService.updateAuthor(this.updateAuthorForm.getRawValue(), authorId).subscribe(updateSucces => {
            document.getElementById('closeModal').click();
            this.getAuthorDetail();
        });
    }
    deleteAuthor(authorId) {
        this.authorService.deleteAuthor(authorId).subscribe(deleteSuccess => this.router.navigate(['/authors']));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AuthordetailComponent.ctorParameters = () => [
    { type: _services_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AuthordetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authordetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authordetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorDetail/authordetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authordetail.component.css */ "./src/app/components/authorDetail/authordetail.component.css")).default]
    })
], AuthordetailComponent);



/***/ }),

/***/ "./src/app/components/bookDetail/bookdetail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/bookDetail/bookdetail.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    text-align: center;\n}\n\n.headerImg {\n    max-width: 50%;\n    height: auto;\n}\n\n.bookImg {\n    max-width: 60%;\n    max-height: 100%;\n}\n\n#mySidenav a {\n    position: fixed;\n    /* Position them relative to the browser window */\n    left: -80px;\n    /* Position them outside of the screen */\n    transition: 0.3s;\n    /* Add transition on hover */\n    padding: 15px;\n    /* 15px padding */\n    width: 100px;\n    /* Set a specific width */\n    text-decoration: none;\n    /* Remove underline */\n    font-size: 20px;\n    /* Increase font size */\n    color: black;\n    /* White text color */\n    border-radius: 0 5px 5px 0;\n    /* Rounded corners on the top right and bottom right side */\n}\n\n#mySidenav a:hover {\n    left: 0;\n}\n\n#update {\n    top: 120px;\n    background-color: #007bff;\n}\n\n#delete {\n    top: 180px;\n    background-color: #dc3545;\n}\n\n#updateBookCover {\n    top: 240px;\n    background-color: #28a745;\n}\n\n#updateBookPdf {\n    top: 330px;\n    background-color: #f4e700;\n}\n\n.section-top-border {\n    padding: 70px 0;\n    border-top: 1px dotted #eee;\n}\n\n.generic-blockquote {\n    padding: 30px 50px 30px 30px;\n    background: #f9f9ff;\n    border-left: 2px solid #f53f51;\n}\n\n.detailButton {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    border: none;\n    border-radius: 40px;\n}\n\n.topBadge {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\n    border: none;\n    border-radius: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rRGV0YWlsL2Jvb2tkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJFQUEyRTtJQUMzRSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29rRGV0YWlsL2Jvb2tkZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BiYW5uZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJJbWcge1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmJvb2tJbWcge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbiNteVNpZGVuYXYgYSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8qIFBvc2l0aW9uIHRoZW0gcmVsYXRpdmUgdG8gdGhlIGJyb3dzZXIgd2luZG93ICovXG4gICAgbGVmdDogLTgwcHg7XG4gICAgLyogUG9zaXRpb24gdGhlbSBvdXRzaWRlIG9mIHRoZSBzY3JlZW4gKi9cbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIC8qIEFkZCB0cmFuc2l0aW9uIG9uIGhvdmVyICovXG4gICAgcGFkZGluZzogMTVweDtcbiAgICAvKiAxNXB4IHBhZGRpbmcgKi9cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgLyogU2V0IGEgc3BlY2lmaWMgd2lkdGggKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLyogUmVtb3ZlIHVuZGVybGluZSAqL1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgIC8qIFJvdW5kZWQgY29ybmVycyBvbiB0aGUgdG9wIHJpZ2h0IGFuZCBib3R0b20gcmlnaHQgc2lkZSAqL1xufVxuXG4jbXlTaWRlbmF2IGE6aG92ZXIge1xuICAgIGxlZnQ6IDA7XG59XG5cbiN1cGRhdGUge1xuICAgIHRvcDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cblxuI2RlbGV0ZSB7XG4gICAgdG9wOiAxODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG4jdXBkYXRlQm9va0NvdmVyIHtcbiAgICB0b3A6IDI0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG59XG5cbiN1cGRhdGVCb29rUGRmIHtcbiAgICB0b3A6IDMzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGU3MDA7XG59XG5cbi5zZWN0aW9uLXRvcC1ib3JkZXIge1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNlZWU7XG59XG5cbi5nZW5lcmljLWJsb2NrcXVvdGUge1xuICAgIHBhZGRpbmc6IDMwcHggNTBweCAzMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmZjtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmNTNmNTE7XG59XG5cbi5kZXRhaWxCdXR0b24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLnRvcEJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZGQ5ODIgMTAwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/bookDetail/bookdetail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/bookDetail/bookdetail.component.ts ***!
  \***************************************************************/
/*! exports provided: BookdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailComponent", function() { return BookdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");







let BookdetailComponent = class BookdetailComponent {
    constructor(route, router, userService, bookService, authorService, formBuilder) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.bookService = bookService;
        this.authorService = authorService;
        this.formBuilder = formBuilder;
        this.filesToUpload = [];
        this.updateBookForm = this.formBuilder.group({
            name: [''],
            category: [''],
            author: [''],
            reviews: [''],
            description: ['']
        });
        this.uploadBookCover = this.formBuilder.group({
            book_cover: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.pdfToUpload = [];
        this.uploadBookPdf = this.formBuilder.group({
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getBook();
    }
    getBook() {
        this.subscription = this.route.params.subscribe(bookData => {
            this.bookId = bookData.id;
            this.bookService.bookDetail(this.bookId).subscribe(data => {
                this.bookInfo = data,
                    this.canReviewStatus = this.bookInfo.can_review;
                this.authorService.allAuthors().subscribe(authorData => {
                    this.authorList = authorData;
                    this.bookService.allCategories().subscribe(categoryData => this.categoryList = categoryData);
                });
            });
        });
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
    canReviewBook() {
        if (this.canReviewStatus === true) {
            return true;
        }
        else {
            return false;
        }
    }
    reviewBook(userReview, bookId) {
        this.userId = Number(localStorage.getItem('Alias'));
        this.reviewData = { reader: this.userId, review: userReview, book: bookId };
        this.bookService.bookReview(this.reviewData).subscribe(reviewSuccess => {
            this.getBook();
        });
    }
    readBook(bookId) {
        this.router.navigate(['/readbook/', bookId]);
    }
    updateBook(bookId) {
        this.bookInfo.author.forEach(element => {
            this.authorId = element.id;
        });
        this.updateBookForm.patchValue({
            name: this.bookInfo.name,
            category: this.bookInfo.category.id,
            author: [this.authorId],
            description: this.bookInfo.description,
            reviews: this.bookInfo.reviews
        });
    }
    updateBookSubmit(bookId) {
        this.updateBookData = this.updateBookForm.getRawValue();
        this.updateBookData.category = (this.updateBookData.category);
        this.updateBookData.author = [Number(this.updateBookData.author)];
        this.bookService.updateBook(this.updateBookData, bookId).subscribe(updateSuccess => {
            document.getElementById('closeModalUpdate').click();
            this.getBook();
        });
    }
    deleteBook(bookId) {
        this.bookService.deleteBook(bookId).subscribe(deleteSuccess => this.router.navigate(['/dashboard']));
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    updateBookCover(bookId) {
        const formData = new FormData();
        const files = this.filesToUpload;
        const name = 'name';
        formData.append('book_cover', files[0], files[0][name]);
        formData.append('book_cover', [files[0]]);
        this.bookService.updateBook(formData, bookId).subscribe(updateCoverSuccess => {
            document.getElementById('closeModal').click();
            this.getBook();
        });
    }
    updatePdfEvent(fileInput) {
        this.pdfToUpload = fileInput.target.files;
    }
    updatePdf(bookId) {
        const formData = new FormData();
        const files = this.pdfToUpload;
        formData.append('file', files[0]);
        this.bookService.updateBook(formData, bookId).subscribe(updatePdfSuccess => {
            document.getElementById('closeModalPdf').click();
            this.getBook();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
BookdetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: src_app_services_author_service__WEBPACK_IMPORTED_MODULE_5__["AuthorService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
BookdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bookDetail/bookdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookdetail.component.css */ "./src/app/components/bookDetail/bookdetail.component.css")).default]
    })
], BookdetailComponent);



/***/ }),

/***/ "./src/app/components/category/category.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/category/category.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    max-width: 50%;\r\n    height: auto;\r\n}\r\n\r\n#mySidenav a {\r\n    position: fixed;\r\n    left: -80px;\r\n    transition: 0.3s;\r\n    padding: 15px;\r\n    width: 100px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: black;\r\n    border-radius: 0 5px 5px 0;\r\n}\r\n\r\n#mySidenav a:hover {\r\n    left: 0;\r\n}\r\n\r\n#create {\r\n    top: 60px;\r\n    background-color: #f4e700;\r\n}\r\n\r\n.detailButton {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n\r\n.topBadge {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkVBQTJFO0lBQzNFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BiYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNteVNpZGVuYXYgYSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAtODBweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbn1cclxuXHJcbiNteVNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jY3JlYXRlIHtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGU3MDA7XHJcbn1cclxuXHJcbi5kZXRhaWxCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLnRvcEJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZkZDk4MiAxMDAlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let CategoryComponent = class CategoryComponent {
    constructor(bookService, userService, formBuilder, router) {
        this.bookService = bookService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.createCategoryForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getAllCategories();
    }
    getAllCategories() {
        this.bookService.allCategories().subscribe(data => {
            this.categoryList = data;
            this.totalCategories = this.categoryList.length;
        });
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
    categoryDetail(categoryId) {
        this.router.navigate(['/categorydetail/', categoryId]);
    }
    createCategorySubmit() {
        this.bookService.createCategory(this.createCategoryForm.getRawValue()).subscribe(createSuccess => {
            document.getElementById('closeModal').click();
            this.getAllCategories();
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/components/category/category.component.css")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/components/categoryDetail/categorydetail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/categoryDetail/categorydetail.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    max-width: 50%;\r\n    height: auto;\r\n}\r\n\r\n#mySidenav a {\r\n    position: fixed;\r\n    left: -80px;\r\n    transition: 0.3s;\r\n    padding: 15px;\r\n    width: 100px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 0 5px 5px 0;\r\n}\r\n\r\n#mySidenav a:hover {\r\n    left: 0;\r\n}\r\n\r\n#update {\r\n    top: 120px;\r\n    background-color: #007bff;\r\n}\r\n\r\n#delete {\r\n    top: 180px;\r\n    background-color: #dc3545;\r\n}\r\n\r\n.detailButton {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n\r\n.topBadge {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeURldGFpbC9jYXRlZ29yeWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkVBQTJFO0lBQzNFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5RGV0YWlsL2NhdGVnb3J5ZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wYmFubmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jbXlTaWRlbmF2IGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTgwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG59XHJcblxyXG4jbXlTaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuI3VwZGF0ZSB7XHJcbiAgICB0b3A6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuI2RlbGV0ZSB7XHJcbiAgICB0b3A6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmRldGFpbEJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4udG9wQmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmRkOTgyIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/categoryDetail/categorydetail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/categoryDetail/categorydetail.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategorydetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorydetailComponent", function() { return CategorydetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let CategorydetailComponent = class CategorydetailComponent {
    constructor(route, router, userService, bookService, formBuilder) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.bookService = bookService;
        this.formBuilder = formBuilder;
        this.updateCategoryForm = this.formBuilder.group({
            name: ['']
        });
    }
    ngOnInit() {
        this.getCategoryDetail();
    }
    getCategoryDetail() {
        this.subscription = this.route.params.subscribe(data => {
            this.categoryId = data.id;
            this.bookService.categoryDetail(this.categoryId).subscribe(categoryData => {
                this.category = categoryData;
                this.bookService.categoryBooks(this.categoryId).subscribe(categoryBooksData => this.categoryBookList = categoryBooksData);
            });
        });
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
    bookDetail(bookId) {
        this.router.navigate(['/bookdetail/', bookId]);
    }
    updateCategory() {
        this.updateCategoryForm.patchValue({
            name: this.category.name
        });
    }
    updateCategorySubmit(categoryId) {
        this.bookService.updateCategory(this.updateCategoryForm.getRawValue(), categoryId).subscribe(updateSuccess => {
            document.getElementById('closeModal').click();
            this.getCategoryDetail();
        });
    }
    deleteCategory(categoryId) {
        this.bookService.deleteCategory(categoryId)
            .subscribe(deleteSucces => this.router.navigate(['/categories']));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
CategorydetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CategorydetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorydetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categorydetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoryDetail/categorydetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categorydetail.component.css */ "./src/app/components/categoryDetail/categorydetail.component.css")).default]
    })
], CategorydetailComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    text-align: center;\n}\n\nimg {\n    max-width: 50%;\n    height: auto;\n}\n\n#mySidenav a {\n    position: fixed;\n    /* Position them relative to the browser window */\n    left: -80px;\n    /* Position them outside of the screen */\n    transition: 0.3s;\n    /* Add transition on hover */\n    padding: 15px;\n    /* 15px padding */\n    width: 100px;\n    /* Set a specific width */\n    text-decoration: none;\n    /* Remove underline */\n    font-size: 20px;\n    /* Increase font size */\n    color: black;\n    /* White text color */\n    border-radius: 0 5px 5px 0;\n    /* Rounded corners on the top right and bottom right side */\n}\n\n#mySidenav a:hover {\n    left: 0;\n}\n\n#create {\n    top: 60px;\n    background-color: #f4e700;\n}\n\n.glyphicon {\n    margin-right: 5px;\n}\n\n.thumbnail {\n    margin-bottom: 20px;\n    padding: 0px;\n    border-radius: 0px;\n}\n\n.item.list-group-item {\n    float: none;\n    width: 100%;\n    background-color: #fff;\n    margin-bottom: 10px;\n}\n\n.item.list-group-item:nth-of-type(odd):hover,\n.item.list-group-item:hover {\n    background: #428bca;\n}\n\n.item.list-group-item .list-group-image {\n    margin-right: 10px;\n}\n\n.item.list-group-item .thumbnail {\n    margin-bottom: 0px;\n}\n\n.item.list-group-item .caption {\n    padding: 9px 9px 0px 9px;\n}\n\n.item.list-group-item:nth-of-type(odd) {\n    background: #eeeeee;\n}\n\n.item.list-group-item:before,\n.item.list-group-item:after {\n    display: table;\n    content: \" \";\n}\n\n.item.list-group-item img {\n    float: left;\n}\n\n.item.list-group-item:after {\n    clear: both;\n}\n\n.list-group-item-text {\n    margin: 0 0 11px;\n}\n\n@media (max-width: 800px) {\n    .single-counter {\n        margin-bottom: 30px;\n    }\n}\n\n.single-price {\n    text-align: center;\n    border: 1px solid #eeeeee;\n}\n\n.single-price .price-top {\n    background-color: #fbfcff;\n    border-bottom: 1px solid #eeeeee;\n    padding: 30px 0px;\n}\n\n.single-price .price-bottom {\n    background-color: #f9f9ff;\n    margin: 0 45px 45px 45px;\n    padding: 35px;\n    transition: all 0.3s ease 0s;\n}\n\n.single-price .price-bottom h1 {\n    font-size: 60px;\n    font-weight: 300;\n}\n\n.single-price .price-bottom h1 span {\n    font-size: 25px;\n    margin-top: -14px;\n    position: absolute;\n    margin-left: -20px;\n}\n\n.single-price .price-bottom .primary-btn {\n    margin-top: 20px;\n    background: #222;\n    color: #fff;\n    text-transform: capitalize;\n    transition: all 0.3s ease 0s;\n}\n\n.single-price .price-bottom .primary-btn:hover {\n    border: 1px solid transparent;\n}\n\n@media (max-width: 1280px) {\n    .single-price .price-bottom {\n        margin: 0;\n    }\n}\n\n@media (max-width: 1024px) {\n    .single-price .price-bottom .primary-btn {\n        padding-left: 22px;\n        padding-right: 22px;\n    }\n}\n\n.single-price p {\n    padding: 30px 0px;\n}\n\n.single-price:hover {\n    cursor: pointer;\n}\n\n.single-price:hover .price-bottom h1 {\n    color: #fff;\n}\n\n.single-price:hover .primary-btn {\n    background-color: #ca4829;\n}\n\n@media (max-width: 800px) {\n    .single-price {\n        margin-bottom: 50px;\n    }\n}\n\n.detailButton {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    border: none;\n    border-radius: 40px;\n}\n\n.topBadge {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\n    border: none;\n    border-radius: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyRUFBMkU7SUFDM0Usa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUdaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixhQUFhO0lBSWIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDBCQUEwQjtJQUkxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BiYW5uZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jbXlTaWRlbmF2IGEge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKiBQb3NpdGlvbiB0aGVtIHJlbGF0aXZlIHRvIHRoZSBicm93c2VyIHdpbmRvdyAqL1xuICAgIGxlZnQ6IC04MHB4O1xuICAgIC8qIFBvc2l0aW9uIHRoZW0gb3V0c2lkZSBvZiB0aGUgc2NyZWVuICovXG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAvKiBBZGQgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLyogMTVweCBwYWRkaW5nICovXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIC8qIFNldCBhIHNwZWNpZmljIHdpZHRoICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC8qIFJlbW92ZSB1bmRlcmxpbmUgKi9cbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8qIFdoaXRlIHRleHQgY29sb3IgKi9cbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAvKiBSb3VuZGVkIGNvcm5lcnMgb24gdGhlIHRvcCByaWdodCBhbmQgYm90dG9tIHJpZ2h0IHNpZGUgKi9cbn1cblxuI215U2lkZW5hdiBhOmhvdmVyIHtcbiAgICBsZWZ0OiAwO1xufVxuXG4jY3JlYXRlIHtcbiAgICB0b3A6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTcwMDtcbn1cblxuLmdseXBoaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi50aHVtYm5haWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLml0ZW0ubGlzdC1ncm91cC1pdGVtIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLmxpc3QtZ3JvdXAtaXRlbTpudGgtb2YtdHlwZShvZGQpOmhvdmVyLFxuLml0ZW0ubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI4YmNhO1xufVxuXG4uaXRlbS5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLml0ZW0ubGlzdC1ncm91cC1pdGVtIC50aHVtYm5haWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLml0ZW0ubGlzdC1ncm91cC1pdGVtIC5jYXB0aW9uIHtcbiAgICBwYWRkaW5nOiA5cHggOXB4IDBweCA5cHg7XG59XG5cbi5pdGVtLmxpc3QtZ3JvdXAtaXRlbTpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG4uaXRlbS5saXN0LWdyb3VwLWl0ZW06YmVmb3JlLFxuLml0ZW0ubGlzdC1ncm91cC1pdGVtOmFmdGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjb250ZW50OiBcIiBcIjtcbn1cblxuLml0ZW0ubGlzdC1ncm91cC1pdGVtIGltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pdGVtLmxpc3QtZ3JvdXAtaXRlbTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gICAgbWFyZ2luOiAwIDAgMTFweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnNpbmdsZS1jb3VudGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG59XG5cbi5zaW5nbGUtcHJpY2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG4uc2luZ2xlLXByaWNlIC5wcmljZS10b3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZjZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG59XG5cbi5zaW5nbGUtcHJpY2UgLnByaWNlLWJvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmZjtcbiAgICBtYXJnaW46IDAgNDVweCA0NXB4IDQ1cHg7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLnNpbmdsZS1wcmljZSAucHJpY2UtYm90dG9tIGgxIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnNpbmdsZS1wcmljZSAucHJpY2UtYm90dG9tIGgxIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4uc2luZ2xlLXByaWNlIC5wcmljZS1ib3R0b20gLnByaW1hcnktYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi5zaW5nbGUtcHJpY2UgLnByaWNlLWJvdHRvbSAucHJpbWFyeS1idG46aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLnNpbmdsZS1wcmljZSAucHJpY2UtYm90dG9tIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5zaW5nbGUtcHJpY2UgLnByaWNlLWJvdHRvbSAucHJpbWFyeS1idG4ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XG4gICAgfVxufVxuXG4uc2luZ2xlLXByaWNlIHAge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xufVxuXG4uc2luZ2xlLXByaWNlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW5nbGUtcHJpY2U6aG92ZXIgLnByaWNlLWJvdHRvbSBoMSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zaW5nbGUtcHJpY2U6aG92ZXIgLnByaW1hcnktYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E0ODI5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuc2luZ2xlLXByaWNlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG59XG5cbi5kZXRhaWxCdXR0b24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLnRvcEJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZGQ5ODIgMTAwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");







let DashboardComponent = class DashboardComponent {
    constructor(router, formBuilder, userService, authorService, bookService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authorService = authorService;
        this.bookService = bookService;
        this.filesToUpload = [];
        this.pdfToUpload = [];
    }
    ngOnInit() {
        this.initForm();
        this.getAllBooks();
    }
    initForm() {
        this.createBookForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            book_cover: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    getAllBooks() {
        this.bookService.bookCatalogue().subscribe(booksData => this.updateBookList(booksData));
    }
    updateBookList(booksData) {
        this.bookList = booksData.data;
        this.previousPage = booksData.meta.previous;
        this.nextPage = booksData.meta.next;
        this.totalBooks = booksData.meta.totalRecords;
        this.authorService.allAuthors().subscribe(authorData => {
            this.authorList = authorData;
            this.bookService.allCategories().subscribe(categoryData => this.categoryList = categoryData);
        });
    }
    previous() {
        this.bookService.paginatedBooks(this.previousPage)
            .subscribe(previousSuccess => this.updateBookList(previousSuccess));
    }
    next() {
        this.bookService.paginatedBooks(this.nextPage)
            .subscribe(nextSuccess => this.updateBookList(nextSuccess));
    }
    bookDetail(bookId) {
        this.router.navigate(['/bookdetail/', bookId]);
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    pdfUploadEvent(fileInput) {
        this.pdfToUpload = fileInput.target.files;
    }
    createBookSubmit() {
        const formData = new FormData();
        this.newBookData = this.createBookForm.getRawValue();
        const files = this.filesToUpload;
        const pdf = this.pdfToUpload;
        Object.keys(this.createBookForm.value).forEach((key) => {
            if (key === 'book_cover') {
                formData.append('book_cover', files[0]);
            }
            else if (key === 'file') {
                formData.append('file', pdf[0]);
            }
            else {
                formData.append(key, this.newBookData[key]);
            }
        });
        this.bookService.createBook(formData).subscribe(createSuccess => {
            document.getElementById('closeModal').click();
            this.createMessage = 'Book Created Succesfully !';
            this.initForm();
            this.getAllBooks();
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_author_service__WEBPACK_IMPORTED_MODULE_6__["AuthorService"] },
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-area {\r\n    padding-top: 100px;\r\n    background-color: #222222;\r\n}\r\n\r\n.wrapper {\r\n    text-align: center;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    top: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1hcmVhIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/forgetPassword/forgetpassword.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/forgetPassword/forgetpassword.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn:disabled {\n    opacity: .50;\n}\n\n.login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.login-form-1 {\n    padding: 4.5%;\n    height: 400px;\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-1 {\n    text-align: left;\n    color: #333;\n}\n\n.login-form-1 input[type=text],\ninput[type=password] {\n    height: 50px;\n}\n\n.login-form-2 {\n    padding: 4.5%;\n    height: 400px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-2 {\n    text-align: center;\n    color: #FFFFFF;\n}\n\n.btnSubmit {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 2%;\n    border: none;\n    cursor: pointer;\n}\n\n.login-form-1 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n}\n\n.login-form-2 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-color: #1D8AB0;\n}\n\n.login-form-1 .ForgetPwd {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    font-weight: 600;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JnZXRQYXNzd29yZC9mb3JnZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkVBQTJFO0lBQzNFLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYiwyRUFBMkU7QUFDL0U7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ2V0UGFzc3dvcmQvZm9yZ2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG46ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IC41MDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5sb2dpbi1mb3JtLTEge1xuICAgIHBhZGRpbmc6IDQuNSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubG9naW4tZm9ybS0xIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubG9naW4tZm9ybS0xIGlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9naW4tZm9ybS0yIHtcbiAgICBwYWRkaW5nOiA0LjUlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5sb2dpbi1mb3JtLTIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luLWZvcm0tMSAuYnRuU3VibWl0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xufVxuXG4ubG9naW4tZm9ybS0yIC5idG5TdWJtaXQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQ4QUIwO1xufVxuXG4ubG9naW4tZm9ybS0xIC5Gb3JnZXRQd2Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/forgetPassword/forgetpassword.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/forgetPassword/forgetpassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: ForgetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function() { return ForgetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForgetpasswordComponent = class ForgetpasswordComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.forgetPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.userService.forgetPassword(this.forgetPasswordForm.getRawValue()).subscribe(forgetSuccess => {
            this.statusMessage = forgetSuccess.message;
        });
    }
};
ForgetpasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ForgetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgetpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgetpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgetPassword/forgetpassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgetpassword.component.css */ "./src/app/components/forgetPassword/forgetpassword.component.css")).default]
    })
], ForgetpasswordComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn:disabled {\n    opacity: .50;\n}\n\n.login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.login-form-1 {\n    padding: 4.5%;\n    height: 450px;\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-1 {\n    text-align: left;\n    color: #333;\n}\n\n.login-form-1 input[type=text],\ninput[type=password] {\n    height: 50px;\n}\n\n.login-form-2 {\n    padding: 4.5%;\n    height: 450px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-2 {\n    text-align: center;\n    color: #FFFFFF;\n}\n\n.btnSubmit {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 1%;\n    border: none;\n    background: transparent;\n    cursor: pointer;\n}\n\n.login-form-1 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n}\n\n.login-form-2 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-color: #ff634d;\n}\n\n.login-form-1 .ForgetPwd {\n    color: #ff634d;\n    font-weight: 600;\n    text-decoration: none;\n}\n\n.facebook {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 1%;\n    border: none;\n    cursor: pointer;\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-color: #3b5998;\n}\n\n.google-button {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 1%;\n    border: none;\n    cursor: pointer;\n    font-weight: 600;\n    padding: 10px;\n    background: white;\n    color: #737373;\n    white-space: nowrap;\n    box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);\n    transition-property: background-color, box-shadow;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n}\n\n.google-button:focus,\n.google-button:hover {\n    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);\n}\n\n.google-button:active {\n    background-color: #e5e5e5;\n    box-shadow: none;\n    transition-duration: 10ms;\n}\n\n.google-button__icon {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 8px 0 8px 8px;\n    width: 18px;\n    height: 18px;\n    box-sizing: border-box;\n}\n\n.google-button__icon--plus {\n    width: 27px;\n}\n\n.google-button__text {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 0 24px;\n    font-size: 14px;\n    font-weight: bold;\n    font-family: 'Roboto', arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkVBQTJFO0lBQzNFLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkVBQTJFO0FBQy9FOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsaURBQWlEO0lBQ2pELDBCQUEwQjtJQUMxQix1Q0FBdUM7QUFDM0M7O0FBRUE7O0lBRUksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0NBQXdDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogLjUwO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmxvZ2luLWZvcm0tMSB7XG4gICAgcGFkZGluZzogNC41JTtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5sb2dpbi1mb3JtLTEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5sb2dpbi1mb3JtLTEgaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dpbi1mb3JtLTIge1xuICAgIHBhZGRpbmc6IDQuNSU7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmxvZ2luLWZvcm0tMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYnRuU3VibWl0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4tZm9ybS0xIC5idG5TdWJtaXQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XG59XG5cbi5sb2dpbi1mb3JtLTIgLmJ0blN1Ym1pdCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNGQ7XG59XG5cbi5sb2dpbi1mb3JtLTEgLkZvcmdldFB3ZCB7XG4gICAgY29sb3I6ICNmZjYzNGQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYWNlYm9vayB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gICAgcGFkZGluZzogMSU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cblxuLmdvb2dsZS1idXR0b24ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICAgIHBhZGRpbmc6IDElO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi5nb29nbGUtYnV0dG9uOmZvY3VzLFxuLmdvb2dsZS1idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5nb29nbGUtYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwbXM7XG59XG5cbi5nb29nbGUtYnV0dG9uX19pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDhweCAwIDhweCA4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5nb29nbGUtYnV0dG9uX19pY29uLS1wbHVzIHtcbiAgICB3aWR0aDogMjdweDtcbn1cblxuLmdvb2dsZS1idXR0b25fX3RleHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBhcmlhbCwgc2Fucy1zZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, route, userService, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.authService = authService;
        this.loginForm = this.formBuilder.group({
            email_or_username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (this.loggedIn) {
                this.userService.socialLogin(this.user).subscribe(socialSuccess => {
                    this.userService.setStore('Token', socialSuccess.token);
                    this.userService.setStore('User', socialSuccess.username);
                    this.userService.setStore('Alias', socialSuccess.user_id);
                    this.userService.setStore('Mccain', socialSuccess.is_admin);
                    this.userService.setStore('Social', socialSuccess.authToken);
                    this.router.navigate(['/dashboard']);
                });
            }
            else if (this.userService.isLoggedIn) {
                this.router.navigate(['/dashboard']);
            }
        });
        this.route.queryParams
            .subscribe(params => this.return = params.return || '');
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    onSubmit() {
        this.userService.login(this.loginForm.value).subscribe(data => {
            this.userService.setStore('Token', data.token);
            this.userService.setStore('User', data.username);
            this.userService.setStore('Alias', data.user_id);
            this.userService.setStore('Mccain', data.is_admin);
            this.router.navigate(['/dashboard']);
        }, error => {
            this.errorMessage = 'Your Username, Email or Password Is Invalid';
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/myReviews/myreviews.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/myReviews/myreviews.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    text-align: center;\n}\n\nimg {\n    max-width: 50%;\n    height: auto;\n}\n\n.section-top-border {\n    padding: 70px 0;\n    border-top: 1px dotted #eee;\n}\n\n.generic-blockquote {\n    padding: 30px 50px 30px 30px;\n    background: #f9f9ff;\n    border-left: 2px solid #f53f51;\n}\n\n.detailButton {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    border: none;\n    border-radius: 40px;\n}\n\n.topBadge {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\n    border: none;\n    border-radius: 40px;\n}\n\n.deleteBadge {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #dc3545 100%);\n    border: none;\n    border-radius: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teVJldmlld3MvbXlyZXZpZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyRUFBMkU7SUFDM0Usa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215UmV2aWV3cy9teXJldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BiYW5uZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2VjdGlvbi10b3AtYm9yZGVyIHtcbiAgICBwYWRkaW5nOiA3MHB4IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjZWVlO1xufVxuXG4uZ2VuZXJpYy1ibG9ja3F1b3RlIHtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHggMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmOWY5ZmY7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZjUzZjUxO1xufVxuXG4uZGV0YWlsQnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi50b3BCYWRnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmRkOTgyIDEwMCUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4uZGVsZXRlQmFkZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2RjMzU0NSAxMDAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/myReviews/myreviews.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/myReviews/myreviews.component.ts ***!
  \*************************************************************/
/*! exports provided: MyreviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreviewsComponent", function() { return MyreviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");



let MyreviewsComponent = class MyreviewsComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.getUserReview();
    }
    getUserReview() {
        this.userService.userReview().subscribe(userReviewData => this.myReviewList = userReviewData);
    }
    updateReview(userReview, bookId, reviewId) {
        this.userId = Number(localStorage.getItem('Alias'));
        this.reviewData = { reader: this.userId, review: userReview, book: bookId };
        this.userService.updateUserReview(this.reviewData, reviewId).subscribe(updateReviewSuccess => {
            this.getUserReview();
        });
    }
    deleteReview(reviewId) {
        this.userService.deleteUserReview(reviewId).subscribe(deleteSuccess => {
            this.getUserReview();
        });
    }
};
MyreviewsComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
MyreviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myreviews',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myreviews.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/myReviews/myreviews.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myreviews.component.css */ "./src/app/components/myReviews/myreviews.component.css")).default]
    })
], MyreviewsComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mycolor {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyRUFBMkU7QUFDL0UiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");







let NavbarComponent = class NavbarComponent {
    constructor(userService, bookService, authorService, router, authService) {
        this.userService = userService;
        this.bookService = bookService;
        this.authorService = authorService;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.authorService.allAuthors().subscribe(authorData => {
            this.authorList = authorData;
            this.bookService.allCategories().subscribe(categoryData => this.categoryList = categoryData);
        });
    }
    isLoggedIn() {
        return this.userService.isLoggedIn();
    }
    getUser() {
        return this.userService.getStore('User');
    }
    authorDetail(authorId) {
        this.router.navigate(['/authordetail', { author_id: authorId }]);
    }
    categoryDetail(categoryId) {
        this.router.navigate(['/categorydetail', { category_id: categoryId }]);
    }
    logout() {
        this.userService.logout().subscribe(success => {
            this.userService.destroyStore('Token');
            this.userService.destroyStore('User');
            this.userService.destroyStore('Alias');
            this.userService.destroyStore('Admin');
            this.userService.destroyStore('Social');
            this.router.navigate(['']);
        });
    }
    userProfile() {
        this.router.navigate(['/profile']);
    }
    userReview() {
        this.router.navigate(['myreviews']);
    }
    signOut() {
        this.authService.signOut();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"] },
    { type: _services_author_service__WEBPACK_IMPORTED_MODULE_5__["AuthorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/passwordReset/passwordreset.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/passwordReset/passwordreset.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.login-form-1 {\n    padding: 4.5%;\n    height: 450px;\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-1 {\n    text-align: left;\n    color: #333;\n}\n\n.login-form-1 input[type=text],\ninput[type=password] {\n    height: 50px;\n}\n\n.login-form-2 {\n    padding: 4.5%;\n    height: 450px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-2 {\n    text-align: center;\n    color: #FFFFFF;\n}\n\n.btnSubmit {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 2%;\n    border: none;\n    cursor: pointer;\n}\n\n.login-form-1 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n}\n\n.login-form-2 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-color: #ff634d;\n}\n\n.login-form-1 .ForgetPwd {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    font-weight: 600;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZFJlc2V0L3Bhc3N3b3JkcmVzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkVBQTJFO0lBQzNFLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYiwyRUFBMkU7QUFDL0U7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmRSZXNldC9wYXNzd29yZHJlc2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmxvZ2luLWZvcm0tMSB7XG4gICAgcGFkZGluZzogNC41JTtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5sb2dpbi1mb3JtLTEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5sb2dpbi1mb3JtLTEgaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dpbi1mb3JtLTIge1xuICAgIHBhZGRpbmc6IDQuNSU7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmxvZ2luLWZvcm0tMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYnRuU3VibWl0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4tZm9ybS0xIC5idG5TdWJtaXQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XG59XG5cbi5sb2dpbi1mb3JtLTIgLmJ0blN1Ym1pdCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNGQ7XG59XG5cbi5sb2dpbi1mb3JtLTEgLkZvcmdldFB3ZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/passwordReset/passwordreset.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/passwordReset/passwordreset.component.ts ***!
  \*********************************************************************/
/*! exports provided: PasswordresetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetComponent", function() { return PasswordresetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_shared_user_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user.validator */ "./src/app/shared/user.validator.ts");






let PasswordresetComponent = class PasswordresetComponent {
    constructor(formBuilder, userService, router, route) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.passwordResetForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_user_validator__WEBPACK_IMPORTED_MODULE_5__["ValidatePassword"]]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validators: this.passwordValidation });
    }
    ngOnInit() {
        this.token = this.route.snapshot.paramMap.get('id');
    }
    passwordValidation(group) {
        const passwordControl = group.get('password');
        const confirmPasswordControl = group.get('confirmPassword');
        if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
            return null;
        }
        else {
            return { passwordMismatch: true };
        }
    }
    onSubmit() {
        this.userService.setStore('Token', this.token);
        this.userService.passwordReset(this.passwordResetForm.getRawValue())
            .subscribe(resetSuccess => this.router.navigate(['/login']));
    }
};
PasswordresetComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PasswordresetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-passwordreset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passwordreset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/passwordReset/passwordreset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passwordreset.component.css */ "./src/app/components/passwordReset/passwordreset.component.css")).default]
    })
], PasswordresetComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    max-width: 50%;\r\n    height: auto;\r\n}\r\n\r\n.detailButton {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n\r\n.topBadge {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJFQUEyRTtJQUMzRSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGJhbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmRldGFpbEJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZGQ5ODIgMCUsICNmZjYzNGQgMTAwJSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4udG9wQmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmRkOTgyIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUserBooks();
    }
    getUserBooks() {
        this.userService.readedBooks().subscribe(readedBooksData => {
            this.userBookList = readedBooksData;
            this.userService.userReview().subscribe(userReviewData => this.userReviews = userReviewData);
        });
    }
    bookDetail(bookId) {
        this.router.navigate(['/bookdetail/', bookId]);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/readBook/readbook.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/readBook/readbook.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbanner {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    max-width: 50%;\r\n    height: auto;\r\n}\r\n\r\n.detailButton {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n\r\n.topBadge {\r\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #fdd982 100%);\r\n    border: none;\r\n    border-radius: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWFkQm9vay9yZWFkYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkVBQTJFO0lBQzNFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVhZEJvb2svcmVhZGJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BiYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kZXRhaWxCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLnRvcEJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZkZDk4MiAxMDAlKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/readBook/readbook.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/readBook/readbook.component.ts ***!
  \***********************************************************/
/*! exports provided: ReadbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadbookComponent", function() { return ReadbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");




let ReadbookComponent = class ReadbookComponent {
    constructor(route, bookService) {
        this.route = route;
        this.bookService = bookService;
        this.currentPage = 1;
        this.pdfSrc = '../../../assets/praying.pdf';
    }
    ngOnInit() {
        this.bookId = this.route.snapshot.paramMap.get('id');
        this.bookService.bookDetail(this.bookId).subscribe(data => this.bookContent = data);
    }
    afterLoadComplete(pdf) {
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
};
ReadbookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] }
];
ReadbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-readbook',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./readbook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/readBook/readbook.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./readbook.component.css */ "./src/app/components/readBook/readbook.component.css")).default]
    })
], ReadbookComponent);



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.login-form-1 {\n    padding: 4.5%;\n    height: 539px;\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-1 {\n    text-align: left;\n    color: #333;\n}\n\n.login-form-1 input[type=text],\ninput[type=email],\ninput[type=password] {\n    height: 50px;\n}\n\n.login-form-2 {\n    padding: 4.5%;\n    height: 539px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-2 {\n    text-align: center;\n    color: #FFFFFF;\n}\n\n/* .login-container form{\n    padding: 10%;\n} */\n\n.btnSubmit {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 2%;\n    border: none;\n    cursor: pointer;\n}\n\n.login-form-1 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n}\n\n.login-form-2 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-color: #ff634d;\n}\n\n.login-form-1 .ForgetPwd {\n    color: #ff634d;\n    font-weight: 600;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBOzs7SUFHSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwyRUFBMkU7SUFDM0UsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBR0E7O0dBRUc7O0FBRUg7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJFQUEyRTtBQUMvRTs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmxvZ2luLWZvcm0tMSB7XG4gICAgcGFkZGluZzogNC41JTtcbiAgICBoZWlnaHQ6IDUzOXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5sb2dpbi1mb3JtLTEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5sb2dpbi1mb3JtLTEgaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmxvZ2luLWZvcm0tMiB7XG4gICAgcGFkZGluZzogNC41JTtcbiAgICBoZWlnaHQ6IDUzOXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubG9naW4tZm9ybS0yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cblxuLyogLmxvZ2luLWNvbnRhaW5lciBmb3Jte1xuICAgIHBhZGRpbmc6IDEwJTtcbn0gKi9cblxuLmJ0blN1Ym1pdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luLWZvcm0tMSAuYnRuU3VibWl0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xufVxuXG4ubG9naW4tZm9ybS0yIC5idG5TdWJtaXQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzRkO1xufVxuXG4ubG9naW4tZm9ybS0xIC5Gb3JnZXRQd2Qge1xuICAgIGNvbG9yOiAjZmY2MzRkO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





let SignupComponent = class SignupComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.signUpForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, { validators: this.passwordValidation });
    }
    ngOnInit() {
    }
    passwordValidation(group) {
        const passwordControl = group.get('password');
        const confirmPasswordControl = group.get('confirmPassword');
        if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
            return null;
        }
        else {
            return { passwordMismatch: true };
        }
    }
    onSubmit() {
        this.userService.signup(this.signUpForm.value).subscribe(data => this.router.navigate(['/login']), error => this.statusMessage = 'An account exist with this e-mail');
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/updatePassword/updatepassword.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/updatePassword/updatepassword.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn:disabled {\n    opacity: .50;\n}\n\n.login-container {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.login-form-1 {\n    padding: 4.5%;\n    height: 510px;\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-1 {\n    text-align: left;\n    color: #333;\n}\n\n.login-form-1 input[type=text],\ninput[type=password] {\n    height: 50px;\n}\n\n.login-form-2 {\n    padding: 4.5%;\n    height: 510px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\n}\n\n.login-form-2 {\n    text-align: center;\n    color: #FFFFFF;\n}\n\n.btnSubmit {\n    width: 30%;\n    border-radius: 0.8rem;\n    padding: 2%;\n    border: none;\n    cursor: pointer;\n}\n\n.login-form-1 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    ;\n}\n\n.login-form-2 .btnSubmit {\n    font-weight: 600;\n    color: #fff;\n    padding: 10px;\n    background-color: #ff634d;\n}\n\n.login-form-1 .ForgetPwd {\n    background-image: -webkit-linear-gradient(145deg, #fdd982 0%, #ff634d 100%);\n    font-weight: 600;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGVQYXNzd29yZC91cGRhdGVwYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkVBQTJFO0lBQzNFLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYiwyRUFBMkU7O0FBRS9FOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZVBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAuNTA7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ubG9naW4tZm9ybS0xIHtcbiAgICBwYWRkaW5nOiA0LjUlO1xuICAgIGhlaWdodDogNTEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmxvZ2luLWZvcm0tMSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmxvZ2luLWZvcm0tMSBpbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmxvZ2luLWZvcm0tMiB7XG4gICAgcGFkZGluZzogNC41JTtcbiAgICBoZWlnaHQ6IDUxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubG9naW4tZm9ybS0yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5idG5TdWJtaXQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dpbi1mb3JtLTEgLmJ0blN1Ym1pdCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZkZDk4MiAwJSwgI2ZmNjM0ZCAxMDAlKTtcbiAgICA7XG59XG5cbi5sb2dpbi1mb3JtLTIgLmJ0blN1Ym1pdCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNGQ7XG59XG5cbi5sb2dpbi1mb3JtLTEgLkZvcmdldFB3ZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZmRkOTgyIDAlLCAjZmY2MzRkIDEwMCUpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/updatePassword/updatepassword.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/updatePassword/updatepassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdatepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepasswordComponent", function() { return UpdatepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_user_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user.validator */ "./src/app/shared/user.validator.ts");






let UpdatepasswordComponent = class UpdatepasswordComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.passwordUpdateForm = this.formBuilder.group({
            current_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_user_validator__WEBPACK_IMPORTED_MODULE_5__["ValidatePassword"]]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validators: this.passwordValidation });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.userService.updatePassword(this.passwordUpdateForm.getRawValue())
            .subscribe(updateSuccess => this.router.navigate(['/profile']), error => this.statusMessage = 'Current Password Not Correct');
    }
    passwordValidation(group) {
        const passwordControl = group.get('new_password');
        const confirmPasswordControl = group.get('confirmPassword');
        if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
            return null;
        }
        else {
            return { passwordMismatch: true };
        }
    }
};
UpdatepasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdatepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-updatepassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./updatepassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/updatePassword/updatepassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./updatepassword.component.css */ "./src/app/components/updatePassword/updatepassword.component.css")).default]
    })
], UpdatepasswordComponent);



/***/ }),

/***/ "./src/app/guards/can-activate-route.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/guards/can-activate-route.guard.ts ***!
  \****************************************************/
/*! exports provided: CanActivateRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateRouteGuard", function() { return CanActivateRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let CanActivateRouteGuard = class CanActivateRouteGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    }
};
CanActivateRouteGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CanActivateRouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CanActivateRouteGuard);



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthorService = class AuthorService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://18.189.60.62/api/';
    }
    allAuthors() {
        return this.http.get(this.BASE_URL + 'author/');
    }
    authorDetail(authorId) {
        return this.http.get(this.BASE_URL + 'author/' + authorId + '/');
    }
    authorBooks(authorId) {
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
};
AuthorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthorService);



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://18.189.60.62/api/';
    }
    bookCatalogue() {
        return this.http.get(this.BASE_URL + 'book-catalog/');
    }
    paginatedBooks(PAGEURL) {
        return this.http.get(PAGEURL);
    }
    allCategories() {
        return this.http.get(this.BASE_URL + 'category/');
    }
    bookDetail(bookId) {
        return this.http.get(this.BASE_URL + 'book-catalog/' + bookId + '/');
    }
    categoryDetail(categoryId) {
        return this.http.get(this.BASE_URL + 'category/' + categoryId + '/');
    }
    categoryBooks(categoryId) {
        return this.http.get(this.BASE_URL + 'category/books/' + categoryId + '/');
    }
    bookReview(reviewData) {
        return this.http.post(this.BASE_URL + 'review/', reviewData);
    }
    readBook(readData) {
        return this.http.post(this.BASE_URL + 'track-readed-books/', readData);
    }
    createBook(createBookData) {
        return this.http.post(this.BASE_URL + 'book-catalog/', createBookData);
    }
    updateBook(updateBookData, bookId) {
        return this.http.patch(this.BASE_URL + 'book-catalog/' + bookId + '/', updateBookData);
    }
    deleteBook(bookId) {
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
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BookService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");




let UserService = class UserService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.BASE_URL = 'http://18.189.60.62/api/';
    }
    socialLogin(socialUser) {
        return this.http.post(this.BASE_URL + 'create-user-social/', socialUser);
    }
    signup(signUpForm) {
        return this.http.post(this.BASE_URL + 'create-user/', signUpForm);
    }
    login(loginForm) {
        return this.http.post(this.BASE_URL + 'login-user/', loginForm);
    }
    logout() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (this.loggedIn) {
                this.signOut();
            }
        });
        return this.http.post(this.BASE_URL + 'logout/', '');
    }
    updatePassword(passwordData) {
        return this.http.post(this.BASE_URL + 'update-password/', passwordData);
    }
    readedBooks() {
        return this.http.get(this.BASE_URL + 'track-readed-books/');
    }
    userReview() {
        return this.http.get(this.BASE_URL + 'review/');
    }
    updateUserReview(reviewData, reviewId) {
        return this.http.put(this.BASE_URL + 'review/' + reviewId + '/', reviewData);
    }
    deleteUserReview(reviewId) {
        return this.http.delete(this.BASE_URL + 'review/' + reviewId + '/');
    }
    forgetPassword(email) {
        return this.http.post(this.BASE_URL + 'forget-password/', email);
    }
    passwordReset(resetForm) {
        return this.http.post(this.BASE_URL + 'reset-password/', resetForm);
    }
    setStore(name, token) {
        localStorage.setItem(name, token);
    }
    getStore(name) {
        return localStorage.getItem(name);
    }
    destroyStore(name) {
        localStorage.removeItem(name);
    }
    isLoggedIn() {
        if (localStorage.getItem('Token')) {
            return true;
        }
        else {
            return false;
        }
    }
    isAdmin() {
        this.ADMINSTATUS = localStorage.getItem('Mccain');
        if (this.ADMINSTATUS && this.ADMINSTATUS === 'true') {
            return true;
        }
        else {
            return false;
        }
    }
    signOut() {
        /*Social Signout*/
        this.authService.signOut();
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/shared/interceptor.ts":
/*!***************************************!*\
  !*** ./src/app/shared/interceptor.ts ***!
  \***************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






let TokenInterceptor = class TokenInterceptor {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    intercept(request, next) {
        this.token = this.userService.getStore('Token');
        if (typeof this.token === 'string') {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${this.userService.getStore('Token')}`
                }
            });
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                if (err.status === 401) {
                    this.userService.signOut();
                    this.userService.destroyStore('Token');
                    this.userService.destroyStore('User');
                    this.userService.destroyStore('Alias');
                    this.userService.destroyStore('Mccain');
                    this.userService.destroyStore('Social');
                    this.router.navigate(['/login']);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        }
        else {
            return next.handle(request);
        }
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/shared/user.validator.ts":
/*!******************************************!*\
  !*** ./src/app/shared/user.validator.ts ***!
  \******************************************/
/*! exports provided: ValidatePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatePassword", function() { return ValidatePassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function ValidatePassword(control) {
    if (control.value.length < 8) {
        return { invalidPassword: true };
    }
    return null;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/developer/AngularLive/library-management-client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map