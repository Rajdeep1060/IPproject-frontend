import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import {Container,Row} from "reactstrap"
const Header = () => {
  return <header className='header'>
    <Container>
        <Row>
          <div className='nav_wrap'>
            <div className='logo'>
             <img src={logo} alt=''/>
            <div>

            </div>
            </div>
          </div>
        </Row>
    </Container>
  </header>
}

export default Header