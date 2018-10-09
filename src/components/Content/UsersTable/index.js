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
        <Select items={MOCK_USERS}
                current={null}
                name="Имя"
                icon="person"
                itemsTextAttr="name"/>
      </th>
      <th>
        <Select items={MOCK_USERS}
                current={null}
                name="Телефон"
                icon="phone"
                itemsTextAttr="phone"/>
      </th>
      <th>
        <Select items={MOCK_USERS}
                current={null}
                name="e-mail"
                icon="envelope"
                itemsTextAttr="mail"/>
      </th>
      <th>
        <Select items={MOCK_USERS}
                current={null}
                name="Должность"
                icon="id-number"
                itemsTextAttr="title"/>
      </th>
      <th>
        <Select items={MOCK_USERS}
                current={null}
                name="Компания"
                icon="office"
                itemsTextAttr="company"/>
      </th>
      <th>
        <Select items={MOCK_USERS}
                current={null}
                name="Отдел"
                icon="diagram-tree"
                itemsTextAttr="department"/>
      </th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
