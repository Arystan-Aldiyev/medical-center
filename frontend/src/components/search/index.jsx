import React from "react";
import "../index.css"
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'
import { useEffect } from "react";

const Search = ({ itemToSearch, setItemToSearch, filteredList, updateFilter, show, patients, doctors }) => {
    
    useEffect(() => {
        (
            async () => {
                console.log(itemToSearch)
                if (show) {
                    console.log(itemToSearch)
                    const temp = itemToSearch !== "" ? patients?.filter((item) => item.id_number.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch)) : patients
                    updateFilter(temp)
                } else {
                    const temp = itemToSearch !== "" ? doctors?.filter((item) => item.id_number.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch)) : doctors
                    updateFilter(temp)
                }
            }
        )();
    }, [itemToSearch])

    return (
        <div className='searchDiv'>
            <SearchIcon className='searchIcon' />
            <input className='searchBox' type='text' placeholder='Search...' value={itemToSearch} onChange={(e) => { setItemToSearch(e.target.value) }} />
        </div>
    )
};

export default Search;