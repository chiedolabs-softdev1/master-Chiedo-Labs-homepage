import ClassNames from 'classnames';
import css from './style.scss';
import Button from '../Button'

import { Navbar, Nav, Link } from 'react-bootstrap'
const NavBar = () => (
 <>
        <Navbar className={css.navBar} expand="lg">
       <div />
            <Navbar.Toggle className={css.logo}> < img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png" alt="Nav Bar"/></Navbar.Toggle>             
            <Navbar.Collapse>
            <Nav>
                <Nav.Link className={css.highLighter} href="/"><span className={ClassNames("mr-5 pl-0",css.highLighter)}>ABOUT US</span></Nav.Link>
                <Nav.Link href="/"><span className="mr-5">PORTFOLIO</span></Nav.Link>
                <Nav.Link href="#whatWeDo"><span className="mr-5">WHAT WE DO</span></Nav.Link>
                <Nav.Link href="#whoWeServe"><span className="mr-5">WHO WE SERVE</span></Nav.Link>
                <Nav.Link className={css.high} href="/"><span>CONTACT US</span></Nav.Link>
                </Nav>     
            </Navbar.Collapse>
        </Navbar>

        <div className={css.hide}>
        <div className="row justify-content-center py-5">
        <div className="row mt-5 mb-3">
        <a className={css.white} href="#home-top"><h1 className={css.mainTitle}>Your New<br/>Web Developers</h1></a>
        </div>
            <div className="col">
            <div className="row mb-3 justify-content-center">
            <p className={css.mainText}>We’re a team of web developers passionate about building stable, maintainable
             software for tech startups and enterprise customers.</p>
            </div>
          
            <div className="row justify-content-center">
           
            <Button>Get a quote</Button>
           
            </div>
            
            </div>
       
      
        </div>
        </div>
        {/* <Container className={css.ourTeam}>
            <h3 className={ClassNames(css.team, css.Whitetitle)}>Hire our team to:</h3>
            <p className={ClassNames(css.team, css.buildAndMaintain)}>Build and maintain: <span>Web applications</span> <span>Web back-ends</span> <span>Web front-ends</span> <span>Custom websites</span></p>
        </Container> */}
      </>
        )

export default NavBar

    // </div>
    // <div className={ClassNames("container", css.S)}>
    // <div className="row pt-2 pr-3 justify-content-end">
    //  <img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png" alt="Nav Bar"/>
    //  </div>
    // </div>
    // </div>