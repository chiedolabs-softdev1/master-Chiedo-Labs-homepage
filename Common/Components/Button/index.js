import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';

const Button = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={ClassNames(css.button, className)}
    {...rest}
  >
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
