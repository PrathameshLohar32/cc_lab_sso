import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Hero.module.css';
import classNames from 'classnames'; // Import classNames library
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';



const Hero = () => {
  const [bounce, setBounce] = React.useState(false);
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
  console.log("curr user", user);

  React.useEffect(() => {
    setBounce(true);
  }, []);

  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="SSO.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
        <div class="col-lg-6">
          <h1 className={classNames("display-5 fw-bold text-body-emphasis lh-1 mb-3", { [styles.bounce]: bounce })}>
            SSO: Enhancing User Authentication
          </h1>
          <p class="lead">Welcome to our cutting-edge Single Sign-On (SSO) solution! Enjoy seamless access to multiple applications with just one login. Say goodbye to password fatigue and hello to enhanced security and productivity. Experience the convenience of SSO – join us today!
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          {isAuthenticated ? (<button type="button" class="btn btn-danger btn-lg px-4 me-md-2" onClick={(e)=>logout()}>Logout</button>) : (<button type="button" class="btn btn-primary btn-lg px-4 me-md-2" onClick={e => loginWithRedirect()}>Login Now</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
