import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import css from './style.scss';

const Container = ({ children, className }) => (
  <div className={ClassNames(css.container, className)}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Container.defaultProps = {
  className: '',
};


export default Container;