import React from 'react';
import styles from './App.module.scss';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => (
  <section className={styles.app}>
    <Header/>
    <Content/>
    <Footer/>
  </section>
);

export default App;
