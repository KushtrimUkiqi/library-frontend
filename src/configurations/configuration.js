const urls = {
    categories: `categories`,
    books: `books`,
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

export default config = (TYPE === ENUM_TYPE.DEV) ? DEVELOPMENT : PRODUCTION;
