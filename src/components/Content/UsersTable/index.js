import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import Select from '../../../containers/Select';
import SelectUsers from '../../../containers/SelectUsers';
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
        <SelectUsers/>
      </th>
      <th>
        <Select
          items={
            MOCK_USERS
              .reduce((acc, u) => [...acc, u.phone, u.ipPhone, u.mobile], [])
              .filter(item => item)
          }
          name="Телефон"
          icon="phone"
          onItemSelect={(item) => {
            console.log(item);
          }}
        />
      </th>
      <th>
        <Select
          items={
            MOCK_USERS
              .map(item => item.mail)
              .filter(item => item)
          }
          name="e-mail"
          icon="envelope"
          onItemSelect={(item) => {
            console.log(item);
          }}
        />
      </th>
      <th>
        <Select
          items={[...new Set(MOCK_USERS.map(item => item.title).filter(item => item))]}
          name="Должность"
          icon="id-number"
          onItemSelect={(item) => {
            console.log(item);
          }}
        />
      </th>
      <th>
        <Select
          items={[...new Set(MOCK_USERS.map(item => item.company).filter(item => item))]}
          name="Компания"
          icon="office"
          onItemSelect={(item) => {
            console.log(item);
          }}
        />
      </th>
      <th>
        <Select
          items={[...new Set(MOCK_USERS.map(item => item.department).filter(item => item))]}
          name="Отдел"
          icon="diagram-tree"
          onItemSelect={(item) => {
            console.log(item);
          }}
        />
      </th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
