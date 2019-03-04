import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';
import Button from '../Components/Button'
import Section from '../Section'

const HomePage = () => (
 <> 
 <Section /> 
<div>
{/* What we do */}
<div className={ClassNames("row", css.background)}>
    <div className={ClassNames("col")}></div>
    <div className={ClassNames("col", css.s)}>
    <div className={ClassNames("row")}>
    <h2 id='whatWeDo'><span className={css.txtcolor}>WHAT</span> WE DO</h2>
    </div>
    <div className={ClassNames("row")}>
    We build and maintain:
    </div>
    <div className={ClassNames("row")}>
Web Front-ends with HTML, CSS, and a library called React.
</div>
<div className={ClassNames("row")}>
Web Back-ends using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku.
</div>
<div className={ClassNames("row")}>
Custom Websites from the ground up as opposed to using pre-existing templates.</div>
<div className="row">
 <button className={css.btn}>Get a quote</button>
  </div>
  </div>
  </div>

{/* Founding Developers */}
  <div className={ClassNames("row pt-5 justify-content-center", css.color)}>
  OUR FOUNDING WEB DEVELOPERS
  </div>

{/* Who we serve */}
  <div className={ClassNames("row", css.background)}>
    <div className={ClassNames("col ml-3", css.s)}>
    <div className={ClassNames("row")}>
    <div className="col">
    <h2 id='whoWeServe'><span className={css.txtcolor}>WHO</span> WE SERVE</h2>
    </div>
    </div>
    <div className={ClassNames("row")}>
    <div className="col">
    <span className={css.serveColor}>Enterprise customers</span> hire us to build and maintain the web apps critical to their operations.</div>
    </div>
    <div className={ClassNames("row")}>
    <div className="col">
    <span className={css.serveColor}>Tech startups</span> partner with us to build and maintain the web front-ends and back-ends at the core of their business.</div>
    </div>
    <div className="row">
    <div className="col">
 <button className={css.btn}>Get a quote</button>
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
<button className={css.btn}>Get a quote</button>
  </div>

  </div>
  </div>
  <div className={ClassNames("col-lg-3", css.light)}>
  <div className="row p-3">
  <h2><span className={css.txtcolor}>FEATURED</span> Post</h2>
  </div>
  <div className={ClassNames("row m-5", css.g)}>
    <h4 className={css.smaller}>How to Upgrade PHP in a MAMP Environment</h4>
    </div>
  </div>

  </div>

  <div className={ClassNames("row p-5", css.white)}>
  LINKS
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

  