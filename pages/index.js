import ClassNames from 'classnames';
import css from './style.scss';
import HomePage from '../Common/Homepage' 
import Header from '../Header'  
import Footer from '../Footer' 

function Home() {
  return  <div className={css.hideSpace}>
    <Header />
    <HomePage />
    <Footer />
    </div>
}

export default Home






