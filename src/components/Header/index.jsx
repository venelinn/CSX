import React from 'react';
import Fade from 'react-reveal/Fade';
//import { CSSTransition } from 'react-transition-group';

import styles from './index.module.scss';

import './header.scss';

const Header = props => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__content}>
        <Fade duration={2000} delay={400}>
          <h1>{props.data.title}</h1>
        </Fade>
        <Fade duration={1000} delay={500}>
          <p className={styles.intro__position}>{props.data.description}</p>
        </Fade>
      </div>
    </section>
  )
};

export default Header;
