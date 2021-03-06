import React from 'react';
import styles from './Header.module.scss';
import { Button, Navbar, Classes } from '@blueprintjs/core';
import { Alignment } from '@blueprintjs/core/lib/cjs/common/alignment';

// TODO: temporary button FetchUsers
import FetchUsers from '../../containers/FetchUsers';

// TODO: temporary button FetchUsers
export default () => (
  <header className={styles.header}>
    <Navbar className={styles.navbar}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>{process.env.REACT_APP_NAME || 'LDAP Address Book'}</Navbar.Heading>
        <FetchUsers/>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button className={Classes.MINIMAL} icon="help"/>
      </Navbar.Group>
    </Navbar>
  </header>
);
