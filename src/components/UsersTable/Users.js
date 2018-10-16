import { Button } from '@blueprintjs/core';
import React from 'react';
import User from './User';

// TODO: change index key to LDAP attribute `dn`
// TODO: hardcode visibleCount delta
export default ({ visibleUsers, visibleCount, setVisibleItems }) => (
  <>
    {visibleUsers.slice(0, visibleCount).map(person => <User key={person.id} person={person}/>)}
    <tr>
      <td colSpan={6}>
        <Button text={`Get more users...`} onClick={() => setVisibleItems(visibleCount + 10)}/>
      </td>
    </tr>
  </>
);
