import ClassNames from 'classnames';
import css from './style.scss';
import HomePage from '../Common/Homepage' 
import Header from '../Header'  
import Foot from '../Common/Components/Foot' 

function Home() {
  return  <div className={css.hideSpace}>
    <Header />
    <HomePage />
    <Foot />
    </div>
}

export default Home






