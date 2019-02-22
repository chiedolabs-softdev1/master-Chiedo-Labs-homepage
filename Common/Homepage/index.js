import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';
import Button from '../Components/Button'

const HomePage = () => (
<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="w-100"></div>
    <div class="col">Column</div>
    <div class="col">
    <Button className={css.Quote}>Get a Quote</Button>
    </div>
  </div>
</div>
);

export default HomePage;

// <a href="/" className="cd-btn">Get a Quote</a>