import {} from 'react'
import '../styles/_footer.css'
import {AiFillGithub} from 'react-icons/ai'
import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
            <footer>
                <p>Agro Solution 2023-202x</p>
                <Link to="https://github.com/hidekiiwasa/sprint_react_saas"><AiFillGithub /></Link>
            </footer>
        </>
    )
}

export default Footer