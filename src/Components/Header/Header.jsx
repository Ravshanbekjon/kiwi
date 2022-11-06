import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./Header.scss"
import KiwiLogo from "../../Assets/Img/Logo.png"
import { AuthContext } from '../../Context/AuthContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {setToken} = useContext(AuthContext)
    
    const handleLogOut = () => {
        setToken(null)
    }

    const { t, i18n } = useTranslation()

    const handleChangeLang = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <Navbar collapseOnSelect expand="lg" className='header__nav'>
            <Container>
                <Navbar.Brand href="#"> <img src={KiwiLogo} /> </Navbar.Brand>
                <Nav className="me-auto">
                    <h5> {t('header.logo')} </h5>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto links-1">
                        <NavLink to='/' className='NavLink'> { t('header.link1') } </NavLink>
                        <NavLink to="/add-product" className='NavLink'> { t('header.link2') } </NavLink>
                        <NavLink className='NavLink'> { t('header.link3') } </NavLink>
                    </Nav>
                    <Nav className="me-auto">
                        <select onChange={handleChangeLang}>
                            <option value="ru">Рус</option>
                            <option value="uz">O'z</option>
                        </select>
                    </Nav>
                    <Nav className="me-auto">
                        {/* <NavLink to="/login" className='NavLink'> Вход</NavLink> */}
                        <button onClick={handleLogOut} className='NavLink'>{ t('header.out') }</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header