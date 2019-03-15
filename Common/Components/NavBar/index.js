import css from './style.scss';
import Button from '../Button'

import { Navbar, Nav, } from 'react-bootstrap'
const NavBar = () => (
 <>
        <Navbar className={css.navBar} expand="md">
       <div />
            <Navbar.Toggle className={css.logo}> < img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png" alt="Nav Bar"/></Navbar.Toggle>             
            <Navbar.Collapse>
            <Nav className={css.div}>
                <Nav.Link href="/"><span className={css.white} >ABOUT US</span></Nav.Link>
                <Nav.Link href="/"><span className={css.white}>PORTFOLIO</span></Nav.Link>
                <Nav.Link href="#whatWeDo"><span className={css.white}>WHAT WE DO</span></Nav.Link>
                <Nav.Link href="#whoWeServe"><span className={css.white}>WHO WE SERVE</span></Nav.Link>
                <Nav.Link href="/"><span className={css.white}>CONTACT US</span></Nav.Link>
                </Nav>     
            </Navbar.Collapse>
        </Navbar>
  

        <div className={css.hide}>
        <div className="row justify-content-center py-5">
        <div className="row mt-5 mb-3">
        <a className={css.aWhite} href="#home-top"><h1 className={css.mainTitle}>Your New<br/>Web Developers</h1></a>
        </div>
            <div className="col">
            <div className="row mb-3 justify-content-center">
            <p className={css.mainText}>We’re a team of web developers passionate about building stable, maintainable<br />
             software for tech startups and enterprise customers.</p>
            </div>
          
            <div className="row mb-5 justify-content-center">
           
            <Button>Get a quote</Button>
           
            </div>
            
            </div>
       
      
        </div>
        </div>
      </>
        )

export default NavBar
