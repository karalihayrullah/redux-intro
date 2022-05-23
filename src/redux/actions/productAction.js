import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}

export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export function saveProductApi(product) {
    //product.id varsa product id ekle yoksa boş gönder
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
        //eğer product id varsa put yoksa post dur
        method: product.id ? "PUT" : "POST",
        //json içerisinde hangi kısıma eklenecek
        headers: { "content-type": "application/json" },
        //bu kısımda product(data) string formatında gönderilir.
        body: JSON.stringify(product)
    })
        //üst kısımdan gelen sonucu handleResponse adında yolluyoruz 
        .then(handleResponse)
        .catch(handleError)
}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(savedProduct => {
            //gönderilen productın id si varsa update yoksa create
            product.id
                ? dispatch(updateProductSuccess(savedProduct))
                : dispatch(createProductSuccess(savedProduct))
        })
            //bu kısımdan hata dönerse yakala
            .catch(error => {
                throw error
            })
    }
}
export async function handleResponse(response) {
    //hata ok ise sonucu json formatında gönder
    if (response.ok) {
        return response.json()
    }
     
    //sonuc ok değilse bir hata var demektir
    const error = await response.text()
    //o zaman error fırlat
    throw new Error(error)
}

export function handleError(error) {
    console.error("Bir hata oluştu")
    throw error
}
export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}