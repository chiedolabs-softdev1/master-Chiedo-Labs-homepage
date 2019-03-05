import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';
import NavBar from '../Components/NavBar'

const MainMenu = () => (
<>
<NavBar />
<div id='home-top' className={css.inner}>
  <div className="row">
    <div className="col">
    <div className="row justify-content-center">
    <h2 className={css.skinny}>Hire our team to:</h2>
    </div>
    <div className="row justify-content-center pt-3">
        <p className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Build and maintain:</p>
        <p className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Web applications</p>
        <p className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Web back-ends</p>
        <p className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Web front-ends</p>
        <p className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Custom websites</p>
    </div>
  </div>
</div>
</div>
</>

  );
  
  export default MainMenu;


  // <div className={ClassNames(css.color, "mt-3 mt-lg-0")}></div>