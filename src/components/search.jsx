
export const FilterCountries = ({setSearchValue,searchValue,setRegion,countries,setModalData}) =>{

    const onChange = (e) =>{
        const event = e.target.value
        setSearchValue(event)
    }

    const onChangeSelect = (e) =>{
        const value = e.target.value;
        setRegion(value)
    }


    const submitForm = e =>{
        const filters = document.querySelector('.filters')
        const modal = document.querySelector('.modal')
        const bucket = document.querySelector('.bucket')
        const result = countries.filter(country=>country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
        filters.style.display = 'none'
        setModalData(result)
        e.preventDefault()
        if(searchValue){
            modal.style.display = 'block'
            bucket.style.display = 'none'
        }else{
            modal.style.display = 'none'
            bucket.style.display = 'block' 
        }
    }

    return(
        <div >
            <form className='filters' onSubmit={submitForm}>
                <input 
                placeholder="Search for a country"
                onChange={onChange}
                value={searchValue}
                />
                <select name="regions" onChange={onChangeSelect}>
                    {/* <option selected disabled hidden>Filter by Region</option> */}
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        </div>
    )
}

export const RegionSelect = ({countries,region}) =>{

    let newCountries
    if(region === 'All'){
        newCountries = countries
    }else{
        newCountries = countries.filter(country=>country.region.includes(region))
    }
    
    return(
        newCountries.map((country,index)=> 
        <div className="country" key={index}>
            <div className='image'><img src={country.flags.png} alt="flag" /></div>
            <div className='country-details'>
            <h1>{country.name.common}</h1>
            <p>Population: <span className='details'>{country.population}</span></p>
            <p>Region: <span className='details'>{country.region}</span></p>
            <p>Capital: <span className='details'>{country.capital}</span></p>
            </div>
        </div>
    )
    )
}

