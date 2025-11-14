import axios from "axios"
import { useState } from "react"


export default function ProductsPage() {

    //Create Axios call
    const productsApi = 'https://fakestoreapi.com/products'

    function getProducts() {

        axios.get(productsApi)
            .then(res => console.log(res.data)
            )
    }

    useState(getProducts, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    )
}