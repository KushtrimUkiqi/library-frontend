import axios from "axios";

const urls = {
    categories: `categories`,
    books: `books`,
    deleteBooks: `books/remove`,
    addBooks: `books/add`,
    editBooks: `books/edit`
}

const PRODUCTION = {
    url: ``,
    paths: urls
}

const DEVELOPMENT = {
    url: `http://127.0.0.1:8080`,
    paths: urls
}


const ENUM_TYPE = {
    PROD : "PRODUCTION",
    DEV : "DEVELOPMENT"
}

///define if you want to use the application for development or production
const TYPE = ENUM_TYPE.DEV;

const config = (TYPE === ENUM_TYPE.DEV) ? DEVELOPMENT : PRODUCTION;


const instance = axios.create({
    baseURL: config.url,
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});

const HttpClientService = {
    fetchCategories: () => {
        return instance.get(config.paths.categories);
    },
    fetchBooksWithPagination: (page,size) => {
        return instance.get(`${config.paths.books}?page=${page}&size=${size}`);
    },
    fetchBook: (id) => {
        return instance.get(`${config.paths.books}/${id}`);
    },
    addBook: (name,imageUrl, category, authorID, availableCopies) => {
        return instance.post(config.paths.addBooks, {
            name : name,
            imageUrl : `${imageUrl}`,
            category : `${category}`,
            authorID : authorID,
            availableCopies : availableCopies
        });
    },
    editBook: (id,name,imageUrl, category, authorID, availableCopies) => {
        return instance.patch(`${config.paths.editBooks}/${id}`, {
            "ID": id,
            "name" : name,
            "imageUrl" : imageUrl,
            "category" : category,
            "authorID" : authorID,
            "availableCopies" : availableCopies
        });
    },
    removeBook: (id) => {
        return instance.delete(`${config.paths.deleteBooks}/${id}`);
    },
    loan: (userID,bookID,dateDue) => {
        return instance.post(`users/${userID}/loans/add`,{
            'bookID': bookID,
            'dateDue': dateDue
        });
    },
    fetchAuthors: () => {
        return instance.get(`authors`);
    },
   



    AAAAfetchManufacturers: () => {
        return axios.get("/manufacturers");
    },
    fetchProducts: () => {
        return axios.get("/products");
    },
    deleteProduct: (id) => {
        return axios.delete(`/products/delete/${id}`);
    },
    addProduct: (name, price, quantity, category, manufacturer) => {
        return axios.post("/products/add", {
            "name" : name,
            "price" : price,
            "quantity" : quantity,
            "category" : category,
            "manufacturer" : manufacturer
        });
    },
    editProduct: (id, name, price, quantity, category, manufacturer) => {
        return axios.put(`/products/edit/${id}`, {
            "name" : name,
            "price" : price,
            "quantity" : quantity,
            "category" : category,
            "manufacturer" : manufacturer
        });
    },
    getProduct: (id) => {
        return axios.get(`/products/${id}`);
    }
}

export default HttpClientService;
