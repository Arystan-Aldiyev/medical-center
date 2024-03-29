import React from "react";
import "../index.css"
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'
import { useEffect } from "react";

const Search = ({ itemToSearch, setItemToSearch, updateFilter, show, patients, doctors, where }) => {

    useEffect(() => {
        (
            async () => {
                if (where === "admin") {
                    if (show) {
                        const temp = itemToSearch !== "" ? patients?.filter((item) => item.id_number.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch)) : patients
                        updateFilter(temp)
                    } else {
                        const temp = itemToSearch !== "" ? doctors?.filter((item) => item.id_number.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch)) : doctors
                        updateFilter(temp)
                    }
                } else {
                    setItemToSearch(itemToSearch)
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