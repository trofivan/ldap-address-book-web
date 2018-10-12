import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import { SelectUser, SelectMail, SelectPhones, SelectTitle } from '../../../containers/Select';
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
        {/*<Select*/}
        {/*items={[...new Set(MOCK_USERS.map(item => item.company).filter(item => item))]}*/}
        {/*name="Компания"*/}
        {/*icon="office"*/}
        {/*onItemSelect={(item) => {*/}
        {/*console.log(item);*/}
        {/*}}*/}
        {/*/>*/}
      </th>
      <th>
        {/*<Select*/}
        {/*items={[...new Set(MOCK_USERS.map(item => item.department).filter(item => item))]}*/}
        {/*name="Отдел"*/}
        {/*icon="diagram-tree"*/}
        {/*onItemSelect={(item) => {*/}
        {/*console.log(item);*/}
        {/*}}*/}
        {/*/>*/}
      </th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
