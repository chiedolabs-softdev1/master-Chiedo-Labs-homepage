import ClassNames from 'classnames';
import css from './style.scss';
import Button from '../Button'

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
                <p className={ClassNames("pt-3", css.font)}>Chie<span className={css.red}>do</span> Labs</p>
            </ul>
            </div>
            
            <div className={ClassNames("col-lg-9", css.background)}>
            <div className="row">
         <div className="col-lg-5 px-4 py-5"> 
                <img  src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/chiedo-sitting-small.png"/>
            </div>
            <div className={ClassNames("col-lg-7", css.ourFounder)}>
            <div className="row p-5">
            <h3 className={css.skinny}>Meet Our Founder</h3><br/>
                <p className={css.bio}>If you need new web developers or want to talk about 
                    your tech startup, let's connect on LinkedIn and meet 
                    for lunch or coffee!
                </p>
            <Button>Connect on LinkedIn</Button>
           
            </div>  
            </div>  
            </div>
            <div className={ClassNames("row justify-content-center", css.copyRight)}>
            <p className="pt-3">Copyright 2019 © Chiedo Labs, LLC.</p>
            </div>
            </div> 
       </div>
      </div>

    )
}
export default Foot;


