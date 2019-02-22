import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import SocialLink from './SocialLink';
import css from './style.scss';

const SocialMediaLinks = ({ className, links }) => {
  const SocialLinks = links.map((link, index) => (
    <SocialLink link={link} index={index} key={String(Symbol(`Link Item ${index}`))} />
  ));
  return (
    <ul className={ClassNames(css.socialMediaList, className)}>
      {SocialLinks}
    </ul>
  );
};

SocialMediaLinks.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

SocialMediaLinks.defaultProps = {
  className: '',
  links: [],
};

export default SocialMediaLinks;
