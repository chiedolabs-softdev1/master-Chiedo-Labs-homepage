import Link from 'next/link';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

const SocialLink = ({ index, link }) => (
  <li className={link.className}>
    <Link
      href={link.href}
    >
      <a target="_blank" tabIndex={index} title={link.title}>
        <i
          className={ClassNames('fab', `fa-${link.icon}`)}
          aria-label={link.title}
        />
      </a>
    </Link>
  </li>
);

SocialLink.propTypes = {
  index: PropTypes.number.isRequired,
  /* eslint-disable-next-line */
  link: PropTypes.object.isRequired,
};

export default SocialLink;
