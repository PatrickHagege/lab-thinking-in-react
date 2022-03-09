const SearchBar = ({ searchTerm, setSearchTerm, checkBoxValue, setCheckBoxValue }) => {

    return (
        <form>
            <label htmlFor="searchbar">Search</label>
            <input type="text"
            name="searchbar"
            id="searchbar"
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
            />
            <label htmlFor="inStockProduct">Only show products in stock</label>
            <input type="checkbox"
            name="inStockProduct"
            id="inStockProduct"
            value={checkBoxValue}
            onChange={(e)=>{setCheckBoxValue(!checkBoxValue)}}
            />
        </form>
    );
}

export default SearchBar;