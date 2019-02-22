import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from '../Common/Components/Container';
// import Navigation from 'Features/Navigation/components/Navigation';
import Button from '../Common/Components/Button'
import SocialMediaLinks from '../Common/Components/SocialMedia/components/SocialMediaLinks';

import { FOOTER_NAV_LINKS, SOCIAL_LINKS } from 'Base/constants/links';
import css from './style.scss';

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      {/* <Navigation
        className={css.navigation}
        links={FOOTER_NAV_LINKS}
      /> */}
      <div className={css.connectRow}>
        <h3 className="font-weight-bold">
          <Link href="/">
            <a>Connect With Us</a>
          </Link>
        </h3>
        <SocialMediaLinks className={css.footerSocial} links={SOCIAL_LINKS} />
      </div>
    </Container>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;