import Link from 'next/link'
import ClassNames from 'classnames';
import css from './style.scss';

function Header() {
  return (
    <div className={ClassNames(css.main, css.dim)}>
    <a href="https://labs.chiedo.com"> <img src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11" alt="Chiedo Labs Web Development Harrisonburg VA &amp; Charlottesville VA web design" /></a>
    </div>
  )
}

export default Header


