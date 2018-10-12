import React from 'react';
import styles from './App.module.scss';
import Header from './Header/index';
import Content from './Content/index';
import Footer from './Footer/index';

/**
 * @TODO: temp
 */
import TestBtn from '../containers/Test';

const App = () => (
  <section className={styles.app}>
    <TestBtn />
    <Header/>
    <Content/>
    <Footer/>
  </section>
);

export default App;
