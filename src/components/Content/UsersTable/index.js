import { HTMLTable } from '@blueprintjs/core';
import React from 'react';
import User from './User';

/**
 * @TODO: Temporary fake users
 */
import MOCK_USERS from './MOCK_USERS';

export default () => (
  <HTMLTable bordered={true} interactive={true} striped={true}>
    <thead>
    <tr>
      <th>Имя</th>
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
