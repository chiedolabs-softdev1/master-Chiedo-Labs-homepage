// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import Container from '../Common/Components/Container';
// // import Navigation from 'Features/Navigation/components/Navigation';
// import Button from '../Common/Components/Button'
// import SocialMediaLinks from '../Common/Components/SocialMedia/components/SocialMediaLinks';

// import { FOOTER_NAV_LINKS, SOCIAL_LINKS } from 'Base/constants/links';
// import css from './style.scss';

// const Footer = ({ className }) => (
//   <footer className={className}>
//     <Container>
//       {/* <Navigation
//         className={css.navigation}
//         links={FOOTER_NAV_LINKS}
//       /> */}
//       <div className={css.connectRow}>
//         <h3 className="font-weight-bold">
//           <Link href="/">
//             <a>MORE LINKS Blog
// Join the Team
// Facebook
// Twitter CHIEDO LABS </a>
//           </Link>
//         </h3>
//         <SocialMediaLinks className={css.footerSocial} links={SOCIAL_LINKS} />
//       </div>
//     </Container>
//   </footer>
// );

// Footer.propTypes = {
//   className: PropTypes.string,
// };

// Footer.defaultProps = {
//   className: '',
// };

// export default Footer;

import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    return (
        <>
        <Container id="linksAndFounder" fluid style={{ lineHeight: '32px' }}>
        <Row>
            <Col className="greybox centered"  lg={7} xl={4} xl={{ order: 12 }} lg={{ order: 12 }} >
                <img id='featured-image-chiedo' src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/chiedo-sitting-small.png"/>
            </Col>
            <Col xl={5} lg={5} className="ourFounder" xl={{ order: 12 }} lg={{ order: 12 }} >
            <h3>Meet Our Founder</h3><br/>
                <p>If you need new web developers or want to talk about 
                    your tech startup, let's connect on LinkedIn and meet 
                    for lunch or coffee!
                </p>
            <button className="btn">Connect on LinkedIn</button>
            <br/>
            Copyright 2019 © Chiedo Labs, LLC.
            </Col>
            <Col  className="moreLinks" xl={3} lg={12} xl={{ order: 1 }} lg={{ order: 1 }}>
            <ul>
            <span className="redText" style={{ fontSize: '2.5rem', }}>MORE LINKS</span>
                <li>Blog</li>
                <li>Join the Team</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            </Col>
            
        </Row>
      </Container>
      <style jsx>{` 
        .button {
            width: 200px;
        }
      `}</style>
      </>
    )
}
export default Footer;