import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';

import { Navbar, Nav, Container } from 'react-bootstrap'
const Slider = () => (
 <>
 <div className={css.S}>
        <Navbar className={css.C} expand="lg">
       <div />
       
            <Navbar.Toggle className={css.gay}> <img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png" alt="Nav Bar"/></Navbar.Toggle> 
 
            {/* <a href="#" class="pull-left"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png" alt="Nav Bar"></img></a>  */}
            
            <Navbar.Collapse>

            <Nav className={ClassNames("mr-auto")}>
                <Nav.Link href="/">ABOUT US</Nav.Link>
                <Nav.Link href="/">PORTFOLIO</Nav.Link>
                <Nav.Link href="#whatWeDo">WHAT WE DO</Nav.Link>
                <Nav.Link href="#whoWeServe">WHO WE SERVE</Nav.Link>
                <Nav.Link href="/">CONTACT US</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
           
        </Navbar>
        </div>

        <div className={css.hide}>
        <div className="row justify-content-center py-5">
        
        <div className="row">
            <h1 className={ClassNames("", css.callMain)}>YOUR NEW <br/> WEB DEVELOPERS</h1>
            </div>
            <div className="col">
            <div className="row  justify-content-center">
            <p>We’re a team of web developers passionate about building stable, maintainable<br/> 
             software for tech startups and enterprise customers.</p>
            </div>
          
            <div className="row  justify-content-center">
           
            <button className={css.btn}>Get a quote</button>
           
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

export default Slider

    // </div>
    // <div className={ClassNames("container", css.S)}>
    // <div className="row pt-2 pr-3 justify-content-end">
    //  <img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png" alt="Nav Bar"/>
    //  </div>
    // </div>
    // </div>