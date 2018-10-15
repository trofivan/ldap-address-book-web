import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import {
  SelectUser,
  SelectMail,
  SelectPhones,
  SelectTitle,
  SelectCompany,
  SelectDepartment
} from '../../../containers/Select';

import User from './User';

/**
 * @TODO: Temporary fake users
 */
import MOCK_USERS from '../../../mockData/MOCK_USERS_2500';

export default () => (
  <HTMLTable bordered={true} interactive={true} striped={true}>
    <thead>
    <tr>
      <th>
        <SelectUser/>
      </th>
      <th>
        <SelectPhones/>
      </th>
      <th>
        <SelectMail/>
      </th>
      <th>
        <SelectTitle/>
      </th>
      <th>
        <SelectCompany/>
      </th>
      <th>
        <SelectDepartment/>
      </th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
