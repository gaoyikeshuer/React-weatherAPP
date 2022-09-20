import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
const Search = ({onSearchChange}) => {//onSearchChange = event function pass from the parent component
    const [search, setSearch] = useState(null);
    const loadOptions = (inputValue) =>{
      return  fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
	.then(response => response.json())
	.then((response) => {
        return{
           options: response.data.map((city)=>{ //array of objects
            return{
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name},${city.countryCode}`
            }
           }) 
        }
    })
	.catch(err => console.error(err));
    }
    const handleOnChange = (searchData) => {
        setSearch(searchData) //just change the state of search, didn't pass the data to webpage
        onSearchChange(searchData)//don't understand: pass the data we got from input
    }

    return (

        <AsyncPaginate 
        placeholder = "Search for city"
        debounceTimeout={600}
        value = {search}
        onChange = {handleOnChange}//update search value and emit to parent app.js
        loadOptions={loadOptions}
        />
    )
}

export default Search;