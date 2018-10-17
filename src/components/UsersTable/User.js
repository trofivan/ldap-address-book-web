import React from 'react';

export default ({ person }) => {
  const { displayName, telephoneNumber, ipPhone, mobile, mail, title, company, department } = person;
  return (
    <tr>
      <td>{displayName}</td>
      <td>{telephoneNumber}</td>
      <td>{ipPhone}</td>
      <td>{mobile}</td>
      <td><a href={`mailto:${mail}`}>{mail}</a></td>
      <td>{title}</td>
      <td>{company}</td>
      <td>{department}</td>
    </tr>
  );
};
