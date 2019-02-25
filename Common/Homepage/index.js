import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';
import Button from '../Components/Button'
import Section from '../Section'

const HomePage = () => (
 <> 
 <Section /> 
<div class="container">
  <div class="row pt-5">
    <div className={ClassNames("col", css.color)}>Column</div>
    <div class="col">Column</div>
  </div>
  <div class="row pt-5">
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
  <div class="row pt-5">
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
  <div class="row pt-5">
    <div class="col">Column</div>
    <div class="col">Column</div>
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