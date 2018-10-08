import React from 'react';
import { Button, HTMLTable, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import User from './User';

/**
 * @TODO: Temporary fake users
 */
import MOCK_USERS from './MOCK_USERS_500';

const names = MOCK_USERS.map(e => e.name);

export default () => (
  <HTMLTable bordered={true} interactive={true} striped={true}>
    <thead>
    <tr>
      <th>
        <Select
          items={names}
          itemRenderer={text => <MenuItem text={text} />}
          noResults={<MenuItem disabled={true} text="No results." />}
          onItemSelect={(e) => {
          console.log(e);
        }}>
          <Button
            icon="user"
            rightIcon="caret-down"
            text="Имя"
          />
        </Select>
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
