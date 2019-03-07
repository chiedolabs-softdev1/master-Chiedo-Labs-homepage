import ClassNames from 'classnames';
import css from './style.scss';
import Button from '../Components/Button'
import MainMenu from '../MainMenu'

const HomePage = () => (
 <> 
 <MainMenu /> 
{/* What we do */}
<div className={ClassNames("row", css.background)}>
    <div className={ClassNames("col", css.half)}></div>
    <div className={ClassNames("col", css.s)}>
    <div className={ClassNames("row m-5")}>
    <div className="col">

    <div className={ClassNames("pb-4")}>
    <h2 id='what-WeDo'><span className={css.txtcolor}>WHAT</span> WE DO</h2>
    </div>
    <div className={ClassNames("row")}>
    <div className="col">
   <p className={css.body}> We build and maintain:</p>
    </div>
    </div>
    <div className={ClassNames("row")}>
    <div className="col">
    <p className={css.body}><u>Web Front-ends</u> with HTML, CSS, and a library called React.</p>
    </div>
    </div>
    <div className={ClassNames("row")}>
    <div className="col">
    <p className={css.body}><u>Web Back-ends</u> using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku.</p>
    </div>
    </div>
    <div className={ClassNames("row")}>
    <div className="col">
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
 
  <div className={css.foundersContainer}>
          <h3 className={ClassNames(css.whiteTitle, css.founderstitle)}>Our Founding Web Developers</h3>
          <div className={ClassNames(css.foundersblock, "mb-5")}>
          <div className="row">
            <div className="col-lg-3"><div className={css.founder}><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg" max-width="100%" flex="1" width="268" height="268"/><div className={css.nameTag}><span>Chiedo</span><br/>Founder, Solutions Architect</div></div></div>
            <div className="col-lg-3"><div className={css.founder}><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg" width="268" height="268"/><div className={css.nameTag}><span>Ricardo</span><br/>ReactJS / Front-End Master</div></div></div>
            <div className="col-lg-3"><div className={css.founder}><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg" width="268" height="268"/><div className={css.nameTag}><span>Eric</span><br/>Ruby on Rails / Back-end Pro</div></div></div>
            <div className="col-lg-3"><div className={css.founder}><img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg" width="268" height="268"/><div className={css.nameTag}><span>Don</span><br/>NodeJS / Full Stack Expert</div></div></div>
          </div>
          </div>
            <button className={ClassNames(css.btn, css.btnGrey)}>Get a quote</button>

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
    <p className={css.body}><span>Tech startups</span> partner with us to build and maintain the web front-ends and back-ends at the core of their business.</p></div>
</div>

<div className={ClassNames("row")}>
<div className="col">
 <Button>Get a quote</Button>
  </div>
  </div>

  </div>
  </div>
  </div>
  <div className={ClassNames("col", css.half)}></div>
  </div>
  
 

  {/* Startup & Featured Post */}
  <div className={ClassNames("row")}>

  <div className={ClassNames("col-lg-9", css.grey)}>
  <div className="row">

  <div className="col-lg-4 m-5">
  <img src="https://picsum.photos/400/400" alt="This is a profile picture" className={css.profilePicture} />
  </div>
  <div className={ClassNames("col-lg-6 m-5", css.startUp)}>
  <div className={ClassNames("row", css.big)}>
  <p>Start-up Culture, Corporate-Grade Service.</p>
  </div>
  <div className="row pt-1">
<p>We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level.</p>
</div>
<div className="row pt-2">
<Button>Get a quote</Button>
</div>
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

  <div className="row"> 
  <div className={ClassNames("row", css.half)}>
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

  <div className={ClassNames("row pt-3", css.half)}>
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

</ >
);

export default HomePage;





