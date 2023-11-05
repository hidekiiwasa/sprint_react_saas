import {} from 'react'
import Nav from './Nav'
import '../styles/_menu.css'


function Header() {
    return(
        <>
            <div className="logo">
                <p>A.S</p>
            </div>
            <Nav />
        </>
    )
}

export default Header