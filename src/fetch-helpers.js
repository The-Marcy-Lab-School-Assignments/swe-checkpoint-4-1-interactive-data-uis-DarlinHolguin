export const fetchData = (url) => {
    fetch(url)
};

export const getProducts = () => {
    return fetch("https://dummyjson.com/docs/products")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Data unreachable");
            }
            return response.json();
        })
};

export const getProductById = (id) => {

};

export const searchProducts = (query) => {

};
