import React from 'react';
import User from './User';

// @TODO: change index key to LDAP attribute `dn`
export default ({ visibleUsers }) => (
  <>
    {visibleUsers.map(person => <User key={person.id} person={person}/>)}
  </>
);
