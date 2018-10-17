import React from 'react';

export default ({ person }) => {
  const { name, phone, ipPhone, mobile, mail, title, company, department } = person;
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{ipPhone}</td>
      <td>{mobile}</td>
      <td><a href={`mailto:${mail}`}>{mail}</a></td>
      <td>{title}</td>
      <td>{company}</td>
      <td>{department}</td>
    </tr>
  );
};
