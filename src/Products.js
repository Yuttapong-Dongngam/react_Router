import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import Product from './Product'
 
const Products = ({ match }) => {

    const productData = [
        {
            id:1,
            name: 'NIKE Liteforce blue sneakers ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            status : 'Out of Stock'
            
            
        },
        

        {
            id:2,
            name: 'Stylised fliip flops ',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
            status : 'Available'
            
            
        },

        {
            id:3,
            name: 'ADIDAS Runing ',
            description: 'Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit',
            status : 'Out of Stock'
            
            
        }
    ]

    const { url } = useRouteMatch();

    const linkList = productData.map((product) => {

        return(
            <li key={product.id}>
                <Link to={`${url}/${product.id}`}>{product.name}</Link>

            </li>
        )
    })

    return (
        <div>
        <div>
            <h3>Products</h3>
            <ul>{linkList}</ul>
        </div>

        <Route path={`${url}/:productId`}>
            <Product data={productData} />
        </Route>

        
        <Route exact path={url}>
            <p>Please select aproduct.</p>
        </Route>

        </div>
    )
}

export default Products;