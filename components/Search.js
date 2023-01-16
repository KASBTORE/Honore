import React from 'react';
import { useState } from 'react';
import SearchField from "react-search-field";
import Product from './Product';
export default function Search({ products }) {
    const [search, setSearch] = useState("")
    const filteredProducts = details.filter(
        person => {
            return (
                person
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person
                    .email
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );
    const filtered = filteredProducts.map(product => <Product product={product} />);
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <SearchField
            placeholder="Search..."
            onChange={onChange}
            searchText="This is initial search text"
            classNames="test-class"
        />

    )
}

