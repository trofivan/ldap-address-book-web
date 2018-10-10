import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import Select from './Select';
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
        <Select items={MOCK_USERS.map(el => el.name)}
                itemSelect={null}
                onItemSelect={(item) => {
                  console.log(item);
                }}
                name="Имя"
                icon="person"
                attrName="name"/>
      </th>
      <th>
        <Select items={MOCK_USERS.reduce((acc, u) => [...acc, u.phone, u.ipPhone, u.mobile], [])}
                current={null}
                name="Телефон"
                icon="phone"
                attrName="phone"/>
      </th>
      <th>
        <Select items={MOCK_USERS.map(u => u.mail)}
                current={null}
                name="e-mail"
                icon="envelope"
                attrName="mail"/>
      </th>
      <th>
        <Select items={MOCK_USERS.map(u => u.title)}
                current={null}
                name="Должность"
                icon="id-number"
                attrName="title"/>
      </th>
      <th>
        <Select items={MOCK_USERS.map(u => u.company)}
                current={null}
                name="Компания"
                icon="office"
                attrName="company"/>
      </th>
      <th>
        <Select items={MOCK_USERS.map(u => u.department)}
                current={null}
                name="Отдел"
                icon="diagram-tree"
                attrName="department"/>
      </th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
