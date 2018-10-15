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
import Users from '../../containers/Users';

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
    <Users/>
    </tbody>
  </HTMLTable>
);
