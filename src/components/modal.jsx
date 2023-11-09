import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Modal = ({modalData,setSearchValue}) =>{
    // console.log(modalData);
    const result = modalData[0]

    const onClick = () =>{
        const modal = document.querySelector('.modal')
        const bucket = document.querySelector('.bucket')
        const filters = document.querySelector('.filters')
        modal.style.display = 'none'
        bucket.style.display = 'block'
        filters.style.display = 'flex'
        setSearchValue('')
    }

    return(
        <div className="modal">
        <div className="back-btn">
            <button className="button" onClick={onClick}><i><FontAwesomeIcon icon={faArrowLeft}/></i>Back</button>
        </div>
        {modalData.length > 0 ?
        <div className="modal-content">
            <div className="flag"><img src={result.flags.png} alt="" /></div>
            <div className="country-details">
            <div className="modal-details">
                <div className="details-first">
                    <h1>{result.name.common}</h1>
                    <p><strong>Native Name:</strong> {result.name.common}</p>
                    <p><strong>Population:</strong>{result.population}</p>
                    <p><strong>Region:</strong>{result.region}</p>
                </div>
                <div className="details-second">
                    <p><strong>Sub Region:</strong>{result.subregion}</p>
                    <p><strong>Capital:</strong>{result.capital[0]}</p>
                    <p><strong>Top level domain:</strong>{result.tld[0]}</p>
                </div>
            </div>
            <div className="border">
                {result.borders ?
                <>
                <h3 className="border-title">Border countries: </h3>
                <div className="border-countries">
                    {result.borders.map(border=> <a className="border-link">{border}</a>)}
                </div>
                </>
                : <h3 className="border-title">Country does not have borders</h3>}
            </div>
            </div>
        </div>
        :
        <h1 className='no-borders'>Country does not exist.</h1>}
        </div>

    )
}

export default Modal