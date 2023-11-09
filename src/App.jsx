import { useEffect, useState } from 'react'
import Modal from './components/modal'
import server from './components/server'
import ToggleDark from './components/toggle'
import {FilterCountries} from './components/search'
import {RegionSelect} from './components/search'
import RenderCountries from './components/countryRender'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const [searchValue,setSearchValue] = useState('')
  const [region,setRegion] = useState('')
  const [modalData,setModalData] = useState([])

  useEffect(()=>{
    server.getAll().then(response=>{
      const countryData = response.data
      const countryNames = countryData.map(each=>each)
      setCountries(countryNames)
    })
  },[])


  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <ToggleDark 
        darkMode = {darkMode}
        setDarkMode = {setDarkMode}
        modalData={modalData}
        />
      </header>
        <div className='filter'>
          <FilterCountries
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setRegion={setRegion}
          region={region}
          countries={countries}
          setModalData={setModalData}
          />
        </div>
      <div className="bucket">
        <div className='container'>
          {region 
          ? <RegionSelect 
            countries = {countries}
            region = {region}/>
          : <RenderCountries
            countries={countries}/>}
        </div>
      </div>
      <Modal
      modalData={modalData}
      setSearchValue={setSearchValue}/>
    </>
  )
}

export default App
