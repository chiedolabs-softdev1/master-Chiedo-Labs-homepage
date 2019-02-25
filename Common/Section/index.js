import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';
import Slider from '../Components/Slider'

const Section = () => (
<>
<Slider />
<div className={css.inner}>
  <div className="row">
    <div className="col">
    <div className="row justify-content-center">
    <h2 className={css.skinny}>Hire our team to:</h2>
    </div>
    <div className="row justify-content-center pt-3">
        <span className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Build and maintain:</span>
        <span className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Web applications</span>
        <span className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Web back-ends</span>
        <span className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Web front-ends</span>
        <span className={ClassNames(css.color, "mr-lg-4 mb-lg-0")}>Custom websites</span>
    </div>
  </div>
</div>
</div>
</>

  );
  
  export default Section;


  // <div className={ClassNames(css.color, "mt-3 mt-lg-0")}></div>