import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import {
  FilterDisplayNames,
  FilterMails,
  FilterPhones,
  FilterIpPhones,
  FilterMobilePhones,
  FilterTitles,
  FilterCompanies,
  FilterDepartments
} from '../../containers/Filters';
import Users from '../../containers/Users';
import ButtonMoreUsers from '../../containers/ButtonMoreUsers';

export default () => (
  <HTMLTable bordered={true} interactive={true} striped={true}>
    <thead>
    <tr>
      <th>
        <FilterDisplayNames/>
      </th>
      <th>
        <FilterPhones/>
      </th>
      <th>
        <FilterIpPhones/>
      </th>
      <th>
        <FilterMobilePhones/>
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
    <tfoot>
    <tr>
      <td colSpan={8}>
        <ButtonMoreUsers/>
      </td>
    </tr>
    </tfoot>
  </HTMLTable>
);
