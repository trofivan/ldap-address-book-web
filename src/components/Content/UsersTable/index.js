import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import Select from './Select';
import User from './User';

/**
 * @TODO: Temporary fake users
 */
import MOCK_USERS from '../../../mockData/MOCK_USERS_2500';
// import MOCK_DATA from '../../../mockData/MOCK_USERS_200_WITH_NULL';

// const MOCK_DATA_ARRAY = MOCK_DATA
//   .reduce((acc, item) => [
//     ...acc,
//     item.id,
//     item.name,
//     item.phone,
//     item.mobile,
//     item.company,
//     item.title,
//     item.mail,
//     item.department
//   ], [])
//   .filter(item => item);

export default () => (
  <HTMLTable bordered={true} interactive={true} striped={true}>
    <thead>
    <tr>
      <th>
        <Select
          items={
            MOCK_USERS
              .map(item => item.name)
              .filter(item => item)
          }
          name={`Имя`}
          icon={`person`}
          onItemSelect={(item) => {
            console.log(item);
          }}
        />
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
        {/*<SelectOld items={MOCK_USERS.map(u => u.mail)}*/}
        {/*current={null}*/}
        {/*name="e-mail"*/}
        {/*icon="envelope"*/}
        {/*attrName="mail"/>*/}
      </th>
      <th>
        {/*<SelectOld items={MOCK_USERS.map(u => u.title)}*/}
        {/*current={null}*/}
        {/*name="Должность"*/}
        {/*icon="id-number"*/}
        {/*attrName="title"/>*/}
      </th>
      <th>
        {/*<SelectOld items={MOCK_USERS.map(u => u.company)}*/}
        {/*current={null}*/}
        {/*name="Компания"*/}
        {/*icon="office"*/}
        {/*attrName="company"/>*/}
      </th>
      <th>
        {/*<SelectOld items={MOCK_USERS.map(u => u.department)}*/}
        {/*current={null}*/}
        {/*name="Отдел"*/}
        {/*icon="diagram-tree"*/}
        {/*attrName="department"/>*/}
      </th>
    </tr>
    </thead>
    <tbody>
    {MOCK_USERS.map(user => <User person={user} key={user.id}/>)}
    </tbody>
  </HTMLTable>
);
