import React from 'react';
import styles from './Header.module.scss';
import { Button, Navbar, Classes } from '@blueprintjs/core';
import { Alignment } from '@blueprintjs/core/lib/cjs/common/alignment';

export default () => (
  <header className={styles.header}>
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>This is Heading</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button className={Classes.MINIMAL} icon="help"/>
      </Navbar.Group>
    </Navbar>
  </header>
);
