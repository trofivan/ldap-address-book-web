import React from 'react';
import UsersTable from '../UsersTable/index';
import styles from './Content.module.scss';


export default () => (
  <section className={styles.content}>
    <UsersTable/>
  </section>
);
