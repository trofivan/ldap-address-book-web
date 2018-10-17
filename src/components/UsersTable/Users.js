import React from 'react';
import User from './User';

// TODO: change index key to LDAP attribute `dn`
export default ({ visibleUsers, visibleCount}) => (
  <>
    {visibleUsers.slice(0, visibleCount).map(person => <User key={person.id} person={person}/>)}
  </>
);
