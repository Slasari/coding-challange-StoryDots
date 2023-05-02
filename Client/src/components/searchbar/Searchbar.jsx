import { useEffect, useState } from "react"
import { useGetProducts } from "../../store/store"
import "./SearchBar.css"

export const SearchBar = () => {

    const productsCopy = useGetProducts((state) => state.productsCopy)

    const [search, setSearch] = useState("")

    const [productsFilters, setProductsFilter] = useState("")


    const {getAllProducts} = useGetProducts()

    const {getFiltersProducts} = useGetProducts()

    useEffect(() => {
        getAllProducts()
    }, [])

    function handleChange(e) {
       setSearch(e.target.value);
       getFiltersProducts(e.target.value, productsCopy)
    }

    return (
        <main className="containerSearchBar">
            <input
            className="input"
            type="text"
            placeholder="Buscar"
            onChange={handleChange}
            ></input>
        </main>
    )
}