import { useState, useEffect } from 'react';
import jsonData from './../data.json';
import SearchBar from './../Components/SearchBar';
import ProductsTable from './../Components/ProductsTable';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() => {
        setProducts(jsonData);
    }, [])

    let searchedProducts = null;
    if ((searchTerm!=='') && (checkBoxValue)) {
        searchedProducts=products.filter((product)=>{
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        }).filter((product)=>{
            return product.inStock;
        })
    } else if (searchTerm!=='') {
        searchedProducts=products.filter((product)=>{
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    } else if (checkBoxValue) {
        searchedProducts=products.filter((product)=>{
            return product.inStock;
        })
    } else {
        searchedProducts=products;
    }

    return(
        <div>
          <h1>IronStore</h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            checkBoxValue={checkBoxValue}
            setCheckBoxValue={setCheckBoxValue}
          />
          <ProductsTable
            products={searchedProducts}
          />
        </div>    
    )

}
export default ProductsPage;