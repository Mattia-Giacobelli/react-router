import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


export default function ProductPage() {

    const { id } = useParams()
    //Create variable to store products data
    const [product, setProduct] = useState([])

    const navigate = useNavigate()

    //Create Axios call
    const productsApi = `https://fakestoreapi.com/products/${id}`

    function getProduct() {

        axios.get(productsApi)
            .then(res => {
                setProduct(res.data)
                console.log(res.data);
                if (res.data === '') {
                    navigate(-1)
                }



            }
            )
    }

    useState(getProduct, [])



    return (

        <div key={product.id} className="container">
            <div className="product d-flex justify-content-center min-vh-75 py-5">
                <div className="img-cont px-5">
                    <img src={product.image} className="card-img-top w-100" alt={product.image} />
                </div>

                <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">{product.price}€</p>
                    <p className="card-text">{product.description}</p>


                </div>

                <div className="rating">
                    <span className="card-text pe-1">
                        {product.rating?.rate}/5
                    </span>
                    <span className="text-warning">
                        <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="ps-2">
                        {product.rating?.count}
                    </span>
                </div>
            </div>
        </div>
    )
}