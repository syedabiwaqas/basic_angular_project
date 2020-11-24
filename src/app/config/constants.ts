

export class Constants {
    static baseUrl = 'http://localhost:8000/';
    static responseSuccess = '2XX';
    static responseInternalServer = '5XX';
}

export class UrlConstants {
    static getBooks = Constants.baseUrl + 'get/books';
    static getAuthor = Constants.baseUrl + 'get/authors';
    static createBook = Constants.baseUrl + 'post/book';
    static createAuthor = Constants.baseUrl + 'post/author';
}

export class FakeLoginCredentials {
    static username = 'abi_waqas';
    static password = '123456';
}


