import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';
import Button from '../Components/Button'
import MainMenu from '../MainMenu'
import { Container, Row, Col  } from 'react-bootstrap'

const HomePage = () => (
 <> 
 <MainMenu /> 
<div>
{/* What we do */}
<div className={ClassNames("row", css.background)}>
    <div className={ClassNames("col")}></div>
    <div className={ClassNames("col", css.s)}>
    <div className={ClassNames("row m-5")}>
    <div className={ClassNames("col")}>

    <div className={ClassNames("pb-4")}>
    <h2 id='what-WeDo'><span className={css.txtcolor}>WHAT</span> WE DO</h2>
    </div>
    <div className={ClassNames("row")}>
    <div className={ClassNames("col")}>
   <p className={css.body}> We build and maintain:</p>
    </div>
    </div>
    <div className={ClassNames("row")}>
    <div className={ClassNames("col")}>
<p className={css.body}><u>Web Front-ends</u> with HTML, CSS, and a library called React.</p>
</div>
</div>
<div className={ClassNames("row")}>
<div className={ClassNames("col")}>
<p className={css.body}><u>Web Back-ends</u> using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku.</p>
</div>
</div>
<div className={ClassNames("row")}>
<div className={ClassNames("col")}>
<p className={css.body}><u>Custom Websites</u> from the ground up as opposed to using pre-existing templates.</p></div></div>
<div className={ClassNames("row")}>
<div className="col">
 <Button>Get a quote</Button>
  </div>
  </div>


  </div>
  </div>
  </div>
  </div>

{/* Founding Developers */}
 
  <div className={ClassNames("row justify-content-center", css.color)}>
 
  <div className="founders-container">
            <h3 className="White-title founderstitle">Our Founding Web Developers</h3>
      
    
          <Container className="foundersBlock" fluid style={{ lineHeight: '32px' }}>
            <Row id="founders-row">
              <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg" max-width="100%" flex="1" width="268" height="268"/><div className="nameTag"><span>Chiedo</span><br/>Founder, Solutions Architect</div></div></Col>
              <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg" width="268" height="268"/><div className="nameTag"><span>Ricardo</span><br/>ReactJS / Front-End Master</div></div></Col>
              <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg" width="268" height="268"/><div className="nameTag"><span>Eric</span><br/>Ruby on Rails / Back-end Pro</div></div></Col>
              <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg" width="268" height="268"/><div className="nameTag"><span>Don</span><br/>NodeJS / Full Stack Expert</div></div></Col>
            </Row>
          </Container>
        <button className="btn btn-grey">Get a quote</button>
      <style jsx>{` 
     
      .btn {
        display: inline-block;
        padding: 1.2em 1.4em;
        box-shadow: 3px 3px rgba(125,125,125,0.2);
        background-color: #B92C2C;
        font-size: .8rem;
        font-weight: 700;
        letter-spacing: 1px;
        color: #ffffff;
        text-transform: uppercase;
        -webkit-transition: background-color 0.2s;
        -moz-transition: background-color 0.2s;
        transition: background-color 0.2s;
      }
      .btn-grey {
        display: inline-block;
        background-color: darkslategray;
        color: #fff;
        position: relative;
        bottom: 20px;
    }

      .foundersBlock {
        padding-top: 1em;
        max-width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .founder {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        // img {
        //   max-width: 100%;
        //   width: 300px;
        //   flex: 1;
        // }
        
          // span {
          //   font-size: 1.2rem;
          // }
        }
        .nameTag {
          display: block;
          position: relative;
          bottom: 58px;
          background-color: rgba(51, 51, 51, .8);
          width: 100%;
          color: white;
          @include bodyStyle;
          font-size: .9rem;
      }

      .founderstitle {
        letter-spacing: .5rem;
        font-size: 1.8em;
        text-transform: uppercase;
        font-weight: 500;
        color: #fff;
        @include bodyStyle;
        padding-top: 1em;
        max-width: 85vw;
      }

      .founders-container {
      
        display: flex;
        flex-direction: column;
        align-items: center;
       
      }

   
      .White-title {
        font-size: 2.5em;
        font-weight: 100;
        color: white;
        @include centeredContent;
        text-align: center;
      }

      
      `}</style>
      </div>
  </div>

{/* Who we serve */}

<div className={ClassNames("row", css.background)}>
<div className={ClassNames("col ml-3", css.s)}>
<div className={ClassNames("row m-5")}>
<div className="col">
<div className={ClassNames("pb-4")}>
    <h2 id='whoWeServe'><span className={css.txtcolor}>WHO</span> WE SERVE</h2>
    </div>
    <div className={ClassNames("row")}>
    <div className={ClassNames("col")}>
    <p className={css.body}><span className={css.serveColor}>Enterprise customers</span> hire us to build and maintain the web apps critical to their operations.</p></div>
    </div>
   

    <div className={ClassNames("row")}>
    <div className={ClassNames("col")}>
    <p className={css.body}><span className={css.serveColor}>Tech startups</span> partner with us to build and maintain the web front-ends and back-ends at the core of their business.</p></div>
</div>

<div className={ClassNames("row")}>
<div className="col">
 <Button>Get a quote</Button>
  </div>
  </div>

  </div>
  </div>
  </div>
  <div className={ClassNames("col")}></div>
  </div>
  
 

  {/* Startup & Featured Post */}
  <div className={ClassNames("row")}>

  <div className={ClassNames("col-lg-9", css.grey)}>
  <div className="row">

  <div className="col-lg-4 m-5">
  <img src="https://picsum.photos/400/400" alt="This is a profile picture" className={css.profilePicture} />
  </div>
  <div className="col-lg-6 m-5">
  <h2>Start-up Culture, Corporate-Grade Service.</h2>
<p>We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level.</p>
<Button>Get a quote</Button>
  </div>

  </div>
  </div>
  <div className={ClassNames("col-lg-3", css.light)}>
  <div className="row justify-content-center p-4">
  <h2><span className={css.txtcolor}>FEATURED</span> Post</h2>
  </div>
  <div className={ClassNames("row mx-4", css.g)}>
    <h4 className={css.smaller}>How to Upgrade PHP in a MAMP Environment</h4>
    </div>
  </div>

  </div>

  <div className={ClassNames("row")}>
  <div className="row">
  <div className="col-lg-2 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 ml-0 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 ml-0 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 mr-4">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  </div>

  <div className="row pt-3">
  <div className="col-lg-2 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 ml-0 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 ml-0 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 mr-5">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  <div className="col-lg-2 mr-4">
  <img src="https://picsum.photos/256/200" alt="This is a profile picture" />
  </div>
  </div>
  
  
  </div>
</div>
</ >
);

