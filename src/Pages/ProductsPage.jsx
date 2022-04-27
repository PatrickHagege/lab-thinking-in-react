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
    // si le champs contient une chaine && que la checkbox est cochée
    // alors on filtre products sur les caracteres saisis && qui sont en stock
    if ((searchTerm!=='') && (checkBoxValue)) {
        searchedProducts=products
            .filter((product) => {
                return product.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .filter((product) => {
                return product.inStock;
        })
    // si le champs de recherche contient une chaine de caractères
    } else if (searchTerm!=='') {
        searchedProducts=products.filter((product) => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    // si la checkbox est cochee alors j'affiche les produits en stock
    } else if (checkBoxValue) {
        searchedProducts=products.filter((product) => {
            return product.inStock;
        })
    // sinon on envoie dans searchProduct ce qui vient du fichier json
    } else {
        searchedProducts=products;
    }

    return(
        <div className='ProductPage'>
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