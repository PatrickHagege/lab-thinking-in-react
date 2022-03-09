import ProductsRow from './ProductsRow';

const ProductsTable = ( { products} ) => {

    return  (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map( (product) => { 
                    return (<ProductsRow key={product.id} product={product}/>)
                    })
                }
        </tbody>
        </table>
    )}

export default ProductsTable;