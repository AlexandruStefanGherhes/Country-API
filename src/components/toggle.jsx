import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const ToggleDark = ({darkMode,setDarkMode,modalData}) =>{
    const container = document.querySelector('.container');
    const country = document.querySelectorAll('.country');
    const header = document.querySelector('header');
    const span = document.querySelectorAll('.modal-details')
    const btn = document.querySelector('.btn')
    const filters = document.querySelector('.filters')
    const select = document.querySelector('select')
    const modal = document.querySelector('.modal')
    const borderTitle = document.querySelector('.border-title')
    const borderLink = document.querySelectorAll('.border-link')
    const btnBack = document.querySelector('.button')
    // console.log(borderTitle)

    const styleWhite = () =>{
        header.style.background = 'var(--very-light-grey)';
        header.style.color = 'var(--dark-blue)'
        header.style.boxShadow = 'rgba(231, 0, 0, 0.35) 0px 5px 15px;'
        country.forEach(each=>{
        each.style.background = 'var(--white)'
        each.style.color = 'var(--dark-blue)'
        });
        country
        container.style.background = '#fafafa';
        span.forEach(item=> item.style.color = 'var(--dark-blue)')
        btn.style.color = 'var(--dark-blue)'
        filters.style.background = '#fafafa'
        select.style.background = 'var(--white)'
        select.style.color = 'var(--dark-blue)'
        modal.style.background = 'var(--white)'
        borderTitle.style.color = 'var(--very-dark-blue-darkMode)'
        borderLink.forEach(border=>{
            border.style.background = 'var(--very-light-grey)'
            border.style.color = 'var(--very-dark-blue-darkMode)'
        })
        btnBack.style.background = 'var(--white)'
        btnBack.style.color = 'var(--dark-blue)'
    }

    const styleBlack = () =>{
        header.style.background = 'var(--dark-blue)';
        header.style.color = 'var(--white)'
        country.forEach(each=>{
        each.style.color = 'var(--white)'
        each.style.background = 'var(--dark-blue)'
        })
        container.style.background = 'var(--very-dark-blue-darkMode)';
        span.forEach(item=> item.style.color = 'rgba(255, 255, 255, 0.603)')
        btn.style.color = 'var(--white)'
        filters.style.background = 'var(--very-dark-blue-darkMode)'
        select.style.background = 'var(--dark-blue)'
        select.style.color = 'var(--white)'
        modal.style.background = 'var(--very-dark-blue-darkMode)'
        borderTitle.style.color = 'var(--very-light-grey)'
        borderLink.forEach(border=>border.style.background = 'var(--dark-blue)')
        borderLink.forEach(border=>{
            border.style.background = 'var(--dark-blue)'
            border.style.color = 'var(--very-light-grey)'
        })
        btnBack.style.background = 'var(--dark-blue)'
        btnBack.style.color = 'var(--very-light-grey)'
    }

    const toggle =()=>{
        if(darkMode){
            if(modalData.length>0){
                const borderTitle = document.querySelector('.border-title')
                header.style.background = 'var(--very-light-grey)';
                header.style.color = 'var(--dark-blue)'
                header.style.boxShadow = 'rgba(231, 0, 0, 0.35) 0px 5px 15px;'
                country.forEach(each=>{
                each.style.background = 'var(--white)'
                each.style.color = 'var(--dark-blue)'
                });
                country
                container.style.background = '#fafafa';
                span.forEach(item=> item.style.color = 'var(--dark-blue)')
                btn.style.color = 'var(--dark-blue)'
                filters.style.background = '#fafafa'
                select.style.background = 'var(--white)'
                select.style.color = 'var(--dark-blue)'
                modal.style.background = 'var(--white)'
                borderTitle.style.color = 'var(--very-dark-blue-darkMode)'
                borderLink.forEach(border=>{
                    border.style.background = 'var(--very-light-grey)'
                    border.style.color = 'var(--very-dark-blue-darkMode)'
                })
                btnBack.style.background = 'var(--white)'
                btnBack.style.color = 'var(--dark-blue)'
            }else{
                styleWhite()
            }
        }else{
            if(modalData.length>0){
                const borderTitle = document.querySelector('.border-title')
                header.style.background = 'var(--dark-blue)';
                header.style.color = 'var(--white)'
                country.forEach(each=>{
                each.style.color = 'var(--white)'
                each.style.background = 'var(--dark-blue)'
                })
                container.style.background = 'var(--very-dark-blue-darkMode)';
                span.forEach(item=> item.style.color = 'rgba(255, 255, 255, 0.603)')
                btn.style.color = 'var(--white)'
                filters.style.background = 'var(--very-dark-blue-darkMode)'
                select.style.background = 'var(--dark-blue)'
                select.style.color = 'var(--white)'
                modal.style.background = 'var(--very-dark-blue-darkMode)'
                borderTitle.style.color = 'var(--very-light-grey)'
                borderLink.forEach(border=>border.style.background = 'var(--dark-blue)')
                borderLink.forEach(border=>{
                    border.style.background = 'var(--dark-blue)'
                    border.style.color = 'var(--very-light-grey)'
                })
                btnBack.style.background = 'var(--dark-blue)'
                btnBack.style.color = 'var(--very-light-grey)'
            }else{
                styleBlack()
            }
        }
        setDarkMode(!darkMode)
    }

    return(
        <button 
        onClick={toggle}
        className='btn'>
        <i><FontAwesomeIcon icon={faMoon} />
        </i>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    )
    }

    export default ToggleDark