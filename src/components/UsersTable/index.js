import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import {
  FilterUsers,
  FilterMails,
  FilterPhones,
  FilterTitles,
  FilterCompanies,
  FilterDepartments
} from '../../containers/Filters';

import User from './User';

/**
 * @TODO: Temporary fake users
 */
import MOCK_USERS from '../../mockData/MOCK_USERS_2500';

export default () => (
  <HTMLTable bordered={true} interactive={true} striped={true}>
    <thead>
    <tr>
      <th>
        <FilterUsers/>
      </th>
      <th>
        <FilterPhones/>
      </th>
      <th>
        <FilterMails/>
      </th>
      <th>
        <FilterTitles/>
      </th>
      <th>
        <FilterCompanies/>
      </th>
      <th>
        <FilterDepartments/>
      </th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