export default HomePage;

// <a href="/" className="cd-btn">Get a Quote</a>


{/* <div class="w-100"></div>
    <div class="col"> <img src="https:\\beta.chiedo.com\wp-content\uploads\2019\02\bar-track-300x188.png" alt="BarTrack"/></div>
    <div class="col">
    <Button className={css.Quote}>Get a Quote</Button>
    </div> */}





    

// const FoundingMembers = (props) => {
//     return (
//         <div id="founders-container">
//           <Container className="White-title founders-title" fluid>
//             <h3>Our Founding Web Developers</h3>
//           </Container>
//           {console.log(props.media)}
//           <Container id="foundersBlock" fluid style={{ lineHeight: '32px' }}>
//             <Row id="founders-row">
//               <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg"/><div className="nameTag"><span>Chiedo</span><br/>Founder, Solutions Architect</div></div></Col>
//               <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg"/><div className="nameTag"><span>Ricardo</span><br/>ReactJS / Front-End Master</div></div></Col>
//               <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg"/><div className="nameTag"><span>Eric</span><br/>Ruby on Rails / Back-end Pro</div></div></Col>
//               <Col lg={3}><div className="founder"><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg"/><div className="nameTag"><span>Don</span><br/>NodeJS / Full Stack Expert</div></div></Col>
//             </Row>
//           </Container>
//         <button className="btn btn-grey">Get a quote</button>
//       <style jsx>{` 
//         .btn-grey {
//           display: inline-block;
//           background-color: darkslategray;
//           color: #ffffff;
//           position: relative;
//           bottom: 20px;
//       }
      
//       `}</style>
//       </div>
//     )
// }
// export default FoundingMembers




