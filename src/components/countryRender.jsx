const RenderCountries = ({countries}) =>{
    return(
        countries.map((country,index)=> 
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


export default RenderCountries