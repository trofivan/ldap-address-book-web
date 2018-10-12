import React from 'react';
import styles from './App.module.scss';
import Header from './Header/index';
import Content from './Content/index';
import Footer from './Footer/index';

const App = () => (
  <section className={styles.app}>
    <Header/>
    <Content/>
    <Footer/>
  </section>
);

export default App;
