import React, {useState, useEffect} from 'react'
import Base from './Base';
import { getProducts } from './helper/coreapicalls'
import '../style.css'
import Card from './Card';

export default function Home() {
            // boxname,settobox
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    // load all products from api 
    const loadAllProducts = () => {
        getProducts()
        .then((data) => {
            if(data.error){
                setError(data.error);
                console.log(error);
            } else {
                setProducts(data);
            }
        });
    };

    useEffect(() => {
        loadAllProducts();
    });

    return (
        <Base title="Home page" description="Welcome to T shirt store" >
        <div>
            <h1>Home Component</h1>
            <div className="row">
                {products.map( (product, index) => {
                    return (
                    <div key={index} className="col-4 mb-4">
                        <Card product={product}/>
                    </div>
                    );
                })}
            </div>
        </div>
        </Base>
    );
}
