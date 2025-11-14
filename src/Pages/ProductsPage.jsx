import axios from "axios"
import { useState } from "react"


export default function ProductsPage() {

    //Create variable to store products data
    const [products, setProducts] = useState([])


    //Create Axios call
    const productsApi = 'https://fakestoreapi.com/products'

    function getProducts() {

        axios.get(productsApi)
            .then(res => setProducts(res.data)
            )
    }

    useState(getProducts, [])

    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    {products.map(product => {

                        return (
                            <div key={product.id} className="col-3 mb-3">
                                <div className="card h-100">
                                    <div className="img-cont">
                                        <img src={product.image} className="card-img-top w-100" alt={product.image} />
                                    </div>

                                    <div className="card-body">
                                        <h6 className="card-title">{product.title}</h6>
                                        <p className="card-text">{product.price}€</p>


                                    </div>

                                    <div className="rating">
                                        <span className="card-text pe-1">
                                            {product.rating.rate}/5
                                        </span>
                                        <span className="text-warning">
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                        <span className="ps-2">
                                            {product.rating.count}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}