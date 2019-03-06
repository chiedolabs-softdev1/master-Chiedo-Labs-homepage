import ClassNames from 'classnames';
import css from './style.scss';

const Foot = () => {
    return (
        <div className={css.background}>
        <div className="row">

        <div className={ClassNames("col-lg-3", css.moreLinks)}>
            <ul>
            <span className={css.redText}>MORE LINKS</span>
                <li>Blog</li>
                <li>Join the Team</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            </div>
            
            <div className={ClassNames("col-lg-9", css.background)}>
            <div className="row">
         <div className="col-lg-5"> 
                <img  src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/chiedo-sitting-small.png"/>
            </div>
            <div className={ClassNames("col-lg-7", css.ourFounder)}>
            <h3>Meet Our Founder</h3><br/>
                <p>If you need new web developers or want to talk about 
                    your tech startup, let's connect on LinkedIn and meet 
                    for lunch or coffee!
                </p>
            <button className={css.btn}>Connect on LinkedIn</button>
            <p>Copyright 2019 © Chiedo Labs, LLC.</p>
            </div>  
            </div>  
            </div> 
       </div>
      </div>

    )
}
export default Foot;


