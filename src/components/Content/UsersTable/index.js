import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import Select from './Select';
import User from './User';

/**
 * @TODO: Temporary fake users
 */
import MOCK_USERS from '../../../mockData/MOCK_USERS_500';

export default () => (
  <HTMLTable bordered={true} interactive={true} striped={true}>
    <thead>
    <tr>
      <th>
        <Select items={MOCK_USERS} item={null} title="Имя" textKey="name"/>
      </th>
      <th>Телефон</th>
      <th>e-mail</th>
      <th>Должность</th>
      <th>Компания</th>
      <th>Отдел</th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
