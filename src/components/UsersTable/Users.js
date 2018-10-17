import React from 'react';
import User from './User';

export default ({ visibleUsers, visibleCount }) => (
  <>
    {visibleUsers.slice(0, visibleCount).map(person => <User key={person.dn} person={person}/>)}
  </>
);
